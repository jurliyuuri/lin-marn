function toStrokeCount(a: number | string[]): number {
    if (typeof a === "number") {
        return a;
    } else {
        return sum(a.map(id => toStrokeCount(composition2[id].strokeCount)));
    }
}

function containsHowManyOf(container: id, contains: id): number {
    if (container === contains) {
        return 1;
    }
    const foo = composition2[container].strokeCount;
    if (typeof foo === "number") {
        return 0;
    }

    return sum(foo.map(id => containsHowManyOf(id, contains)));
}

function sum(arr: number[]): number {
    return arr.reduce(function (prev, current) {
        return prev + current;
    });
}

function calculateContributionOf(id: id) {
    let ans = 0;
    for (let key in composition2) {
        ans += containsHowManyOf(key, id);
    }

    return ans;
}

function isPopular(id: id) {
    return (
        composition2[id].hanzi !== "??" /* counted to be never popular */
        && calculateContributionOf(id) >= POPULARNESS_THRESHOLD
    );
}

function recursivelyDecompose(a: id[]) {
    let pieces: id[] = a;
    while (true) {
        let hasSomethingToDecompose = false;
        pieces = ([] as id[]).concat(...pieces.map(id => {
            const strCnt = composition2[id].strokeCount;
            if (typeof strCnt === "number") {
                return [id];
            } else {
                hasSomethingToDecompose = true;
                return strCnt;
            }
        }));

        if (!hasSomethingToDecompose) break;
    }
    return pieces;
}

type StrokeCountColor = "rgb(255, 255, 255)" | "rgb(252, 229, 205)" | "rgb(208, 224, 227)";
// white if consisting solely of itself; orange if made up fully of popular ones; bluish color if neither
function getStrokeCountColorFromId(id: id): StrokeCountColor {
    const a: number | id[] = composition2[id].strokeCount
    const orange = "rgb(252, 229, 205)";
    const bluish = "rgb(208, 224, 227)";
    if (typeof a === "number") {
        return "rgb(255, 255, 255)";
    }

    const notContributingMuch: id[] = recursivelyDecompose(a).filter(id => !isPopular(id));

    // if made up fully of popular ones, then orange
    if (notContributingMuch.length === 0) {
        return orange;
    }
    return bluish;

}

function addRowFromId(id: id) {
    return `<tr>
        <td${composition2[id].isDecomposable ? ">TRUE" : " style='background-color: rgb(183, 225, 205)'>FALSE"}</td>
        <td style='background-color: ${
        getStrokeCountColorFromId(id)}'>${toStrokeCount(composition2[id].strokeCount)
        }</td>
        <td>${calculateContributionOf(id)}</td>
        <td>${composition2[id].hanzi}</td>
        <td>${composition2[id].composition.join("</td><td>")}</td>
    </tr>`;
}

const sortByPopularity = (arr: id[]) => arr.sort((idA, idB) => calculateContributionOf(idB) - calculateContributionOf(idA));
const sortById = (arr: id[]) => arr.sort((idA, idB) => parseInt(idA.slice(1)) - parseInt(idB.slice(1)));

function getIdList_Sorted() {
    let topIdList: id[] = [];
    let orangeList: id[] = [];
    let notSoPopularWhite: id[] = [];
    let lonelyWhite: id[] = [];
    let bluish: id[] = [];
    for (let id in composition2) {
        if (isPopular(id)) {
            topIdList.push(id);
        } else if (getStrokeCountColorFromId(id) === "rgb(252, 229, 205)") {
            orangeList.push(id);
        } else if (getStrokeCountColorFromId(id) === "rgb(255, 255, 255)") {
            if (calculateContributionOf(id) > 1) {
                notSoPopularWhite.push(id);
            } else {
                lonelyWhite.push(id);
            }
        } else {

            bluish.push(id);
        }
    }

    sortByPopularity(topIdList);
    sortById(orangeList);
    sortByPopularity(notSoPopularWhite);

    let obj: {
        [key: string]: id[]
    } = {};

    for (let i = 0; i < bluish.length; i++) {
        const strcnt = composition2[bluish[i]].strokeCount;
        if (typeof strcnt === "number") {
            throw new Error("should not happen");
        }

        const unpopularComponents: id[] = recursivelyDecompose(strcnt).filter(a => !(isPopular(a)));

        if (unpopularComponents.length === 0) {
            throw new Error("should not happen");
        }

        for (let j = notSoPopularWhite.length - 1; j >= 0; j--) {
            if (unpopularComponents.includes(notSoPopularWhite[j])) {
                if (obj[notSoPopularWhite[j]] == null) {
                    obj[notSoPopularWhite[j]] = [bluish[i]];
                } else {
                    obj[notSoPopularWhite[j]].push(bluish[i]);
                }
            }
        }

    }

    return { topIdList, orangeList, notSoPopularWhite, lonelyWhite, bluish, bluishObj: obj };
}

const POPULARNESS_THRESHOLD = 5;

function generate_comp_table_html() {
    let { topIdList, orangeList, notSoPopularWhite, lonelyWhite, bluish, bluishObj } = getIdList_Sorted();

    let ans = `<h3>Top${topIdList.length}字素</h3>` + "<table cellpadding=3 cellspacing=0 border=1><tr><td>分解可能？</td><td>画数</td><td>貢献度</td></tr>";
    for (let i = 0; i < topIdList.length; i++) {
        ans += addRowFromId(topIdList[i]);
    }
    ans += "</table>"

    ans += `<br><h3>Top${topIdList.length}字素からなる文字</h3>`;
    ans += "<table cellpadding=3 cellspacing=0 border=1><tr><td>分解可能？</td><td>画数</td><td>貢献度</td></tr>";
    for (let i = 0; i < orangeList.length; i++) {
        ans += addRowFromId(orangeList[i]);
    }
    ans += "</table>"

    for (let i = 0; i < notSoPopularWhite.length; i++) {
        ans += "<br><br>"

        if (composition2[notSoPopularWhite[i]].hanzi === "??") {
            ans += "<h3>↓これって果たして字なんですかね</h3>";
        }
        if (i !== 0
            && calculateContributionOf(notSoPopularWhite[i]) < calculateContributionOf(notSoPopularWhite[i - 1])
        ) {
            ans += `<h3>貢献度${calculateContributionOf(notSoPopularWhite[i])}とその子孫</h3>`;
        }
        ans += "<table cellpadding=3 cellspacing=0 border=1><tr><td>分解可能？</td><td>画数</td><td>貢献度</td></tr>";
        ans += addRowFromId(notSoPopularWhite[i]);
        const descendants = bluishObj[notSoPopularWhite[i]];
        for (let j = 0; j < descendants.length; j++) {
            ans += addRowFromId(descendants[j]);
        }
        ans += "</table>"
    }

    ans += "<br><h3>貢献度1の単一要素文字</h3>"

    ans += "<table cellpadding=3 cellspacing=0 border=1><tr><td>分解可能？</td><td>画数</td><td>貢献度</td></tr>";
    for (let i = 0; i < lonelyWhite.length; i++) {
        ans += addRowFromId(lonelyWhite[i]);
    }
    ans += "</table>";

    {
        ans += "<table cellpadding=3 cellspacing=0 border=1><tr><td>分解可能？</td><td>画数</td><td>貢献度</td></tr>";

        for (let row = 0; row <= 364; row++) {
            const id = "D" + row;
            if (!(id in composition2) || isPopular(id) || getStrokeCountColorFromId(id) === "rgb(252, 229, 205)") {
                ans += "<tr><td>&nbsp;</td></tr>";
                continue;
            }

            ans += addRowFromId(id);
        }

        ans += "</table>"
    }
    return ans;
}