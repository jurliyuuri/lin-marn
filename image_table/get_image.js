function isLinzi(character) {
    const linzi_list2 = [...linzi_list];
    return linzi_list2.includes(character);
}
/* char_and_folder_info.js and image_existence_table.js required */
function getImage_(character, type_prec, size, path) {
    path = path || ".";
    var prec = [];
    for (var i = 0; i < type_prec.length; i++) {
        prec = prec.concat(folder_names.filter(a => folder_type[a] === type_prec[i]));
    }
    if (!isLinzi(character)) {
        return { errorDueTo: `（「${character}」未定義）` };
    }
    for (var j = 0; j < prec.length; j++) {
        if (NEW_IMAGE_EXISTENCE_TABLE[prec[j]].includes(character)) {
            return `<img src='${path}/${prec[j]}/${character}.png' width='${size}' height='${size}' />`;
        }
    }
    if (defined_but_no_image_prepared.includes(character)) {
        return { errorDueTo: `（「${character}」画像なし）` };
    }
    else {
        return { errorDueTo: `（「${character}」未造字）` };
    }
}
function getImage(character, type_prec, size, path) {
    let ans = getImage_(character, type_prec, size, path);
    if (typeof ans === "string") {
        return ans;
    }
    else {
        return ans.errorDueTo;
    }
}
