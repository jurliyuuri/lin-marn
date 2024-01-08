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
    for (let key_ in composition2) {
        const key = key_;
        ans += containsHowManyOf(key, id);
    }
    return ans;
}
function isPopular(id, POPULARNESS_THRESHOLD) {
    return (!non_linzi_id_list.includes(composition2[id].hanzi) /* counted to be never popular */
        && calculateContributionOf(id) >= POPULARNESS_THRESHOLD);
}
function recursivelyDecompose(a) {
    let pieces = a;
    while (true) {
        let hasSomethingToDecompose = false;
        pieces = [].concat(...pieces.map(id => {
            const strCnt = composition2[id].strokeCount;
            if (typeof strCnt === "number") {
                return [id];
            }
            else {
                hasSomethingToDecompose = true;
                return strCnt;
            }
        }));
        if (!hasSomethingToDecompose)
            break;
    }
    return pieces;
}
// white if consisting solely of itself; orange if made up fully of popular ones; bluish color if neither
function getStrokeCountColorFromId(id, POPULARNESS_THRESHOLD) {
    const a = composition2[id].strokeCount;
    const orange = "rgb(252, 229, 205)";
    const bluish = "rgb(208, 224, 227)";
    if (typeof a === "number") {
        return "rgb(255, 255, 255)";
    }
    const notContributingMuch = recursivelyDecompose(a).filter(id => !isPopular(id, POPULARNESS_THRESHOLD));
    // if made up fully of popular ones, then orange
    if (notContributingMuch.length === 0) {
        return orange;
    }
    return bluish;
}
function addRowFromId(id, POPULARNESS_THRESHOLD) {
    const image = getImage_(composition2[id].hanzi, ["SY", "jv", "jv touch panel", "meloviliju", "noborder"], 20);
    return `<tr>
        <td${composition2[id].isDecomposable ? ">TRUE" : " style='background-color: rgb(183, 225, 205)'>FALSE"}</td>
        <td style='background-color: ${getStrokeCountColorFromId(id, POPULARNESS_THRESHOLD)}'>${toStrokeCount(composition2[id].strokeCount)}</td>
        <td>${calculateContributionOf(id)}</td>
        <td>${composition2[id].hanzi}${typeof image === "string" ? image : ""}</td>
        <td>${composition2[id].composition.join("</td><td>")}</td>
    </tr>`;
}
const sortByPopularity = (arr) => arr.sort((idA, idB) => {
    const diff = calculateContributionOf(idB) - calculateContributionOf(idA);
    if (diff !== 0)
        return diff;
    // push non-linzi to the back
    if (!non_linzi_id_list.includes(composition2[idA].hanzi) && non_linzi_id_list.includes(composition2[idB].hanzi)) {
        return -1;
    }
    else if (non_linzi_id_list.includes(composition2[idA].hanzi) && !non_linzi_id_list.includes(composition2[idB].hanzi)) {
        return 1;
    }
    else {
        return 0;
    }
});
const sortById = (arr) => arr.sort((idA, idB) => composition2[idA].index - composition2[idB].index);
function getIdList_Sorted(withDuplicate, POPULARNESS_THRESHOLD) {
    let topIdList = [];
    let orangeList = [];
    let notSoPopularWhite = [];
    let lonelyWhite = [];
    let bluish = [];
    for (let id_ in composition2) {
        const id = id_;
        if (isPopular(id, POPULARNESS_THRESHOLD)) {
            topIdList.push(id);
        }
        else if (getStrokeCountColorFromId(id, POPULARNESS_THRESHOLD) === "rgb(252, 229, 205)") {
            orangeList.push(id);
        }
        else if (getStrokeCountColorFromId(id, POPULARNESS_THRESHOLD) === "rgb(255, 255, 255)") {
            if (calculateContributionOf(id) > 1) {
                notSoPopularWhite.push(id);
            }
            else {
                lonelyWhite.push(id);
            }
        }
        else {
            bluish.push(id);
        }
    }
    sortByPopularity(topIdList);
    sortById(orangeList);
    sortByPopularity(notSoPopularWhite);
    let obj = {};
    for (let j = notSoPopularWhite.length - 1; j >= 0; j--) {
        obj[notSoPopularWhite[j]] = [];
    }
    for (let i = 0; i < bluish.length; i++) {
        const strcnt = composition2[bluish[i]].strokeCount;
        if (typeof strcnt === "number") {
            throw new Error("should not happen");
        }
        const unpopularComponents = recursivelyDecompose(strcnt).filter(a => !(isPopular(a, POPULARNESS_THRESHOLD)));
        if (unpopularComponents.length === 0) {
            throw new Error("should not happen");
        }
        for (let j = notSoPopularWhite.length - 1; j >= 0; j--) {
            if (unpopularComponents.includes(notSoPopularWhite[j])) {
                obj[notSoPopularWhite[j]].push(bluish[i]);
                if (!withDuplicate) {
                    break;
                }
            }
        }
    }
    return { topIdList, orangeList, notSoPopularWhite, lonelyWhite, bluish, bluishObj: obj };
}
function generate_comp_table_html(q) {
    const { withDuplicate, POPULARNESS_THRESHOLD } = q;
    let { topIdList, orangeList, notSoPopularWhite, lonelyWhite, bluish, bluishObj } = getIdList_Sorted(withDuplicate, POPULARNESS_THRESHOLD);
    let ans = `<h3>Top${topIdList.length}字素</h3>` + "<table cellpadding=3 cellspacing=0 border=1><tr><td>分解可能？</td><td>画数</td><td>貢献度</td></tr>";
    for (let i = 0; i < topIdList.length; i++) {
        ans += addRowFromId(topIdList[i], POPULARNESS_THRESHOLD);
    }
    ans += "</table>";
    ans += `<br><h3>Top${topIdList.length}字素からなる文字（${orangeList.length}個）</h3>`;
    ans += "<table cellpadding=3 cellspacing=0 border=1><tr><td>分解可能？</td><td>画数</td><td>貢献度</td></tr>";
    for (let i = 0; i < orangeList.length; i++) {
        ans += addRowFromId(orangeList[i], POPULARNESS_THRESHOLD);
    }
    ans += "</table>";
    for (let i = 0; i < notSoPopularWhite.length; i++) {
        ans += "<br><br>";
        if (non_linzi_id_list.includes(composition2[notSoPopularWhite[i]].hanzi)) {
            ans += "<h3>↓これって果たして字なんですかね</h3>";
        }
        if (i !== 0
            && calculateContributionOf(notSoPopularWhite[i]) < calculateContributionOf(notSoPopularWhite[i - 1])) {
            ans += `<h3>貢献度${calculateContributionOf(notSoPopularWhite[i])}とその子孫</h3>`;
        }
        ans += "<table cellpadding=3 cellspacing=0 border=1><tr><td>分解可能？</td><td>画数</td><td>貢献度</td></tr>";
        ans += addRowFromId(notSoPopularWhite[i], POPULARNESS_THRESHOLD);
        const descendants = bluishObj[notSoPopularWhite[i]];
        for (let j = 0; j < descendants.length; j++) {
            ans += addRowFromId(descendants[j], POPULARNESS_THRESHOLD);
        }
        ans += "</table>";
    }
    ans += "<br><h3>貢献度1の単一要素文字</h3>";
    ans += "<table cellpadding=3 cellspacing=0 border=1><tr><td>分解可能？</td><td>画数</td><td>貢献度</td></tr>";
    for (let i = 0; i < lonelyWhite.length; i++) {
        ans += addRowFromId(lonelyWhite[i], POPULARNESS_THRESHOLD);
    }
    ans += "</table>";
    return ans;
}
