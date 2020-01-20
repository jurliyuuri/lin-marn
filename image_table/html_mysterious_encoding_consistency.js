function check_constistency() {
    var encoded_linzi = mysterious_encoding.filter(a => a !== "??").sort();
    var sorted_linzi_list = [...linzi_list].sort();
    if (encoded_linzi.length !== sorted_linzi_list.length) {
        alert("inconsistent: length mismatch");
        document.write("arr1: " + JSON.stringify(encoded_linzi) + "<br>");
        document.write("arr2: " + JSON.stringify(sorted_linzi_list) + "<br>");
        return;
    }
    var zip_match = encoded_linzi.map(function (e, i) {
        return e === sorted_linzi_list[i];
    });
    if (!zip_match.every(q => q)) { // not everything matches
        alert("inconsistent: content mismatch");
        document.write("arr1: " + JSON.stringify(encoded_linzi) + "<br>");
        document.write("arr2: " + JSON.stringify(sorted_linzi_list) + "<br>");
    }
    document.write("consistent.");
}
