function generate_table_html(preloading) {
    return gen_table(folder_names.map(n => "<td>" + n + "</td>").join(""), linzi => folder_names.map(name => "<td>" + getImageFromLinziAndFolderIfExists(name, linzi) + "</td>").join(""));
}
function gen_table(header_row, main_row, id) {
    let ans = "";
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
function generate_table_narrow_html(id, hidden_columns) {
    let ans = "";
    if (id) {
        ans += `<table id=${id}>`;
    }
    else {
        ans += "<table>";
    }
    // first row
    ans += "<tr>";
    ans += "<th style='font-weight: normal'>字</th>";
    ans += imageAuthors
        .map((author, ind) => `<th style='font-weight: normal; text-align: center'>
			<span style="font-size: 70%">"${author}"</span><br>
			${folder_names.filter(fname => folder_type[fname] === author).join("<br>")}
			<br><input type='radio' name='sort' ${ind == 0 ? "checked" : ""} onclick='sort_narrow_table_by(${ind + 1})'></th>`)
        .join("");
    ans += "</tr>";
    let count_no_glyph_defined = 0;
    let count_defined_but_no_image_prepared = 0;
    let count_at_least_one_img_exists = 0;
    linzi_list.map((linzi) => {
        let imageExists = false;
        /* check if at least 1 image exists */
        for (var j = 0; j < folder_names.length; j++) {
            if (NEW_IMAGE_EXISTENCE_TABLE[folder_names[j]].includes(linzi)) {
                imageExists = true;
            }
        }
        if (imageExists) {
            count_at_least_one_img_exists++;
        }
        else if (defined_but_no_image_prepared.includes(linzi)) {
            count_defined_but_no_image_prepared++;
        }
        else {
            count_no_glyph_defined++;
        }
    });
    // second row
    ans += "<tr><td></td>";
    ans += imageAuthors
        .map((author) => {
        const count_from_this_author = linzi_list.filter((linzi) => folder_names.filter(fname => folder_type[fname] === author).filter(name => NEW_IMAGE_EXISTENCE_TABLE[name].includes(linzi)).length > 0).length;
        const count = count_at_least_one_img_exists + count_defined_but_no_image_prepared - count_from_this_author;
        if (count > 30) {
            return `<td style='text-align: center; font-weight: bold; font-size: 110%;'>残り${count}件</td>`;
        }
        else {
            return `<td style='text-align: center;'>残り${count}件</td>`;
        }
    })
        .join("");
    ans += "</tr>";
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
                return `<td>${linzi}</td>`;
            }
            else if (defined_but_no_image_prepared.includes(linzi)) {
                return `<td style="background-color: cyan">%${linzi}</td>`;
            }
            else {
                return `<td style="background-color: yellow">*${linzi}</td>`;
            }
        })();
        ans += first_cell;
        ans += imageAuthors.map((author, index) => "<td style='text-align: center'>"
            + ((hidden_columns === null || hidden_columns === void 0 ? void 0 : hidden_columns.includes(author)) || (hidden_columns === null || hidden_columns === void 0 ? void 0 : hidden_columns.includes(`${index}`)) ? `<span style="color: #005242">(hidden)</span>` :
                folder_names.filter(fname => folder_type[fname] === author).map(name => getImageFromLinziAndFolderIfExists(name, linzi)).join("")) + "</td>").join("");
        ans += "</tr>";
    });
    ans += "</table>";
    ans = `
			<div style="border: 1px solid blue; padding: 5px; margin: 5px">
				凡例:
				<table>
					<tr>
						<td style='background-color: yellow'>*漢字</td>
						<td>燐字の字形が定まっていない（現状${count_no_glyph_defined}件）</td>
					</tr>
					<tr>
						<td style='background-color: cyan'>%漢字</td>
						<td>燐字の字形が定まっているが画像が用意できていない（現状${count_defined_but_no_image_prepared}件）</td>
					</tr>
					<tr>
						<td>漢字</td>
						<td>燐字の字形が定まっていて、画像も用意できている（現状${count_at_least_one_img_exists}件）</td>
					</tr>
				</table>
			</div>` + ans;
    return ans;
}
function getImageFromLinziAndFolder(folder_name, linzi) {
    const height = 67;
    if (folder_name.includes("刀風官")) {
        return `<img src='${folder_name}/${linzi}.png' width='${534 / 246 * height}' height='${height}' />`;
    }
    else if (folder_name.includes("幾何刀字")) {
        return `<img src='${folder_name}/${linzi}.svg' width='${136 / 120 * height}' height='${height}' />`;
    }
    else if (folder_name.includes("たもと明朝")) {
        return `<img src='${folder_name}/${linzi}.svg' width='${height}' height='${height}' />`;
    }
    else {
        return `<img src='${folder_name}/${linzi}.png' width='${height}' height='${height}' />`;
    }
}
function getImageFromLinziAndFolderIfExists(folder_name, linzi) {
    const list = NEW_IMAGE_EXISTENCE_TABLE[folder_name];
    return list.includes(linzi)
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
