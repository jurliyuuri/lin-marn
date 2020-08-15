function isLinzi(character) {
    const linzi_list2 = [...linzi_list];
    return linzi_list2.includes(character);
}
/* char_and_folder_info.js and image_existence_table.js required */
function getImage_(character, type_prec, size, display_path_as_title, path) {
    path = path || ".";
    var prec = [];
    for (var i = 0; i < type_prec.length; i++) {
        prec = prec.concat(folder_names.filter(a => folder_type[a] === type_prec[i]));
    }
    if (!isLinzi(character)) {
        if (character === '　') {
            return `<img src='${path}/img_punctuation/blank.png' width='${size}' height='${size}' ` +
                (display_path_as_title ? `title='img_punctuation/blank.png'` : ``) +
                ` />`;
        }
        else if (character === '！' || character === '!') {
            return `<img src='${path}/img_punctuation/exclamation.png' width='${size}' height='${size}' ` +
                (display_path_as_title ? `title='img_punctuation/exclamation.png'` : ``) +
                ` />`;
        }
        else if (character === '.' || character === '。' || character === ',' || character === '、') {
            return `<img src='${path}/img_punctuation/period.png' width='${size}' height='${size}' ` +
                (display_path_as_title ? `title='img_punctuation/period.png'` : ``) +
                ` />`;
        }
        else if (character === '?' || character === '？') {
            return `<img src='${path}/img_punctuation/question.png' width='${size}' height='${size}' ` +
                (display_path_as_title ? `title='img_punctuation/question.png'` : ``) +
                ` />`;
        }
        else if (character === '「' || character === '」' || character === '"' || character === '”' || character === '“') {
            return `<img src='${path}/img_punctuation/quotation.png' width='${size}' height='${size}' ` +
                (display_path_as_title ? `title='img_punctuation/quotation.png'` : ``) +
                ` />`;
        }
        else if (character === '〃' || character === '々' || character === 'ゝ' || character === 'ヽ') {
            return `<img src='${path}/img_punctuation/repetition.png' width='${size}' height='${size}' ` +
                (display_path_as_title ? `title='img_punctuation/repetition.png'` : ``) +
                ` />`;
        }
        return { errorDueTo: `（「${character}」未定義）` };
    }
    for (var j = 0; j < prec.length; j++) {
        if (NEW_IMAGE_EXISTENCE_TABLE[prec[j]].includes(character)) {
            return `<img src='${path}/${prec[j]}/${character}.png' width='${size}' height='${size}' ` +
                (display_path_as_title ? `title='${prec[j]}/${character}.png'` : ``) +
                ` />`;
        }
    }
    if (defined_but_no_image_prepared.includes(character)) {
        return { errorDueTo: `（「${character}」画像なし）` };
    }
    else {
        return { errorDueTo: `（「${character}」未造字）` };
    }
}
function getImage(character, type_prec, size, display_path_as_title, path) {
    let ans = getImage_(character, type_prec, size, display_path_as_title, path);
    if (typeof ans === "string") {
        return ans;
    }
    else {
        return ans.errorDueTo;
    }
}
