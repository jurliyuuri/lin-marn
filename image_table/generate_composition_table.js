function lookupFromId(id) {
    const arr = composition.filter(({ id: ID }) => ID === id);
    if (arr.length === 0) {
        alert(`error: undefined ID ${id} was found`);
        throw new Error(`error: undefined ID ${id} was found`);
    }
    else if (arr.length > 1) {
        alert(`error: duplicate ID ${id} was found`);
        throw new Error(`error: duplicate ID ${id} was found`);
    }
    else {
        return arr[0];
    }
}
function toStrokeCount(a) {
    if (typeof a === "number") {
        return a;
    }
    else {
        return a.map(id => toStrokeCount(lookupFromId(id).strokeCount)).reduce(function (prev, current) {
            return prev + current;
        });
    }
}
function containsHowManyOf(container, contains) {
    if (container === contains) {
        return 1;
    }
    const foo = lookupFromId(container).strokeCount;
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
    return sum(composition.map(function (elem) {
        return containsHowManyOf(elem.id, id);
    }));
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
        const notContributingMuch = pieces.filter(id => lookupFromId(id).hanzi === "??" /* counted to be never popular */ || calculateContributionOf(id) < POPULARNESS_THRESHOLD);
        // if made up fully of popular ones, then orange
        if (notContributingMuch.length === 0) {
            return orange;
        }
        // else, if an unpopular piece can be detected, then bluish
        if (notContributingMuch.filter(id => typeof lookupFromId(id).strokeCount === "number").length !== 0) {
            return bluish;
        }
        // now everything is decomposable. All I need is to check whether the decomposed pieces are popular enough
        pieces = [].concat(...notContributingMuch.map(function (id) {
            const strCnt = lookupFromId(id).strokeCount;
            if (typeof strCnt === "number") {
                throw new Error("should not happen");
            }
            return strCnt;
        }));
    }
}
const POPULARNESS_THRESHOLD = 5;
function generate_comp_table_html() {
    let index = 0;
    let ans = "<table cellpadding=3 cellspacing=0 border=1>";
    for (let row = 0; row <= 364; row++) {
        if (composition[index].id !== "D" + row) {
            ans += "<tr><td>&nbsp;</td></tr>";
            continue;
        }
        ans += `<tr>
            <td${composition[index].isDecomposable ? ">TRUE" : " style='background-color: rgb(183, 225, 205)'>FALSE"}</td>
            <td style='background-color: ${getColorOfStrokeCount(composition[index].strokeCount)}'>${toStrokeCount(composition[index].strokeCount)}</td>
            <td>${calculateContributionOf(composition[index].id)}</td>
            <td>${composition[index].hanzi}</td>
            <td>${composition[index].composition.join("</td><td>")}</td>
        </tr>`;
        index++;
    }
    return ans;
}
