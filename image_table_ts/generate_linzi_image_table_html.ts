function generate_table_html_true(): string {
	var ans: string = "";
	ans += "<table>";

	ans += "<tr>";
	ans += "<td>字</td>"
	for (var j: number = 0; j < folder_names.length; j++) {
		ans += "<td>" + folder_names[j] + "</td>";
	}
	ans += "</tr>";

	for (var i: number = 0; i < linzi_list.length; i++) {
		ans += "<tr>";
		ans += `<td>${linzi_list[i]}</td>`

		for (var j = 0; j < folder_names.length; j++) {
			ans += `<td>`;
			ans += `<img src='${folder_names[j]}/${linzi_list[i]}.png' width='100' height='100' />`
			ans += `</td>`;
		}
		ans += "</tr>";
	}
	ans += "</table>";

	return ans;
}

function generate_table_html(preloading: boolean): string {
	var ans: string = "";
	ans += "<table>";

	ans += "<tr>";
	ans += "<td>字</td>"
	for (var j: number = 0; j < folder_names.length; j++) {
		ans += "<td>" + folder_names[j] + "</td>";
	}
	ans += "</tr>";

	let count_asterisk = 0;
	let count_percent = 0;

	for (var i: number = 0; i < linzi_list.length; i++) {
		ans += "<tr>";
		if (preloading) { /* linzi_image_table_local */
			ans += `<td>${linzi_list[i]}</td>`
		} else { /* linzi_image_table */
			const { res, hasPercent, hasAsterisk } = firstCell(linzi_list[i]);
			ans += res;
			if (hasPercent) {
				count_percent++;
			}
			if (hasAsterisk) {
				count_asterisk++;
			}
		}
		for (var j = 0; j < folder_names.length; j++) {
			ans += `<td>`;
			if (preloading || NEW_IMAGE_EXISTENCE_TABLE[folder_names[j]].includes(linzi_list[i])) {
				ans += `<img src='${folder_names[j]}/${linzi_list[i]}.png' width='100' height='100' />`
			}
			ans += `</td>`;
		}
		ans += "</tr>";
	}
	ans += "</table>";

	if (!preloading) {
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
	}
	return ans;
}

function firstCell(linzi: string):
	({ res: string, hasPercent?: true, hasAsterisk?: true }) {
	let imageExists: boolean = false;

	/* check if at least 1 image exists */
	for (var j: number = 0; j < folder_names.length; j++) {
		if (NEW_IMAGE_EXISTENCE_TABLE[folder_names[j]].includes(linzi)) {
			imageExists = true;
		}
	}

	let ans: string = "";
	if (imageExists) {
		ans += `<td>${linzi}</td>`
		if (defined_but_no_image_prepared.includes(linzi)) {
			alert(`業務連絡: 「${linzi}」の画像は足したのでdefined_but_no_image_preparedから取り除くこと`);
		}
		return { res: ans };
	} else if (defined_but_no_image_prepared.includes(linzi)) {
		ans += `<td style="background-color: cyan">%${linzi}</td>`;
		return { res: ans, hasPercent: true };
	} else {
		ans += `<td style="background-color: yellow">*${linzi}</td>`;
		return { res: ans, hasAsterisk: true };
	}
}



function generate_table_narrow_html(): string {
	var ans: string = "";
	const iterateOverAuthor = (f: (a: FolderName[]) => string) => {
		let a = "";
		for (var k = 0; k < imageAuthors.length; k++) {
			a += "<td style='text-align: center'>"
				+ f(folder_names.filter(fname => folder_type[fname] === imageAuthors[k]));
			+ "</td>";
		}
		return a;
	}


	ans += "<table>";

	ans += "<tr>";
	ans += "<td>字</td>"
	ans += iterateOverAuthor((a: FolderName[]) => a.join("<br>"));
	ans += "</tr>";

	let count_asterisk = 0;
	let count_percent = 0;

	linzi_list.map((linzi) => {
		const { res, hasAsterisk, hasPercent } = firstCell(linzi);
		if (hasAsterisk) {
			count_asterisk++;
		}
		if (hasPercent) {
			count_percent++;
		}

		ans += "<tr>";
		ans += res;
		ans += iterateOverAuthor((a: FolderName[]) => a.map(name => getCell(name, linzi)).join(""))

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
			</table>
		</div>` + ans;

	return ans;
}

function getCell(folder_name: FolderName, linzi: string): string {
	let ans = "";
	if (false || NEW_IMAGE_EXISTENCE_TABLE[folder_name].includes(linzi)) {
		ans += `<img src='${folder_name}/${linzi}.png' width='100' height='100' />`
	}
	return ans;
}
