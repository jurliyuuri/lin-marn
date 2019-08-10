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

function getStrokeCountColorFromId(id: id): StrokeCountColor {
    return getColorOfStrokeCount2(composition2[id].strokeCount);
}

type StrokeCountColor = "rgb(255, 255, 255)" | "rgb(252, 229, 205)" | "rgb(208, 224, 227)";
// white if consisting solely of itself; orange if made up fully of popular ones; bluish color if neither
function getColorOfStrokeCount2(a: number | id[]): StrokeCountColor {
    const orange = "rgb(252, 229, 205)";
    const bluish = "rgb(208, 224, 227)";
    if (typeof a === "number") {
        return "rgb(255, 255, 255)";
    }

    let pieces = a;
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


    const notContributingMuch: id[] = pieces.filter(id => !isPopular(id));

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

    return { topIdList, orangeList, notSoPopularWhite, lonelyWhite, bluish };
}

const POPULARNESS_THRESHOLD = 5;

function generate_comp_table_html() {
    let { topIdList, orangeList, notSoPopularWhite, lonelyWhite, bluish } = getIdList_Sorted();

    let ans = `Top${topIdList.length}字素` + "<table cellpadding=3 cellspacing=0 border=1><tr><td>分解可能？</td><td>画数</td><td>貢献度</td></tr>";
    for (let i = 0; i < topIdList.length; i++) {
        ans += addRowFromId(topIdList[i]);
    }
    ans += "</table>"

    ans += `<br>Top${topIdList.length}字素からなる文字`;
    ans += "<table cellpadding=3 cellspacing=0 border=1><tr><td>分解可能？</td><td>画数</td><td>貢献度</td></tr>";
    for (let i = 0; i < orangeList.length; i++) {
        ans += addRowFromId(orangeList[i]);
    }
    ans += "</table>"

    for (let i = 0; i < notSoPopularWhite.length; i++) {
        ans += "<br><br>"
        ans += "<table cellpadding=3 cellspacing=0 border=1><tr><td>分解可能？</td><td>画数</td><td>貢献度</td></tr>";
        ans += addRowFromId(notSoPopularWhite[i]);
        ans += "</table>"
    }

    ans += "<br>貢献度1の単一要素文字"

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