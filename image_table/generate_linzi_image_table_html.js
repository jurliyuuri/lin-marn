function generate_table_html(preloading) {
    return gen_table(folder_names.map(n => "<td>" + n + "</td>").join(""), linzi => folder_names.map(name => "<td>" + getImageFromLinziAndFolderIfExists(name, linzi) + "</td>").join(""));
}
function gen_table(header_row, main_row, id) {
    var ans = "";
    if (id) {
        ans += `<table id=${id}>`;
    }
    else {
        ans += "<table>";
    }
    ans += "<tr>";
    ans += "<td>字</td>";
    ans += header_row;
    ans += "</tr>";
    let count_asterisk = 0;
    let count_percent = 0;
    let count_exists = 0;
    linzi_list.map((linzi) => {
        let imageExists = false;
        /* check if at least 1 image exists */
        for (var j = 0; j < folder_names.length; j++) {
            if (NEW_IMAGE_EXISTENCE_TABLE[folder_names[j]].includes(linzi)) {
                imageExists = true;
            }
        }
        ans += "<tr>";
        const first_cell = (() => {
            if (imageExists) {
                if (defined_but_no_image_prepared.includes(linzi)) {
                    alert(`業務連絡: 「${linzi}」の画像は足したのでdefined_but_no_image_preparedから取り除くこと`);
                }
                count_exists++;
                return `<td>${linzi}</td>`;
            }
            else if (defined_but_no_image_prepared.includes(linzi)) {
                count_percent++;
                return `<td style="background-color: cyan">%${linzi}</td>`;
            }
            else {
                count_asterisk++;
                return `<td style="background-color: yellow">*${linzi}</td>`;
            }
        })();
        ans += first_cell;
        ans += main_row(linzi);
        ans += "</tr>";
    });
    ans += "</table>";
    ans = `
		<div style="border: 1px solid blue; padding: 5px; margin: 5px">
			凡例:
			<table>
				<tr>
					<td style='background-color: yellow'>*漢字</td>
					<td>燐字の字形が定まっていない（現状${count_asterisk}件）</td>
				</tr>
				<tr>
					<td style='background-color: cyan'>%漢字</td>
					<td>燐字の字形が定まっているが画像が用意できていない（現状${count_percent}件）</td>
				</tr>
				<tr>
					<td>漢字</td>
					<td>燐字の字形が定まっていて、画像も用意できている（現状${count_exists}件）</td>
				</tr>
			</table>
		</div>` + ans;
    return ans;
}
function generate_table_narrow_html(id) {
    const iterateOverAuthor = (f) => {
        let a = "";
        for (var k = 0; k < imageAuthors.length; k++) {
            a += "<td style='text-align: center'>"
                + f(folder_names.filter(fname => folder_type[fname] === imageAuthors[k]));
            +"</td>";
        }
        return a;
    };
    return gen_table(imageAuthors
        .map(author => `<td style='text-align: center'>
					<span style="font-size: 70%">"${author}"</span><br>
					${folder_names.filter(fname => folder_type[fname] === author).join("<br>")}
				 </td>`)
        .join(""), linzi => iterateOverAuthor((a) => a.map(name => getImageFromLinziAndFolderIfExists(name, linzi)).join("")), id);
}
function getImageFromLinziAndFolder(folder_name, linzi) {
    if (folder_name.includes("刀風官")) {
        return `<img src='${folder_name}/${linzi}.png' width='${534 / 246 * 100}' height='100' />`;
    }
    else if (folder_name.includes("幾何刀字")) {
        return `<img src='${folder_name}/${linzi}.svg' width='${136 / 120 * 100}' height='100' />`;
    }
    else {
        return `<img src='${folder_name}/${linzi}.png' width='100' height='100' />`;
    }
}
function getImageFromLinziAndFolderIfExists(folder_name, linzi) {
    return NEW_IMAGE_EXISTENCE_TABLE[folder_name].includes(linzi)
        ? getImageFromLinziAndFolder(folder_name, linzi)
        : "";
}
function checkImageExists(imageUrl, linzi, name, callBack) {
    var imageData = new Image();
    imageData.onload = function () {
        callBack(linzi, name, true);
    };
    imageData.onerror = function () {
        callBack(linzi, name, false);
    };
    imageData.src = imageUrl;
}
function linzi_image_table_local() {
    var IMAGE_EXISTENCE_TABLE_DUMMY = {};
    for (var i = 0; i < linzi_list.length; i++) {
        IMAGE_EXISTENCE_TABLE_DUMMY[linzi_list[i]] = {};
        for (var j = 0; j < folder_names.length; j++) {
            var imagePath = `${folder_names[j]}/${linzi_list[i]}.png`;
            var linzi = linzi_list[i];
            var name = folder_names[j];
            checkImageExists(imagePath, linzi, name, function (linzi, name, flag) {
                if (flag !== IMAGE_EXISTENCE_TABLE[linzi][name]) {
                    let message = "INCONSISTENCY!!! INCONSISTENCY!!! at " + linzi + ", " + name;
                    alert(message);
                    throw new Error(message);
                }
            });
        }
    }
    const generate_table_html_with_preloading = () => {
        var ans = "";
        ans += "<table>";
        ans += "<tr>";
        ans += "<td>字</td>";
        ans += folder_names.map(name => "<td>" + name + "</td>").join("");
        ans += "</tr>";
        for (var i = 0; i < linzi_list.length; i++) {
            ans += "<tr>";
            ans += `<td>${linzi_list[i]}</td>`;
            for (var j = 0; j < folder_names.length; j++) {
                ans += `<td>`;
                ans += getImageFromLinziAndFolder(folder_names[j], linzi_list[i]);
                ans += `</td>`;
            }
            ans += "</tr>";
        }
        ans += "</table>";
        return ans;
    };
    document.write(generate_table_html_with_preloading());
}
