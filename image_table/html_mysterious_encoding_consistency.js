function check_constistency(){
	var arr1 = mysterious_encoding.filter(a => a !== "??").sort();
	var arr2 = linzi_list.sort();

	if (arr1.length !== arr2.length) {
		alert("inconsistent: length mismatch");
		document.write("arr1: " + JSON.stringify(arr1) + "<br>");
		document.write("arr2: " + JSON.stringify(arr2) + "<br>");
		return;
	}

	var c = arr1.map(function(e, i) {
	  return {a: e, b: arr2[i]};
	}).filter(q => q.a !== q.b);

	if (c.length !== 0) {
		alert("inconsistent: content mismatch");
		document.write("arr1: " + JSON.stringify(arr1) + "<br>");
		document.write("arr2: " + JSON.stringify(arr2) + "<br>");
	}

	document.write("consistent.");
}
