from matplotlib.image import imread
import matplotlib.pyplot as plt
import numpy as np
linziList = [
    "緑", "渋", "慥", "子",
    "虹", "辣", "釘", "万",
    "雷", "a", "槌", "塩",
    "麦", "田", "a", "遅",
    "棆", "旱", "a", "半",
    "涙", "氾", "a", "呉",
    "妙", "腰", "悖", "待",
    "癒", "像", "a", "a",
    "叉", "匁", "嗚", "檸",
    "搾", "飢", "黍", "引",
    "窄", "支", "土", "哦",
    "斥", "奉", "乾", "溜",
    "逆", "捧", "湿", "泉",
    "叮", "贄", "a", "玉",
    "遅", "鍬", "a", "a",
    "順", "謗", "a", "飛",
    "a", "佞", "a", "鍋",
    "節", "麺", "鹽", "蟲",
    "a", "餅", "鹵", "矢",
    "a", "招", "苦", "玄"
    ]

# the matrix calculated by leastsquare.py
t = [[1.26750000e+02, 1.38833333e+02, 4.47368421e-01],
 [8.40000000e+01, 3.89688282e-14, 9.58947368e+01]]


def main():
    foo('img1.png',linziList,t)


def foo(path,list_,t):
    A = imread(path)
    for i in range(len(list_)):
        save(t,A,int(i/4),i%4,list_[i]) # int is for the gryphs in one row


# ith row, jth column
def save(t,A,i,j,name):
    if name == "a":
        return
    I = int(t[0][0] + t[0][1]*j + t[0][2]*i)
    J = int(t[1][0] + t[1][1]*j + t[1][2]*i)
    B = A[J:J+96,I:I+97] # int is for the pixels of one edge
    plt.imsave('../燐字画像59/' + name + '.png', B)
    print(name)
223-127
if __name__ == '__main__':
    main()
