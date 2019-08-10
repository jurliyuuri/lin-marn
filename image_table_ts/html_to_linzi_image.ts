type ToLinziImageGlobal = {
    precedence: ImageAuthor[];
    draw: (prec: ImageAuthor[]) => void;
    sy: () => void;
    jv: () => void;
    noborder: () => void;
    border: () => void;
}

var Global: ToLinziImageGlobal = {
    precedence: [],
    draw: (prec) => { },
    sy: () => { },
    jv: () => { },
    noborder: () => { },
    border: () => { }
};
Global.precedence = ["SY", "jv", "noborder", "border"];

Global.draw = function (prec) {
    document.getElementById("res")!.innerHTML =
        (<HTMLInputElement>(document.getElementById('inputs')!)).value.split(" ")
            .map(function (txt: string): string {
                var ans: string = "";
                for (var i = 0; i < txt.length; i++) {
                    ans += getImage(txt[i], prec, 100);
                }
                return ans;
            })
            .join("<br><br>");
}

Global.sy = function () {
    Global.precedence = ["SY", "jv", "noborder", "border"];
    Global.draw(Global.precedence);
}

Global.jv = function () {
    Global.precedence = ["jv", "SY", "noborder", "border"];
    Global.draw(Global.precedence);
}

Global.noborder = function () {
    Global.precedence = ["noborder", "border", "SY", "jv"];
    Global.draw(Global.precedence);
}

Global.border = function () {
    Global.precedence = ["border", "noborder", "SY", "jv"];
    Global.draw(Global.precedence);
}