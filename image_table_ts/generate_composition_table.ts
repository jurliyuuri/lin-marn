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
    return getColorOfStrokeCount(composition2[id].strokeCount);
}

type StrokeCountColor = "rgb(255, 255, 255)" | "rgb(252, 229, 205)" | "rgb(208, 224, 227)";
// white if consisting solely of itself; orange if made up fully of popular ones; bluish color if neither
function getColorOfStrokeCount(a: number | id[]): StrokeCountColor {
    const orange = "rgb(252, 229, 205)";
    const bluish = "rgb(208, 224, 227)";
    if (typeof a === "number") {
        return "rgb(255, 255, 255)";
    }

    let pieces = a;
    while (true) {
        const notContributingMuch: id[] = pieces.filter(id => !isPopular(id));

        // if made up fully of popular ones, then orange
        if (notContributingMuch.length === 0) {
            return orange;
        }

        // else, if an unpopular piece can be detected, then bluish
        if (notContributingMuch.filter(id => typeof composition2[id].strokeCount === "number").length !== 0) {
            return bluish;
        }

        // now everything is decomposable. All I need is to check whether the decomposed pieces are popular enough
        pieces = ([] as id[]).concat(...
            notContributingMuch.map(function (id) {
                const strCnt = composition2[id].strokeCount;
                if (typeof strCnt === "number") {
                    throw new Error("should not happen");
                }
                return strCnt;
            })
        );

    }

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

function getTopIdList_Sorted() {
    let idList: id[] = [];
    for (let id in composition2) {
        if (!isPopular(id)) {
            continue;
        }
        idList.push(id);
    }

    idList.sort((idA, idB) => calculateContributionOf(idB) - calculateContributionOf(idA));
    return idList;
}

const POPULARNESS_THRESHOLD = 5;

function generate_comp_table_html() {
    let topIdList = getTopIdList_Sorted();

    let ans = `Top${topIdList.length}字素` + "<table cellpadding=3 cellspacing=0 border=1><tr><td>分解可能？</td><td>画数</td><td>貢献度</td></tr>";
    for (let i = 0; i < topIdList.length; i++) {
        ans += addRowFromId(topIdList[i]);
    }
    ans += "</table>"

    ans += `<br>Top${topIdList.length}字素からなる文字`;
    {
        ans += "<table cellpadding=3 cellspacing=0 border=1><tr><td>分解可能？</td><td>画数</td><td>貢献度</td></tr>";

        for (let row = 0; row <= 364; row++) {
            const id = "D" + row;
            if (!(id in composition2) || isPopular(id) || getStrokeCountColorFromId(id) !== "rgb(252, 229, 205)") {
                continue;
            }

            ans += addRowFromId(id);
        }

        ans += "</table>"
    }
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