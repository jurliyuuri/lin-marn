from matplotlib.image import imread
import matplotlib.pyplot as plt
import numpy as np
linziList = [
    "型", "醇", "果", 
    "羊", "毛牡", "与", 
    "羚", "牡", "常", 
    "", "槍", "形", 
    "", "鑓", "毎",
    "", "斧", "急", 
    "", "必", "遊", 
    "", "囁", "怖", 
    "", "叫", "質", 
    "", "鶏", "咍", 
    "", "決", "犬", 
    "", "汪", "胸", 
    "", "硫", "穏", 
    "", "俐", "毛", 
    "", "榎", "巻", 
    "", "株", "躍", 
    "", "織", "壁", 
    "", "頬", "牛", 
    "", "体", "毛牛", 
    "", "村", "凹", 
    ]

# the matrix calculated by leastsquare.py
t = [[2.81250000e+03, 1.43000000e+02, -5.26315789e-02],
     [3.17000000e+02, 0.00000000e+00, 9.92631579e+01]]


def main():
    foo('img.png',linziList,t)


def foo(path,list_,t):
    A = imread(path)
    for i in range(len(list_)):
        save(t,A,int(i/3),i%3,list_[i]) # int is for the gryphs in one row


# ith row, jth column
def save(t,A,i,j,name):
    if name == "":
        return
    I = int(t[0][0] + t[0][1]*j + t[0][2]*i)
    J = int(t[1][0] + t[1][1]*j + t[1][2]*i)
    B = A[J:J+99,I:I+100] # int is for the pixels of one edge
    plt.imsave('../燐字画像26/' + name + '.png', B)
    print(name)

if __name__ == '__main__':
    main()
