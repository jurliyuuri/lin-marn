type id = string;
interface Composition {
    [key: string]: {
        isDecomposable: boolean,
        strokeCount: number | id[],
        hanzi: string,
        composition: string[]
    };
}

const composition2: Composition = {
    D3: { "isDecomposable": false, "strokeCount": 1, "hanzi": "五", "composition": ["＊一"] },
    D4: { "isDecomposable": false, "strokeCount": 3, "hanzi": "人", "composition": ["＊大"] },
    D5: { "isDecomposable": false, "strokeCount": 2, "hanzi": "之", "composition": ["＊人"] },
    D6: { "isDecomposable": false, "strokeCount": 2, "hanzi": "上", "composition": ["⿱一五", "＊丄"] },
    D7: { "isDecomposable": false, "strokeCount": 3, "hanzi": "手", "composition": ["＊屮"] },
    D8: { "isDecomposable": false, "strokeCount": 1, "hanzi": "一", "composition": ["＊丨", "＊〡"] },
    D9: { "isDecomposable": false, "strokeCount": 3.6, "hanzi": "足", "composition": ["＊廿"] },
    D10: { "isDecomposable": false, "strokeCount": 2, "hanzi": "閉", "composition": ["＊𠆢"] },
    D11: { "isDecomposable": false, "strokeCount": 1, "hanzi": "無", "composition": ["＊丶"] },
    D12: { "isDecomposable": true, "strokeCount": ["D3", "D3"], "hanzi": "処", "composition": ["⿱五五", "＊二", "＊ニ"] },
    D13: { "isDecomposable": false, "strokeCount": 1, "hanzi": "少", "composition": ["＊丿"] },
    D14: { "isDecomposable": false, "strokeCount": 5, "hanzi": "心", "composition": ["⿻再人"] },
    D15: { "isDecomposable": true, "strokeCount": ["D5", "D5"], "hanzi": "水", "composition": ["⿰之之", "＊ㅆ", "＊从"] },
    D16: { "isDecomposable": false, "strokeCount": 3, "hanzi": "口", "composition": ["＊口", "＊ロ"] },
    D17: { "isDecomposable": false, "strokeCount": 4, "hanzi": "糸", "composition": ["⿳五再五", "＊ㅍ"] },
    D18: { "isDecomposable": false, "strokeCount": 2, "hanzi": "物", "composition": ["＊マ"] },
    D19: { "isDecomposable": false, "strokeCount": 3, "hanzi": "声", "composition": ["＊万"] },
    D20: { "isDecomposable": false, "strokeCount": 5, "hanzi": "日", "composition": ["⿴口六", "＊田"] },
    D21: { "isDecomposable": false, "strokeCount": 4, "hanzi": "言", "composition": ["⿴口五", "＊日", "＊曰"] },
    D22: { "isDecomposable": false, "strokeCount": 2, "hanzi": "四", "composition": ["＊メ", "＊〤"] },
    D23: { "isDecomposable": false, "strokeCount": 3, "hanzi": "筆", "composition": ["＊巾"] },
    D24: { "isDecomposable": true, "strokeCount": ["D4", "D4"], "hanzi": "等", "composition": ["⿰人人"] },
    D25: { "isDecomposable": true, "strokeCount": ["D13", "D4"], "hanzi": "兵", "composition": ["⿰少人"] },
    D26: { "isDecomposable": false, "strokeCount": 3, "hanzi": "火", "composition": ["⿶四無", "＊义"] },
    D27: { "isDecomposable": false, "strokeCount": 3, "hanzi": "大", "composition": ["⿱六五", "＊土", "＊士"] },
    D28: { "isDecomposable": false, "strokeCount": 3, "hanzi": "耒", "composition": ["⿻門五"] },
    D29: { "isDecomposable": false, "strokeCount": 3, "hanzi": "光", "composition": ["⿻再＊亅"] },
    D30: { "isDecomposable": false, "strokeCount": 2, "hanzi": "己", "composition": ["＊ム", "＊厶"] },
    D31: { "isDecomposable": false, "strokeCount": 2, "hanzi": "下", "composition": ["⿱五一", "＊丅"] },
    D32: { "isDecomposable": false, "strokeCount": 5, "hanzi": "輪", "composition": ["＊毌"] },
    D33: { "isDecomposable": false, "strokeCount": 2, "hanzi": "衣", "composition": ["＊卩"] },
    D34: { "isDecomposable": false, "strokeCount": 2, "hanzi": "天", "composition": ["＊𠘨"] },
    D35: { "isDecomposable": false, "strokeCount": 2, "hanzi": "包", "composition": ["＊凵"] },
    D36: { "isDecomposable": false, "strokeCount": 3, "hanzi": "力", "composition": ["⿱五⿰少十"] },
    D37: { "isDecomposable": false, "strokeCount": 2, "hanzi": "連", "composition": ["⿹＊フ神"] },
    D38: { "isDecomposable": false, "strokeCount": 4, "hanzi": "筒", "composition": ["＊ㅒ"] },
    D39: { "isDecomposable": false, "strokeCount": 4, "hanzi": "直", "composition": ["＊丰"] },
    D40: { "isDecomposable": true, "strokeCount": ["D10", "D29"], "hanzi": "闇", "composition": ["⿱閉光"] },
    D46: { "isDecomposable": true, "strokeCount": ["D4", "D30"], "hanzi": "我", "composition": ["⿰人己", "⿺人己"] },
    D47: { "isDecomposable": true, "strokeCount": ["D4", "D18"], "hanzi": "汝", "composition": ["⿰人物", "⿺人物"] },
    D48: { "isDecomposable": true, "strokeCount": ["D30", "D16"], "hanzi": "此", "composition": ["⿱己口"] },
    D49: { "isDecomposable": true, "strokeCount": ["D18", "D16"], "hanzi": "其", "composition": ["⿱物口"] },
    D50: { "isDecomposable": true, "strokeCount": ["D14", "D11"], "hanzi": "何", "composition": ["⿵心無"] },
    D51: { "isDecomposable": true, "strokeCount": ["D16", "D18"], "hanzi": "全", "composition": ["⿴口物"] },
    D52: { "isDecomposable": true, "strokeCount": ["D18", "D30"], "hanzi": "互", "composition": ["⿱物己"] },
    D53: { "isDecomposable": true, "strokeCount": ["D20", "D9"], "hanzi": "時", "composition": ["⿱日足"] },
    D54: { "isDecomposable": true, "strokeCount": ["D21", "D6"], "hanzi": "故", "composition": ["⿱言上"] },
    D55: { "isDecomposable": true, "strokeCount": ["D7", "D7"], "hanzi": "術", "composition": ["⿰手手", "＊艸"] },
    D56: { "isDecomposable": true, "strokeCount": ["D23", "D12"], "hanzi": "書", "composition": ["⿱筆処"] },
    D57: { "isDecomposable": true, "strokeCount": ["D23", "D15"], "hanzi": "墨", "composition": ["⿰筆水"] },
    D58: { "isDecomposable": true, "strokeCount": ["D21", "D21"], "hanzi": "論", "composition": ["⿱言言"] },
    D59: { "isDecomposable": true, "strokeCount": ["D23", "D33"], "hanzi": "紙", "composition": ["⿰筆衣"] },
    D60: { "isDecomposable": true, "strokeCount": ["D22", "D4"], "hanzi": "頭", "composition": ["⿱四人"] },
    D61: { "isDecomposable": true, "strokeCount": ["D4", "D16"], "hanzi": "果", "composition": ["⿱人口"] },
    D62: { "isDecomposable": true, "strokeCount": ["D10", "D3"], "hanzi": "満", "composition": ["⿱閉五"] },
    D63: { "isDecomposable": true, "strokeCount": ["D6", "D33"], "hanzi": "清", "composition": ["⿱上衣"] },
    D64: { "isDecomposable": true, "strokeCount": ["D30", "D24"], "hanzi": "牌", "composition": ["⿱己等"] },
    D65: { "isDecomposable": true, "strokeCount": ["D18", "D24"], "hanzi": "豊", "composition": ["⿱物等"] },
    D66: { "isDecomposable": true, "strokeCount": ["D10", "D6"], "hanzi": "家", "composition": ["⿱閉上", "＊소"] },
    D67: { "isDecomposable": true, "strokeCount": ["D6", "D14"], "hanzi": "善", "composition": ["⿱上心"] },
    D68: { "isDecomposable": true, "strokeCount": ["D21", "D67"], "hanzi": "認", "composition": ["⿰言善"] },
    D69: { "isDecomposable": true, "strokeCount": ["D9", "D40"], "hanzi": "寝", "composition": ["⿰足闇"] },
    D70: { "isDecomposable": true, "strokeCount": ["D10", "D30"], "hanzi": "覆", "composition": ["⿱閉己"] },
    D71: { "isDecomposable": true, "strokeCount": ["D17", "D19"], "hanzi": "琴", "composition": ["⿰糸声"] },
    D72: { "isDecomposable": true, "strokeCount": ["D6", "D53"], "hanzi": "古", "composition": ["⿱上時"] },
    D73: { "isDecomposable": true, "strokeCount": ["D3", "D7"], "hanzi": "撃", "composition": ["⿱五手"] },
    D74: { "isDecomposable": true, "strokeCount": ["D9", "D9"], "hanzi": "行", "composition": ["⿱足足"] },
    D75: { "isDecomposable": true, "strokeCount": ["D16", "D4"], "hanzi": "囲", "composition": ["⿴口人", "＊因"] },
    D76: { "isDecomposable": true, "strokeCount": ["D21", "D24"], "hanzi": "党", "composition": ["⿱言等"] },
    D77: { "isDecomposable": true, "strokeCount": ["D9", "D67"], "hanzi": "笑", "composition": ["⿰足善"] },
    D78: { "isDecomposable": true, "strokeCount": ["D25", "D25"], "hanzi": "戦", "composition": ["⿰兵兵"] },
    D79: { "isDecomposable": true, "strokeCount": ["D19", "D11"], "hanzi": "静", "composition": ["⿻声無", "⿱五⿰四＊𠃌"] },
    D80: { "isDecomposable": true, "strokeCount": ["D3", "D12"], "hanzi": "層", "composition": ["⿱五処"] },
    D81: { "isDecomposable": true, "strokeCount": ["D14", "D19"], "hanzi": "噫", "composition": ["⿰心声"] },
    D82: { "isDecomposable": true, "strokeCount": ["D23", "D17"], "hanzi": "律", "composition": ["⿰筆糸"] },
    D83: { "isDecomposable": true, "strokeCount": ["D24", "D3"], "hanzi": "集", "composition": ["⿱等五"] },
    D84: { "isDecomposable": true, "strokeCount": ["D20", "D29"], "hanzi": "輝", "composition": ["⿱日光"] },
    D85: { "isDecomposable": true, "strokeCount": ["D20", "D3"], "hanzi": "始", "composition": ["⿱日五"] },
    D86: { "isDecomposable": true, "strokeCount": ["D3", "D20"], "hanzi": "終", "composition": ["⿱五日"] },
    D87: { "isDecomposable": true, "strokeCount": ["D9", "D3"], "hanzi": "出", "composition": ["⿱足五"] },
    D88: { "isDecomposable": true, "strokeCount": ["D8", "D8"], "hanzi": "二", "composition": ["⿰一一", "＊〢"] },
    D89: { "isDecomposable": true, "strokeCount": ["D8", "D8", "D8"], "hanzi": "三", "composition": ["⿲一一一", "＊川", "＊〣"] },
    D90: { "isDecomposable": true, "strokeCount": ["D13", "D73"], "hanzi": "為", "composition": ["⿰少撃"] },
    D91: { "isDecomposable": true, "strokeCount": ["D9", "D15"], "hanzi": "川", "composition": ["⿱足水"] },
    D92: { "isDecomposable": true, "strokeCount": ["D15", "D3"], "hanzi": "山", "composition": ["⿱水五"] },
    D93: { "isDecomposable": true, "strokeCount": ["D15", "D12"], "hanzi": "海", "composition": ["⿱水処"] },
    D94: { "isDecomposable": true, "strokeCount": ["D10", "D12"], "hanzi": "陸", "composition": ["⿱閉処"] },
    D95: { "isDecomposable": true, "strokeCount": ["D10", "D3", "D15"], "hanzi": "島", "composition": ["⿳閉五水"] },
    D96: { "isDecomposable": true, "strokeCount": ["D21", "D55"], "hanzi": "名", "composition": ["⿱言術"] },
    D97: { "isDecomposable": true, "strokeCount": ["D16", "D11"], "hanzi": "内", "composition": ["⿴口無"] },
    D98: { "isDecomposable": true, "strokeCount": ["D4", "D7"], "hanzi": "将", "composition": ["⿱人手"] },
    D99: { "isDecomposable": true, "strokeCount": ["D14", "D16"], "hanzi": "疲", "composition": ["⿵心口"] },
    D100: { "isDecomposable": true, "strokeCount": ["D6", "D24"], "hanzi": "官", "composition": ["⿱上等"] },
    D101: { "isDecomposable": true, "strokeCount": ["D21", "D18"], "hanzi": "意", "composition": ["⿱言物"] },
    D102: { "isDecomposable": true, "strokeCount": ["D24", "D17"], "hanzi": "友", "composition": ["⿲人糸人", "⿴等糸"] },
    D103: { "isDecomposable": true, "strokeCount": ["D22", "D22"], "hanzi": "値", "composition": ["⿱四四"] },
    D104: { "isDecomposable": true, "strokeCount": ["D23", "D16"], "hanzi": "受", "composition": ["⿱筆口"] },
    D105: { "isDecomposable": true, "strokeCount": ["D27", "D11"], "hanzi": "於", "composition": ["⿰大無"] },
    D106: { "isDecomposable": true, "strokeCount": ["D16", "D7"], "hanzi": "与", "composition": ["⿱口手"] },
    D107: { "isDecomposable": true, "strokeCount": ["D4", "D22"], "hanzi": "背", "composition": ["⿰人四", "⿺人四"] },
    D108: { "isDecomposable": true, "strokeCount": ["D88", "D40", "D10", "D58"], "hanzi": "哩", "composition": ["⿲二闇⿱閉論"] },
    D109: { "isDecomposable": true, "strokeCount": ["D17", "D33"], "hanzi": "布", "composition": ["⿰糸衣"] },
    D110: { "isDecomposable": true, "strokeCount": ["D31", "D20", "D28"], "hanzi": "新", "composition": ["⿳下日耒"] },
    D111: { "isDecomposable": true, "strokeCount": ["D6", "D31"], "hanzi": "縦", "composition": ["⿱上下"] },
    D112: { "isDecomposable": true, "strokeCount": ["D12", "D31"], "hanzi": "低", "composition": ["⿱層一", "⿱処下"] },
    D113: { "isDecomposable": true, "strokeCount": ["D14", "D31"], "hanzi": "悪", "composition": ["⿱心下"] },
    D114: { "isDecomposable": true, "strokeCount": ["D9", "D113"], "hanzi": "壊", "composition": ["⿰足悪"] },
    D115: { "isDecomposable": true, "strokeCount": ["D6", "D4"], "hanzi": "王", "composition": ["⿱上人", "⿳無五人"] },
    D116: { "isDecomposable": true, "strokeCount": ["D16", "D115"], "hanzi": "国", "composition": ["⿴口王"] },
    D117: { "isDecomposable": true, "strokeCount": ["D3", "D8"], "hanzi": "六", "composition": ["⿻五一", "＊十"] },
    D118: { "isDecomposable": true, "strokeCount": ["D3", "D88"], "hanzi": "七", "composition": ["⿻五二", "＊廾"] },
    D119: { "isDecomposable": true, "strokeCount": ["D3", "D89"], "hanzi": "八", "composition": ["⿻五三", "＊卅"] },
    D120: { "isDecomposable": true, "strokeCount": ["D6", "D12"], "hanzi": "高", "composition": ["⿱上処", "⿱無層"] },
    D121: { "isDecomposable": true, "strokeCount": ["D17", "D17"], "hanzi": "綿", "composition": ["⿰糸糸"] },
    D122: { "isDecomposable": true, "strokeCount": ["D26", "D15"], "hanzi": "油", "composition": ["⿰火水"] },
    D123: { "isDecomposable": true, "strokeCount": ["D34", "D11", "D11"], "hanzi": "星", "composition": ["⿵天⿱無無"] },
    D124: { "isDecomposable": true, "strokeCount": ["D123", "D32"], "hanzi": "季", "composition": ["⿺星輪"] },
    D125: { "isDecomposable": true, "strokeCount": ["D3", "D28"], "hanzi": "入", "composition": ["⿱五耒"] },
    D126: { "isDecomposable": true, "strokeCount": ["D14", "D125"], "hanzi": "識", "composition": ["⿰心入"] },
    D127: { "isDecomposable": true, "strokeCount": ["D23", "D125"], "hanzi": "学", "composition": ["⿰筆入"] },
    D128: { "isDecomposable": true, "strokeCount": ["D28", "D28"], "hanzi": "来", "composition": ["⿱耒耒"] },
    D129: { "isDecomposable": true, "strokeCount": ["D17", "D17"], "hanzi": "棉", "composition": ["⿱糸糸"] },
    D130: { "isDecomposable": true, "strokeCount": ["D26", "D20"], "hanzi": "夏", "composition": ["⿱火日"] },
    D131: { "isDecomposable": true, "strokeCount": ["D7", "D8"], "hanzi": "定", "composition": ["⿰手一"] },
    D132: { "isDecomposable": true, "strokeCount": ["D13", "D22"], "hanzi": "傷", "composition": ["⿱少四"] },
    D133: { "isDecomposable": true, "strokeCount": ["D3", "D27"], "hanzi": "棚", "composition": ["⿱五大", "＊王"] },
    D134: { "isDecomposable": true, "strokeCount": ["D14", "D15"], "hanzi": "血", "composition": ["⿰心水"] },
    D135: { "isDecomposable": true, "strokeCount": ["D9", "D12"], "hanzi": "道", "composition": ["⿰足処"] },
    D136: { "isDecomposable": true, "strokeCount": ["D3", "D15"], "hanzi": "吁", "composition": ["⿱五水"] },
    D137: { "isDecomposable": true, "strokeCount": ["D3", "D4"], "hanzi": "救", "composition": ["⿱五人", "＊天"] },
    D138: { "isDecomposable": true, "strokeCount": ["D98", "D7"], "hanzi": "従", "composition": ["⿰将人"] },
    D139: { "isDecomposable": true, "strokeCount": ["D115", "D7"], "hanzi": "从", "composition": ["⿰王人"] },
    D140: { "isDecomposable": true, "strokeCount": ["D14", "D26"], "hanzi": "奮", "composition": ["⿱心火"] },
    D141: { "isDecomposable": true, "strokeCount": ["D140", "D15"], "hanzi": "酒", "composition": ["⿰奮水"] },
    D142: { "isDecomposable": true, "strokeCount": ["D35", "D26"], "hanzi": "煙", "composition": ["⿶包火"] },
    D143: { "isDecomposable": true, "strokeCount": ["D3", "D35"], "hanzi": "味", "composition": ["⿱五包"] },
    D144: { "isDecomposable": true, "strokeCount": ["D143", "D6"], "hanzi": "甘", "composition": ["⿱上味"] },
    D145: { "isDecomposable": true, "strokeCount": ["D35", "D103"], "hanzi": "混", "composition": ["⿶包値"] },
    D146: { "isDecomposable": true, "strokeCount": ["D27", "D36"], "hanzi": "御", "composition": ["⿰大力"] },
    D147: { "isDecomposable": true, "strokeCount": ["D4", "D36"], "hanzi": "労", "composition": ["⿰人力"] },
    D148: { "isDecomposable": true, "strokeCount": ["D36", "D7"], "hanzi": "能", "composition": ["⿺力手"] },
    D149: { "isDecomposable": true, "strokeCount": ["D107", "D12"], "hanzi": "後", "composition": ["⿱背処"] },
    D150: { "isDecomposable": true, "strokeCount": ["D85", "D18"], "hanzi": "素", "composition": ["⿱始物"] },
    D151: { "isDecomposable": true, "strokeCount": ["D107", "D9"], "hanzi": "后", "composition": ["⿱背足"] },
    D152: { "isDecomposable": true, "strokeCount": ["D23", "D37"], "hanzi": "文", "composition": ["⿰筆連"] },
    D153: { "isDecomposable": true, "strokeCount": ["D33", "D37"], "hanzi": "聯", "composition": ["⿰衣連"] },
    D154: { "isDecomposable": true, "strokeCount": ["D37", "D32"], "hanzi": "鎖", "composition": ["⿹連輪"] },
    D155: { "isDecomposable": true, "strokeCount": ["D37", "D4"], "hanzi": "祖", "composition": ["⿻連人"] },
    D156: { "isDecomposable": true, "strokeCount": ["D4", "D4"], "hanzi": "多", "composition": ["⿱人人"] },
    D157: { "isDecomposable": true, "strokeCount": ["D18", "D18"], "hanzi": "極", "composition": ["⿱物物"] },
    D158: { "isDecomposable": true, "strokeCount": ["D9", "D156"], "hanzi": "増", "composition": ["⿰足多"] },
    D159: { "isDecomposable": true, "strokeCount": ["D19", "D38"], "hanzi": "笛", "composition": ["⿰声筒"] },
    D160: { "isDecomposable": true, "strokeCount": ["D38", "D19"], "hanzi": "笙", "composition": ["⿰筒声"] },
    D161: { "isDecomposable": true, "strokeCount": ["D39", "D176"], "hanzi": "正", "composition": ["⿰直如"] },
    D162: { "isDecomposable": true, "strokeCount": ["D27", "D39"], "hanzi": "長", "composition": ["⿰大直"] },
    D163: { "isDecomposable": true, "strokeCount": ["D39", "D90"], "hanzi": "謝", "composition": ["⿰直為"] },
    D164: { "isDecomposable": true, "strokeCount": ["D19", "D19"], "hanzi": "歌", "composition": ["⿰声声"] },
    D165: { "isDecomposable": true, "strokeCount": ["D40", "D74"], "hanzi": "寐", "composition": ["⿰闇行"] },
    D166: { "isDecomposable": true, "strokeCount": ["D20", "D3", "D20"], "hanzi": "恒", "composition": ["⿳日五日"] },
    D167: { "isDecomposable": true, "strokeCount": ["D4", "D3"], "hanzi": "立", "composition": ["⿱人五"] },
    D168: { "isDecomposable": true, "strokeCount": ["D23", "D61"], "hanzi": "享", "composition": ["⿱筆果"] },
    D169: { "isDecomposable": true, "strokeCount": ["D25", "D25"], "hanzi": "隊", "composition": ["⿱兵兵"] },
    D170: { "isDecomposable": true, "strokeCount": ["D25", "D169"], "hanzi": "軍", "composition": ["⿰兵⿱兵兵"] },
    D171: { "isDecomposable": true, "strokeCount": ["D3", "D9"], "hanzi": "止", "composition": ["⿱五足"] },
    D172: { "isDecomposable": true, "strokeCount": ["D10", "D20"], "hanzi": "冬", "composition": ["⿱閉日"] },
    D175: { "isDecomposable": false, "strokeCount": 3, "hanzi": "石", "composition": ["⿱五己"] },
    D176: { "isDecomposable": false, "strokeCount": 3, "hanzi": "如", "composition": ["⿸無＊力"] },
    D177: { "isDecomposable": true, "strokeCount": ["D175", "D7"], "hanzi": "使", "composition": ["⿱石手"] },
    D178: { "isDecomposable": true, "strokeCount": ["D21", "D175"], "hanzi": "真", "composition": ["⿳言石"] },
    D179: { "isDecomposable": true, "strokeCount": ["D175", "D176"], "hanzi": "硬", "composition": ["⿰石如"] },
    D180: { "isDecomposable": true, "strokeCount": ["D129", "D176"], "hanzi": "軟", "composition": ["⿰棉如"] },
    D181: { "isDecomposable": true, "strokeCount": ["D17", "D176"], "hanzi": "柔", "composition": ["⿰糸如"] },
    D183: { "isDecomposable": false, "strokeCount": 5, "hanzi": "花", "composition": ["⿱四＊小"] },
    D184: { "isDecomposable": true, "strokeCount": ["D183", "D15"], "hanzi": "蜜", "composition": ["⿰花水"] },
    D185: { "isDecomposable": true, "strokeCount": ["D183", "D20"], "hanzi": "春", "composition": ["⿰花日"] },
    D186: { "isDecomposable": true, "strokeCount": ["D34", "D183"], "hanzi": "雪", "composition": ["⿵天花"] },
    D188: { "isDecomposable": false, "strokeCount": 3, "hanzi": "机", "composition": ["⿱五＊儿", "＊兀"] },
    D189: { "isDecomposable": true, "strokeCount": ["D4", "D188"], "hanzi": "席", "composition": ["⿱人机"] },
    D190: { "isDecomposable": true, "strokeCount": ["D19", "D188"], "hanzi": "箏", "composition": ["⿰声机"] },
    D191: { "isDecomposable": true, "strokeCount": ["D11", "D188"], "hanzi": "座", "composition": ["⿱無机"] },
    D193: { "isDecomposable": false, "strokeCount": 2, "hanzi": "再", "composition": ["＊ソ"] },
    D194: { "isDecomposable": true, "strokeCount": ["D193", "D12"], "hanzi": "在", "composition": ["⿱再処"] },
    D195: { "isDecomposable": true, "strokeCount": ["D16", "D193", "D3"], "hanzi": "累", "composition": ["⿳口再五"] },
    D196: { "isDecomposable": true, "strokeCount": ["D193", "D18"], "hanzi": "件", "composition": ["⿱再物"] },
    D198: { "isDecomposable": false, "strokeCount": 2, "hanzi": "開", "composition": ["＊八", "＊ハ"] },
    D199: { "isDecomposable": true, "strokeCount": ["D198", "D73"], "hanzi": "勿", "composition": ["⿱開撃"] },
    D200: { "isDecomposable": true, "strokeCount": ["D9", "D198"], "hanzi": "船", "composition": ["⿱足開"] },
    D201: { "isDecomposable": true, "strokeCount": ["D6", "D198"], "hanzi": "散", "composition": ["⿱上開"] },
    D203: { "isDecomposable": false, "strokeCount": 2, "hanzi": "風", "composition": ["＊刀"] },
    D204: { "isDecomposable": true, "strokeCount": ["D203", "D3"], "hanzi": "月", "composition": ["⿱風五"] },
    D205: { "isDecomposable": true, "strokeCount": ["D203", "D12"], "hanzi": "弓", "composition": ["⿻風処"] },
    D206: { "isDecomposable": true, "strokeCount": ["D205", "D36"], "hanzi": "抗", "composition": ["⿰弓力"] },
    D208: { "isDecomposable": false, "strokeCount": 3.6, "hanzi": "樽", "composition": ["＊ㅂ"] },
    D209: { "isDecomposable": true, "strokeCount": ["D19", "D208"], "hanzi": "鼓", "composition": ["⿸声樽"] },
    D210: { "isDecomposable": true, "strokeCount": ["D19", "D208"], "hanzi": "皷", "composition": ["⿰樽声"] },
    D211: { "isDecomposable": true, "strokeCount": ["D3", "D208"], "hanzi": "深", "composition": ["⿱樽五", "＊브"] },
    D213: { "isDecomposable": false, "strokeCount": 3, "hanzi": "圧", "composition": ["⿱＊冖五"] },
    D214: { "isDecomposable": true, "strokeCount": ["D23", "D213"], "hanzi": "絵", "composition": ["⿱筆圧"] },
    D216: { "isDecomposable": false, "strokeCount": 7, "hanzi": "同", "composition": ["⿻⿱口口一", "＊串"] },
    D217: { "isDecomposable": true, "strokeCount": ["D216", "D4"], "hanzi": "輩", "composition": ["⿱同人"] },
    D218: { "isDecomposable": true, "strokeCount": ["D216", "D24"], "hanzi": "類", "composition": ["⿰同等"] },
    D219: { "isDecomposable": true, "strokeCount": ["D216", "D156"], "hanzi": "属", "composition": ["⿰同多"] },
    D221: { "isDecomposable": false, "strokeCount": 3, "hanzi": "軸", "composition": ["⿻処一", "＊キ"] },
    D222: { "isDecomposable": true, "strokeCount": ["D123", "D221"], "hanzi": "北", "composition": ["⿺星軸"] },
    D223: { "isDecomposable": true, "strokeCount": ["D222", "D23"], "hanzi": "翰", "composition": ["⿰軸筆"] },
    D226: { "isDecomposable": false, "strokeCount": 2, "hanzi": "??", "composition": ["＊冖"] },
    D227: { "isDecomposable": true, "strokeCount": ["D226", "D32"], "hanzi": "車", "composition": ["⿱＊冖輪"] },
    D228: { "isDecomposable": true, "strokeCount": ["D226", "D27", "D221"], "hanzi": "冠", "composition": ["⿱＊冖⿰大軸"] },
    D229: { "isDecomposable": true, "strokeCount": ["D226", "D213"], "hanzi": "積", "composition": ["⿱＊冖圧"] },
    D230: { "isDecomposable": true, "strokeCount": ["D4", "D229"], "hanzi": "族", "composition": ["⿰人積"] },
    D232: { "isDecomposable": false, "strokeCount": 2, "hanzi": "??", "composition": ["⿹神少"] },
    D233: { "isDecomposable": true, "strokeCount": ["D232", "D3"], "hanzi": "亦", "composition": ["⿱％右風", "⿺⿹神少五"] },
    D234: { "isDecomposable": true, "strokeCount": ["D233", "D11"], "hanzi": "乎", "composition": ["⿻亦無"] },
    D235: { "isDecomposable": true, "strokeCount": ["D232", "D3"], "hanzi": "地", "composition": ["⿱⿹神少五"] },
    D238: { "isDecomposable": false, "strokeCount": 4, "hanzi": "平", "composition": ["⿴口一"] },
    D239: { "isDecomposable": true, "strokeCount": ["D238", "D4"], "hanzi": "守", "composition": ["⿰平人"] },
    D240: { "isDecomposable": true, "strokeCount": ["D238", "D6"], "hanzi": "美", "composition": ["⿱平上"] },
    D242: { "isDecomposable": false, "strokeCount": 4, "hanzi": "獣", "composition": ["＊勿"] },
    D243: { "isDecomposable": true, "strokeCount": ["D12", "D242"], "hanzi": "馬", "composition": ["⿻処獣"] },
    D244: { "isDecomposable": true, "strokeCount": ["D10", "D242"], "hanzi": "貓", "composition": ["⿱閉獣"] },
    D246: { "isDecomposable": false, "strokeCount": 4, "hanzi": "男", "composition": ["⿻人少"] },
    D247: { "isDecomposable": true, "strokeCount": ["D6", "D246"], "hanzi": "父", "composition": ["⿱上男"] },
    D248: { "isDecomposable": true, "strokeCount": ["D19", "D247"], "hanzi": "㕮", "composition": ["⿰声父"] },
    D250: { "isDecomposable": false, "strokeCount": 4, "hanzi": "周", "composition": ["⿻処二", "＊井"] },
    D251: { "isDecomposable": true, "strokeCount": ["D9", "D250"], "hanzi": "近", "composition": ["⿰足周"] },
    D252: { "isDecomposable": true, "strokeCount": ["D250", "D27"], "hanzi": "広", "composition": ["⿱周大"] },
    D254: { "isDecomposable": false, "strokeCount": 4, "hanzi": "草", "composition": ["⿱＊ツ五"] },
    D255: { "isDecomposable": true, "strokeCount": ["D3", "D254"], "hanzi": "種", "composition": ["⿱五草"] },
    D256: { "isDecomposable": true, "strokeCount": ["D254", "D15"], "hanzi": "茶", "composition": ["⿱草水"] },
    D258: { "isDecomposable": false, "strokeCount": 3, "hanzi": "小", "composition": ["⿱五六", "＊干"] },
    D259: { "isDecomposable": true, "strokeCount": ["D258", "D90"], "hanzi": "挽", "composition": ["⿰小為"] },
    D260: { "isDecomposable": true, "strokeCount": ["D258", "D39"], "hanzi": "短", "composition": ["⿰小直"] },
    D262: { "isDecomposable": false, "strokeCount": 4, "hanzi": "銭", "composition": ["⿱％六⿹衣無"] },
    D263: { "isDecomposable": true, "strokeCount": ["D262", "D12"], "hanzi": "店", "composition": ["⿱銭処"] },
    D264: { "isDecomposable": false, "strokeCount": 4.6, "hanzi": "貧", "composition": ["⿸％少銭"] },
    D266: { "isDecomposable": false, "strokeCount": 2, "hanzi": "左", "composition": ["⿻＊亅少"] },
    D267: { "isDecomposable": true, "strokeCount": ["D266", "D10"], "hanzi": "倒", "composition": ["⿰左閉"] },
    D269: { "isDecomposable": false, "strokeCount": 2, "hanzi": "而", "composition": ["⿻＊亅＊㇀"] },
    D270: { "isDecomposable": true, "strokeCount": ["D269", "D269"], "hanzi": "即", "composition": ["⿰而而"] },
    D272: { "isDecomposable": false, "strokeCount": 6, "hanzi": "木", "composition": ["⿻再＊木", "＊米"] },
    D273: { "isDecomposable": true, "strokeCount": ["D272", "D38"], "hanzi": "竹", "composition": ["⿰木筒"] },
    D274: { "isDecomposable": true, "strokeCount": ["D38", "D272"], "hanzi": "竺", "composition": ["⿰筒木"] },
    D276: { "isDecomposable": false, "strokeCount": 3, "hanzi": "色", "composition": ["⿰少九"] },
    D277: { "isDecomposable": true, "strokeCount": ["D276", "D40"], "hanzi": "黒", "composition": ["⿰色闇"] },
    D278: { "isDecomposable": true, "strokeCount": ["D276", "D15"], "hanzi": "青", "composition": ["⿰色水"] },
    D281: { "isDecomposable": false, "strokeCount": 3, "hanzi": "岩", "composition": ["⿱少己"] },
    D282: { "isDecomposable": true, "strokeCount": ["D11", "D281"], "hanzi": "欽", "composition": ["⿸無岩"] },
    D284: { "isDecomposable": false, "strokeCount": 5, "hanzi": "西", "composition": ["⿱％一日", "⿻＊冖大", "⿻六口", "＊由"] },
    D285: { "isDecomposable": true, "strokeCount": ["D3", "D284"], "hanzi": "菓", "composition": ["⿱五西"] },
    D287: { "isDecomposable": false, "strokeCount": 4.3, "hanzi": "膠", "composition": ["⿱⿻＊了再五"] },
    D288: { "isDecomposable": true, "strokeCount": ["D26", "D287"], "hanzi": "脂", "composition": ["⿰火膠"] },
    D290: { "isDecomposable": false, "strokeCount": 5, "hanzi": "骨", "composition": ["⿻天軸"] },
    D291: { "isDecomposable": true, "strokeCount": ["D10", "D290"], "hanzi": "肉", "composition": ["⿱閉骨"] },
    D293: { "isDecomposable": false, "strokeCount": 3, "hanzi": "彼", "composition": ["＊己"] },
    D294: { "isDecomposable": true, "strokeCount": ["D118", "D293"], "hanzi": "龍", "composition": ["⿱七彼"] },
    D296: { "isDecomposable": false, "strokeCount": 3.6, "hanzi": "錘", "composition": ["⿹力＊㇀"] },
    D297: { "isDecomposable": true, "strokeCount": ["D27", "D296"], "hanzi": "禦", "composition": ["⿰大錘"] },
    D299: { "isDecomposable": false, "strokeCount": 5, "hanzi": "目", "composition": ["⿴口二", "＊罒"] },
    D300: { "isDecomposable": true, "strokeCount": ["D299", "D6"], "hanzi": "麗", "composition": ["⿱目上"] },
    D302: { "isDecomposable": false, "strokeCount": 2, "hanzi": "箱", "composition": ["＊匸"] },
    D303: { "isDecomposable": true, "strokeCount": ["D302", "D32"], "hanzi": "機", "composition": ["⿷箱輪"] },
    D305: { "isDecomposable": false, "strokeCount": 2, "hanzi": "門", "composition": ["＊冂"] },
    D306: { "isDecomposable": true, "strokeCount": ["D305", "D32"], "hanzi": "械", "composition": ["⿻門輪"] },
    D308: { "isDecomposable": false, "strokeCount": 1, "hanzi": "十", "composition": ["＊乙"] },
    D309: { "isDecomposable": true, "strokeCount": ["D308", "D11"], "hanzi": "唯", "composition": ["⿻十無"] },
    D311: { "isDecomposable": false, "strokeCount": 2, "hanzi": "鳥", "composition": ["＊𠤎"] },
    D312: { "isDecomposable": true, "strokeCount": ["D10", "D311"], "hanzi": "倉", "composition": ["⿱閉鳥"] },
    D314: { "isDecomposable": false, "strokeCount": 2, "hanzi": "右", "composition": ["⿰一無", "＊ト", "＊卜"] },
    D315: { "isDecomposable": true, "strokeCount": ["D266", "D314"], "hanzi": "横", "composition": ["⿰左右"] },
    D317: { "isDecomposable": false, "strokeCount": 4, "hanzi": "虎", "composition": ["⿱％五獣"] },
    D318: { "isDecomposable": true, "strokeCount": ["D10", "D317"], "hanzi": "猫", "composition": ["⿱閉虎"] },
    D320: { "isDecomposable": false, "strokeCount": 4, "hanzi": "女", "composition": ["⿻少腹"] },
    D321: { "isDecomposable": true, "strokeCount": ["D6", "D320"], "hanzi": "母", "composition": ["⿱上女"] },
    D323: { "isDecomposable": false, "strokeCount": 3, "hanzi": "腹", "composition": ["⿻五四", "＊丈"] },
    D324: { "isDecomposable": true, "strokeCount": ["D323", "D12"], "hanzi": "前", "composition": ["⿱腹処"] },
    D326: { "isDecomposable": false, "strokeCount": 5, "hanzi": "巫", "composition": ["⿻口之"] },
    D327: { "isDecomposable": true, "strokeCount": ["D326", "D26"], "hanzi": "祭", "composition": ["⿰巫火"] },
    D329: { "isDecomposable": false, "strokeCount": 4, "hanzi": "別", "composition": ["⿲＊㇀＊儿無"] },
    D330: { "isDecomposable": true, "strokeCount": ["D329", "D18"], "hanzi": "裁", "composition": ["⿱別物"] },
    D332: { "isDecomposable": false, "strokeCount": 5, "hanzi": "米", "composition": ["＊氺"] },
    D333: { "isDecomposable": false, "strokeCount": 3, "hanzi": "刀", "composition": ["⿰一六", "⿻上一", "＊丩"] },
    D334: { "isDecomposable": true, "strokeCount": ["D332", "D333"], "hanzi": "秋", "composition": ["⿰米刀"] },
    D336: { "isDecomposable": false, "strokeCount": 1, "hanzi": "神", "composition": ["＊㇉"] },
    D337: { "isDecomposable": false, "strokeCount": 3, "hanzi": "或", "composition": ["＊々"] },
    D338: { "isDecomposable": false, "strokeCount": 2, "hanzi": "位", "composition": ["＊乃"] },
    D339: { "isDecomposable": false, "strokeCount": 5, "hanzi": "字", "composition": ["⿱九⿻＊フ⿺＊乚無"] },
    D340: { "isDecomposable": false, "strokeCount": 3, "hanzi": "谷", "composition": ["＊刄"] },
    D341: { "isDecomposable": false, "strokeCount": 3, "hanzi": "魚", "composition": ["⿻＊レ⿺＊㇏少"] },
    D342: { "isDecomposable": false, "strokeCount": 5, "hanzi": "虫", "composition": ["⿻包筆"] },
    D343: { "isDecomposable": false, "strokeCount": 5, "hanzi": "皇", "composition": ["⿻＊冖軸", "⿻口六", "⿻＊中五"] },
    D344: { "isDecomposable": false, "strokeCount": 3, "hanzi": "貝", "composition": ["＊彡"] },
    D345: { "isDecomposable": false, "strokeCount": 2, "hanzi": "函", "composition": ["＊コ"] },
    D346: { "isDecomposable": false, "strokeCount": 3, "hanzi": "中", "composition": ["⿱五上", "＊工", "＊エ"] },
    D347: { "isDecomposable": true, "strokeCount": 6, "hanzi": "外", "composition": ["⿰＊ㅌ＊ヨ", "⿰＊ㅌ＊크"] },
    D348: { "isDecomposable": false, "strokeCount": 5, "hanzi": "東", "composition": ["⿱％日一", "⿵＊冖軸", "⿻口六", "＊甲"] },
    D349: { "isDecomposable": false, "strokeCount": 7, "hanzi": "南", "composition": ["⿱％東大", "⿻東処", "⿻言大", "＊里"] },
    D350: { "isDecomposable": false, "strokeCount": 2, "hanzi": "九", "composition": ["⿱％五四", "＊ヌ", "＊又"] },
    D351: { "isDecomposable": false, "strokeCount": 3, "hanzi": "加", "composition": ["⿻五＊儿"] },
    D352: { "isDecomposable": false, "strokeCount": 5, "hanzi": "金", "composition": ["⿻再石"] },
    D353: { "isDecomposable": true, "strokeCount": 5, "hanzi": "夘", "composition": ["⿰＊ㅌ右"] },
    D354: { "isDecomposable": false, "strokeCount": 1, "hanzi": "反", "composition": ["＊レ"] },
    D355: { "isDecomposable": false, "strokeCount": 4, "hanzi": "耳", "composition": ["⿻少＊ヨ"] },
    D356: { "isDecomposable": false, "strokeCount": 4, "hanzi": "助", "composition": ["＊开"] },
    D357: { "isDecomposable": false, "strokeCount": 8, "hanzi": "豆", "composition": ["⿳五⿻⿻再六再五", "⿳五⿻端再五"] },
    D358: { "isDecomposable": false, "strokeCount": 4, "hanzi": "嗅", "composition": ["⿻筆一"] },
    D359: { "isDecomposable": false, "strokeCount": 2, "hanzi": "傾", "composition": ["＊厂"] },
    D360: { "isDecomposable": false, "strokeCount": 6, "hanzi": "震", "composition": ["⿲無＊中少"] },
    D361: { "isDecomposable": false, "strokeCount": 4, "hanzi": "端", "composition": ["⿻再六"] },
    D362: { "isDecomposable": false, "strokeCount": 2, "hanzi": "歪", "composition": ["⿱＊フ十"] },
    D363: { "isDecomposable": false, "strokeCount": 4, "hanzi": "片", "composition": ["⿱五＊山"] },
    D364: { "isDecomposable": false, "strokeCount": 1, "hanzi": "針", "composition": ["＊亅"] }
}