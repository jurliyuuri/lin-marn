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
    return foo.map(id => containsHowManyOf(id, contains)).reduce(function (prev, current) {
        return prev + current;
    });
}
function generate_comp_table_html() {
    let index = 0;
    let ans = "<table cellpadding=3 cellspacing=0 border=1>";
    for (let row = 0; row <= 364; row++) {
        if (composition[index].id !== "D" + row) {
            ans += "<tr><td>&nbsp;</td></tr>";
            continue;
        }
        const contribution = composition.map(function (elem) {
            return containsHowManyOf(elem.id, "D" + row);
        }).reduce(function (prev, current) {
            return prev + current;
        });
        if (contribution.toString() !== composition[index].contribution) {
            console.log(`contribution mismatch in ${composition[index].hanzi}: 
            ${contribution.toString()} and ${composition[index].contribution}`);
        }
        ans += `<tr>
            <td${composition[index].isDecomposable ? ">TRUE" : " style='background-color: rgb(183, 225, 205)'>FALSE"}</td>
            <td>${toStrokeCount(composition[index].strokeCount)}</td>
            <td>${composition[index].contribution}</td>
            <td>${composition[index].hanzi}</td>
            <td>${composition[index].composition.join("</td><td>")}</td>
        </tr>`;
        index++;
    }
    return ans;
}
