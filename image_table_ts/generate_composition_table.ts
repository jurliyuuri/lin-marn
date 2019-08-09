function lookupFromId(id: string) {
    const arr = composition.filter(({ id: ID }) => ID === id);
    if (arr.length === 0) {
        alert(`error: undefined ID ${id} was found`);
        throw new Error(`error: undefined ID ${id} was found`);
    } else if (arr.length > 1) {
        alert(`error: duplicate ID ${id} was found`);
        throw new Error(`error: duplicate ID ${id} was found`);
    } else {
        return arr[0];
    }
}

function toStrokeCount(a: number | string[]): number {
    if (typeof a === "number") {
        return a;
    } else {
        return a.map(id => toStrokeCount(lookupFromId(id).strokeCount)
        ).reduce(function (prev, current) {
            return prev + current;
        });
    }
}

type id = string;

function containsHowManyOf(container: id, contains: id): number {
    if (container === contains) {
        return 1;
    }
    const foo = lookupFromId(container).strokeCount;
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

function generate_comp_table_html() {
    let index = 0;
    let ans = "<table cellpadding=3 cellspacing=0 border=1>"
    for (let row = 0; row <= 364; row++) {
        if (composition[index].id !== "D" + row) {
            ans += "<tr><td>&nbsp;</td></tr>";
            continue;
        }

        const contribution = sum(composition.map(function (elem) {
            return containsHowManyOf(elem.id, "D" + row);
        }));

        ans += `<tr>
            <td${composition[index].isDecomposable ? ">TRUE" : " style='background-color: rgb(183, 225, 205)'>FALSE"}</td>
            <td>${toStrokeCount(composition[index].strokeCount)}</td>
            <td>${contribution}</td>
            <td>${composition[index].hanzi}</td>
            <td>${composition[index].composition.join("</td><td>")}</td>
        </tr>`;
        index++;
    }
    return ans;
}