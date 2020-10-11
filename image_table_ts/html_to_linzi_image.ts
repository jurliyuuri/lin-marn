type ToLinziImageGlobal = {
    precedence: ImageAuthor[];
    draw: (prec: ImageAuthor[]) => void;
    sy: () => void;
    jv: () => void;
    noborder: () => void;
    border: () => void;
    sy_pua2man1: () => void;
    meloviliju: () => void
}

var Global: ToLinziImageGlobal = {
    precedence: [],
    draw: (prec) => { },
    sy: () => { },
    jv: () => { },
    noborder: () => { },
    border: () => { },
    sy_pua2man1: () => { },
    meloviliju: () => { }
};
Global.precedence = ["SY", "jv", "meloviliju", "jv touch panel", "SY pua2 man1", "noborder", "border"];

Global.draw = function (prec) {
    document.getElementById("res")!.innerHTML =
        (<HTMLInputElement>(document.getElementById('inputs')!)).value.split(" ")
            .map(function (txt: string): string {
                var ans: string = "";
                for (var i = 0; i < txt.length; i++) {
                    ans += getImage(txt[i], prec, 100, true);
                }
                return ans;
            })
            .join("<br><br>");
}

Global.sy = function () {
    Global.precedence = ["SY", "jv", "meloviliju", "jv touch panel", "SY pua2 man1", "noborder", "border"];
    Global.draw(Global.precedence);
}

Global.jv = function () {
    Global.precedence = ["jv", "jv touch panel", "SY", "SY pua2 man1", "meloviliju", "noborder", "border"];
    Global.draw(Global.precedence);
}

Global.noborder = function () {
    Global.precedence = ["noborder", "border", "SY", "SY pua2 man1", "jv", "jv touch panel", "meloviliju"];
    Global.draw(Global.precedence);
}

Global.border = function () {
    Global.precedence = ["border", "noborder", "SY", "SY pua2 man1", "jv", "meloviliju"];
    Global.draw(Global.precedence);
}

Global.sy_pua2man1 = function () {
    Global.precedence = ["SY pua2 man1", "SY", "jv", "meloviliju", "noborder", "border"];
    Global.draw(Global.precedence);
}

Global.meloviliju = function () {
    Global.precedence = ["meloviliju", "SY", "jv", "SY pua2 man1", "noborder", "border"];
    Global.draw(Global.precedence);
}
