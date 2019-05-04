var Global = {
    precedence: [],
    draw: (prec) => { },
    sy: () => { },
    jv: () => { },
    noborder: () => { },
    border: () => { }
};
Global.precedence = ["SY", "jv", "noborder", "border"];
Global.draw = function (prec) {
    document.getElementById("res").innerHTML =
        (document.getElementById('inputs')).value.split(" ")
            .map(function (txt) {
            var ans = "";
            for (var i = 0; i < txt.length; i++) {
                ans += getImage(txt[i], prec, 100);
            }
            return ans;
        })
            .join("<br><br>");
};
Global.sy = function () {
    Global.precedence = ["SY", "jv", "noborder", "border"];
    Global.draw(Global.precedence);
};
Global.jv = function () {
    Global.precedence = ["jv", "SY", "noborder", "border"];
    Global.draw(Global.precedence);
};
Global.noborder = function () {
    Global.precedence = ["noborder", "border", "SY", "jv"];
    Global.draw(Global.precedence);
};
Global.border = function () {
    Global.precedence = ["border", "noborder", "SY", "jv"];
    Global.draw(Global.precedence);
};
