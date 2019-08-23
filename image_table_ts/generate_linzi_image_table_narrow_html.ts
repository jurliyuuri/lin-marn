function generate_table_narrow_html(): string {
	var ans: string = "";
	ans += "<table>";

	ans += "<tr>";
    ans += "<td>字</td>"
    for (var k = 0; k < imageAuthors.length; k++) {
        ans += "<td style='text-align: center'>" 
        + folder_names.filter(fname => folder_type[fname] === imageAuthors[k]).join("<br>");
        + "</td>";
    }
	ans += "</tr>";

	let count_asterisk = 0;
	let count_percent = 0;

	for (var i: number = 0; i < linzi_list.length; i++) {
		ans += "<tr>";
        let flag: boolean = false;

        /* check if at least 1 image exists */
        for (var j: number = 0; j < folder_names.length; j++) {
            if (NEW_IMAGE_EXISTENCE_TABLE[folder_names[j]].includes(linzi_list[i])) {
                flag = true;
            }
        }

        if (flag) {
            ans += `<td>${linzi_list[i]}</td>`
            if (defined_but_no_image_prepared.includes(linzi_list[i])) {
                alert(`業務連絡: 「${linzi_list[i]}」の画像は足したのでdefined_but_no_image_preparedから取り除くこと`);
            }
        } else if (defined_but_no_image_prepared.includes(linzi_list[i])) {
            ans += `<td style="background-color: cyan">%${linzi_list[i]}</td>`;
            count_percent++;
        } else {
            ans += `<td style="background-color: yellow">*${linzi_list[i]}</td>`;
            count_asterisk++;
        }
        
        for (var k = 0; k < imageAuthors.length; k++) {
            ans += `<td style="text-align: center">`;
            const names = folder_names.filter(fname => folder_type[fname] === imageAuthors[k]);
            for (var j = 0; j < names.length; j++) {
                ans += getCell(names[j], linzi_list[i]);
            }
            ans += `</td>`;
        }
		
		ans += "</tr>";
	}
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
			</table>
		</div>` + ans;
	
	return ans;
}

function getCell(folder_name: FolderName, linzi: string ): string
{
    let ans = "";
    if (false || NEW_IMAGE_EXISTENCE_TABLE[folder_name].includes(linzi)) {
        ans += `<img src='${folder_name}/${linzi}.png' width='100' height='100' />`
    }
    return ans;
}