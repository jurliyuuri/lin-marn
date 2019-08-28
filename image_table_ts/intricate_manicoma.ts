function isComplexObj(o: {
    isDecomposable: boolean,
    strokeCount: number | id[],
    hanzi: string,
    composition: string[]
}): o is ({
    isDecomposable: boolean,
    strokeCount: id[],
    hanzi: string,
    composition: string[]
}) {
    return Array.isArray(o.strokeCount);
}

const befds: {
    isDecomposable: boolean,
    strokeCount: number | id[],
    hanzi: string,
    composition: string[]
}[] = Object.keys(composition2).map(key => composition2[key]);
const complex_ones: {
    isDecomposable: boolean,
    strokeCount: id[],
    hanzi: string,
    composition: string[]
}[] = befds.filter(isComplexObj);
const non_complex_ones = befds.filter(o => !Array.isArray(o.strokeCount));
if (Math.random() < (complex_ones.length + 1) / (befds.length + 1)) {
    alert("complex");
} else {
    alert("not complex");
}