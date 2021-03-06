from matplotlib.image import imread
import matplotlib.pyplot as plt
import numpy as np
linziList1 = [
    "色", "同", "再", "馬", "撃", "西", "外", "光", "術", "我",
    "季", "閉", "乎", "巫", "行", "南", "軸", "闇", "言", "汝",
    "銭", "開", "於", "将", "来", "北", "衣", "木", "字", "此",
    "名", "春", "遠", "王", "識", "縦", "糸", "草", "筆", "其",
    "労", "秋", "悪", "類", "獣", "横", "日", "火", "書", "彼",
    "助", "混", "真", "為", "鳥", "高", "月", "水", "墨", "何",
    "冠", "倉", "噫", "貝", "魚", "低", "星", "風", "文", "或",
    "満", "官", "雪", "刀", "虫", "始", "天", "石", "論", "全",
    "族", "民", "夏", "声", "龍", "終", "地", "金", "紙", "無",
    "清", "迷", "冬", "家", "機", "生", "山", "膠", "絵", "在",
    "定", "意", "止", "善", "箱", "入", "谷", "花", "手", "互",
    "錘", "連", "激", "友", "男", "一", "川", "種", "足", "己",
    "赤", "祭", "付", "美", "女", "二", "海", "果", "心", "物",
    "菓", "笑", "端", "受", "皇", "三", "陸", "油", "目", "人",
    "硬", "戦", "律", "与", "神", "四", "島", "脂", "口", "如",
    "牌", "壊", "集", "力", "船", "五", "上", "大", "骨", "之",
    "軟", "等", "亦", "須", "兵", "六", "下", "中", "頭", "処",
    "豊", "静", "値", "而", "弓", "七", "左", "小", "腹", "時",
    "貧", "層", "積", "即", "車", "八", "右", "周", "背", "故",
    "倒", "極", "国", "御", "虎", "九", "東", "内", "肉", "位"]

linziList2 = [
    "聚", "属", "店", "輝", "党", "守", "輪", "長",
    "叛", "針", "㕮", "累", "片", "十", "血", "傾",
    "科", "翰", "吁", "岩", "件", "囲", "覆", "圧",
    "吏", "寐", "鎖", "禦", "震", "道", "謝", "鼓",
    "宦", "享", "多", "立", "加", "奮", "豆", "包",
    "僚", "失", "卵", "疲", "別", "素", "父", "机",
    "健", "軍", "球", "座", "青", "新", "琴", "散",
    "兄", "隊", "網", "通", "嗅", "蜜", "白", "席",
    "佰", "思", "救", "哩", "後", "祖", "煙", "深",
    "顫", "橋", "皷", "麗", "歪", "前", "寒", "門",
    "振", "帝", "从", "耒", "近", "使", "古", "認",
    "帽", "氏", "后", "貓", "広", "唯", "耳", "傷",
    "瑪", "閥", "穴", "能", "挽", "従", "抗", "棚",
    "産", "纂", "笛", "柔", "平", "茶", "母", "寝",
    "刺", "穐", "筒", "恒", "百", "正", "軽", "綿",
    "育", "啌", "増", "聯", "欽", "樽", "米", "普",
    "呻", "哇", "笙", "短", "夘", "味", "勿", "少",
    "杯", "浬", "淮", "直", "布", "甘", "猫", "輩",
    "可", "刻", "竹", "棉", "械", "歌", "酒", "黒",
    "蛋", "羅", "竺", "箏", "函", "裁", "学", "反"]

# the matrix calculated by leastsquare.py
t1 = [[7.47500000e+01, 9.58333333e+01, 2.63157895e-02],
 [2.11000000e+02, 0.00000000e+00, 6.61052632e+01]]
t2 = [[ 3.70500000e+02,  9.57142857e+01,  1.05263158e-01],
 [ 2.10750000e+02, -7.14285714e-02,  6.61842105e+01]]


def main():
    #foo1('img1.png',linziList1,t1)
    foo2('img2.png',linziList2,t2)

def foo1(path,list_,t):
    A = imread(path)
    for i in range(len(list_)):
        save1(t,A,int(i/10),i%10,list_[i]) # int is the gryphs for one row

def foo2(path,list_,t):
    A = imread(path)
    for i in range(len(list_)):
        save2(t,A,int(i/8),i%8,list_[i]) # int is the gryphs for one row


# ith row, jth column
def save1(t,A,i,j,name):
    if name == "":
        return
    I = int(t[0][0] + t[0][1]*j + t[0][2]*i)
    J = int(t[1][0] + t[1][1]*j + t[1][2]*i)
    B = A[J:J+64,I:I+66] # int is the pixels for one edge
    plt.imsave('../燐字画像22/22.1/'+name + '.png', B)
    print(name)

# ith row, jth column
def save2(t,A,i,j,name):
    if name == "":
        return
    I = int(t[0][0] + t[0][1]*j + t[0][2]*i)
    J = int(t[1][0] + t[1][1]*j + t[1][2]*i)
    B = A[J:J+64,I:I+66] # int is the pixels for one edge
    plt.imsave('../燐字画像22/22.2/'+name + '.png', B)
    print(name)

if __name__ == '__main__':
    main()
