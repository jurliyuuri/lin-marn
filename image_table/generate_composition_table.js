function toStrokeCount(a) {
    if (typeof a === "number") {
        return a;
    }
    else {
        return sum(a.map(id => toStrokeCount(composition2[id].strokeCount)));
    }
}
function containsHowManyOf(container, contains) {
    if (container === contains) {
        return 1;
    }
    const foo = composition2[container].strokeCount;
    if (typeof foo === "number") {
        return 0;
    }
    return sum(foo.map(id => containsHowManyOf(id, contains)));
}
function sum(arr) {
    return arr.reduce(function (prev, current) {
        return prev + current;
    });
}
function calculateContributionOf(id) {
    let ans = 0;
    for (let key in composition2) {
        ans += containsHowManyOf(key, id);
    }
    return ans;
}
// white if consisting solely of itself; orange if made up fully of popular ones; bluish color if neither
function getColorOfStrokeCount(a) {
    const orange = "rgb(252, 229, 205)";
    const bluish = "rgb(208, 224, 227)";
    if (typeof a === "number") {
        return "rgb(255, 255, 255)";
    }
    let pieces = a;
    while (true) {
        const notContributingMuch = pieces.filter(id => composition2[id].hanzi === "??" /* counted to be never popular */ || calculateContributionOf(id) < POPULARNESS_THRESHOLD);
        // if made up fully of popular ones, then orange
        if (notContributingMuch.length === 0) {
            return orange;
        }
        // else, if an unpopular piece can be detected, then bluish
        if (notContributingMuch.filter(id => typeof composition2[id].strokeCount === "number").length !== 0) {
            return bluish;
        }
        // now everything is decomposable. All I need is to check whether the decomposed pieces are popular enough
        pieces = [].concat(...notContributingMuch.map(function (id) {
            const strCnt = composition2[id].strokeCount;
            if (typeof strCnt === "number") {
                throw new Error("should not happen");
            }
            return strCnt;
        }));
    }
}
function addRowFromId(id) {
    return `<tr>
        <td${composition2[id].isDecomposable ? ">TRUE" : " style='background-color: rgb(183, 225, 205)'>FALSE"}</td>
        <td style='background-color: ${getColorOfStrokeCount(composition2[id].strokeCount)}'>${toStrokeCount(composition2[id].strokeCount)}</td>
        <td>${calculateContributionOf(id)}</td>
        <td>${composition2[id].hanzi}</td>
        <td>${composition2[id].composition.join("</td><td>")}</td>
    </tr>`;
}
const POPULARNESS_THRESHOLD = 5;
function generate_comp_table_html() {
    let index = 0;
    let ans = "<table cellpadding=3 cellspacing=0 border=1>";
    for (let row = 0; row <= 364; row++) {
        const id = "D" + row;
        if (!(id in composition2)) {
            ans += "<tr><td>&nbsp;</td></tr>";
            continue;
        }
        ans += addRowFromId(id);
        index++;
    }
    ans += "</table>";
    return ans;
}
