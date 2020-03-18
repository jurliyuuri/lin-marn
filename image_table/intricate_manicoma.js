function isComplexObj(o) {
    return Array.isArray(o.strokeCount);
}
const befds = Object.keys(composition2).map(key => composition2[key]);
const complex_ones = befds.filter(isComplexObj);
const non_complex_ones = befds.filter(o => !Array.isArray(o.strokeCount));
if (Math.random() < (complex_ones.length + 1) / (befds.length + 2)) {
    alert("complex");
}
else {
    alert("not complex");
}
