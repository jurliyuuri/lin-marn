import json
import re

template = '''
<h2><a href="https://sites.google.com/site/syxobo/raneme-zu-yu">ラネーメ祖語</a></h2>
<div>
<h3>
<hr>
発音</h3>
</div>
<div><span style="font-size:10pt">%(proto)s</span></div>
<h3>名詞</h3>
<div><br>
</div>
<h2><a href="https://sites.google.com/site/riparaincangku/yuesureone-ren-gong-shi-jie-she-ding/pai-sheng-yu-fang-yan/lkurftlessd-air">アイル語</a></h2>
<div>
<hr>
</div>
</div>
<h3 style="display:block;text-align:left">発音</h3>
<div><span style="font-size:10pt">%(air)s</span></div>
<h3>名詞</h3>
<div><br>
</div>
<h2><a href="https://sites.google.com/site/syxobo/paigu-yu">パイグ語</a></h2>
<div>
<hr>
<h3>発音</h3>
</div>
<div>
<ul><li><span style="font-size:10pt;">標準パイグ語：%(pek)s</span></li>
<li><span style="font-size:10pt;">アイツォ語：%(aikzo)s</span></li>
<li><span style="font-size:10pt;">古音：%(old_pek)s</span></li>
<li><span style="font-size:10pt;">韻図音：%(rhyme_pek)s</span></li></ul>
</div>
<div>
<h3>名詞</h3>
</div>
<div><br>
</div>
<div><br>
</div>
<h2><a href="https://sites.google.com/site/syxobo/takan">タカン語</a></h2>
<div>
<hr>
</div>
</div>
<div style="display:block;text-align:left">
<div style="font-size:10pt">
<h3>発音</h3>
</div>
<div>
<ul><li><font size="2">皇音：%(takan_takan)s</font></li>
<li><font size="2">牌音　古音：%(takan_pek_old)s　新音：%(takan_pek_new)s</font></li></ul>
</div>
<div style="font-size:10pt">
<h3>名詞</h3>
</div>
<div style="font-size:10pt"><br>
</div>
<div>
<div style="font-size:10pt">
<h2><a href="https://sites.google.com/site/riparaincangku/yuesureone-ren-gong-shi-jie-she-ding/pai-sheng-yu-fang-yan/lkurftlessd-air/etz">エッツィア語</a></h2>
<div>
<hr>
</div>
</div>
<div>
<div style="font-size:10pt">
<h3>発音</h3>
</div>
<div>
<ul><li><font size="2">光音：%(etz_etz)s</font></li>
<li><font size="2">皇音：%(etz_takan)s</font></li>
<li><font size="2">牌音　古音：%(etz_pek_old)s　現音：%(etz_pek_new)s</font></li></ul>
</div>
<div style="font-size:10pt">
<h3>名詞</h3>
</div>
<div><br>
</div>
</div>
</div>
<div style="font-size:10pt">
<h2><a href="https://sites.google.com/site/3tvalineparine/plsnk/bhat">バート語</a></h2>
<div>
<hr>
</div>
</div>
</div>
<div>
<h3><font size="3">発音</font></h3>
<div><span style="font-size:10pt">%(bhat)s</span></div>
</div>
<div style="font-size:10pt">
<h3>名詞</h3>
</div>
<div><br>
</div>
</div>
<div style="font-size:10pt">
<h2><a href="https://sites.google.com/site/3tvalineparine/home">リパライン語</a></h2>
<div>
<hr>
</div>
</div>
<h3>発音</h3>
<div style="font-size:10pt">
<ol><li><br>
</li>
</ol>
</div>
<h3>名詞</h3>
<div><br>
</div>
</div>
<br>
</div>
<br>
'''


def look_up(l, title):
    for i in l:
        if(i["title"] == title):
            return ", ".join(i["forms"])
    return None


langlist = [
    ('air', 'アイル語'),
    ('proto', 'ラネーメ祖語'),
    ('pek', '標準パイグ語'),
    ('old_pek', 'パイグ語古音'),
    ('aikzo', 'アイツォ音'),
    ('takan_takan', 'タカン語皇音'),
    ('takan_pek_old', 'タカン語牌音古音'),
    ('takan_pek_new', 'タカン語牌音新音'),
    ('etz_etz', 'エッツィア語光音'),
    ('etz_takan', 'エッツィア語皇音'),
    ('etz_pek_old', 'エッツィア語牌音古音'),
    ('etz_pek_new', 'エッツィア語牌音新音'),
    ('bhat', 'バート語'),
    ('rhyme_pek', '早見表「古パイグ」伝統表記'),
    ]


def main():
    a = open("lin cuop2 dat2.json", "r", encoding="utf-8_sig")
    b = json.load(a)
    for i in b["words"]:
        print(i["entry"]["form"])
    print("Which linzi?")
    l = input()

    for i in b["words"]:
        linzi = i["entry"]["form"]
        if l != linzi:
            continue
        f = lambda x: look_up(i["translations"], x)

        q = open("燐字海/"+linzi+".html", 'w')
        info = {y: "" if f(x) is None else f(x) for (y, x) in langlist}
        info["bhat"] = re.sub(r'úḷ', 'úl', info["bhat"])
        q.write(template % info)


if __name__ == '__main__':
    main()
