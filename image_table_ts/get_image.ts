/* char_and_folder_info.js and image_existence_table.js required */

function getImage(character: string, type_prec: ImageAuthor[], size: number, path? : string): string{
		path = path || ".";
		var prec: Array<FolderName> = [];
		
		for (var i = 0; i < type_prec.length; i++) {
			prec = prec.concat(folder_names.filter(a => folder_type[a] === type_prec[i]));
		}

		if(!IMAGE_EXISTENCE_TABLE[character]){
			return `（「${character}」未定義）`
		}
		for(var j: number = 0; j < prec.length; j++){
			if(IMAGE_EXISTENCE_TABLE[character][prec[j]]){
				return `<img src='${path}/${prec[j]}/${character}.png' width='${size}' height='${size}' />`
			}
		}

		if (defined_but_no_image_prepared.includes(character)) {
			return `（「${character}」画像なし）`
		} else {
			return `（「${character}」未造字）`
		}
		
	}
