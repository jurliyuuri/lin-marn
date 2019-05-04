function generate_table_html(preloading : boolean) : string {
	var ans: string = "";
	if (!preloading) {
		ans += `
		<div style="border: 1px solid blue; padding: 5px; margin: 5px">
			凡例:
			<table>
				<tr>
					<td style='background-color: yellow'>*漢字</td>
					<td>燐字の字形が定まっていない</td>
				</tr>
				<tr>
					<td style='background-color: cyan'>%漢字</td>
					<td>燐字の字形が定まっているが画像が用意できていない</td>
				</tr>
			</table>
		</div>`;
	}
	ans += "<table>";
	
	ans += "<tr>";
	ans += "<td>字</td>"
	for(var j: number = 0; j < folder_names.length; j++){
		ans += "<td>"+folder_names[j]+"</td>";
	}
	ans += "</tr>";

	for(var i: number = 0; i < linzi_list.length; i++){
		ans += "<tr>";
		if (preloading){ /* linzi_image_table_local */
			ans += `<td>${linzi_list[i]}</td>`
		} else { /* linzi_image_table */
			let flag: boolean = false;

			/* check if at least 1 image exists */
			for(var j: number = 0; j < folder_names.length; j++){
				if(IMAGE_EXISTENCE_TABLE[linzi_list[i]][folder_names[j]] == true){
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
			} else {
				ans += `<td style="background-color: yellow">*${linzi_list[i]}</td>`;
			}
		}
		for(var j=0; j<folder_names.length;j++){
			ans += `<td>`;
			if(preloading || IMAGE_EXISTENCE_TABLE[linzi_list[i]][folder_names[j]] == true){
				ans += `<img src='${folder_names[j]}/${linzi_list[i]}.png' width='100' height='100' />`
			}
			ans += `</td>`;
		}
		ans += "</tr>";
	}
	ans += "</table>";
	return ans;
}