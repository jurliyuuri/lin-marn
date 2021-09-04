from matplotlib.image import imread
import matplotlib.pyplot as plt
import numpy as np
linziList1 = [
    "","", "", "", "", "", "玉", "体",
    "","", "", "", "", "", "叉", "頬",
    "","", "", "", "", "", "飛", "硫",
    "","", "", "", "", "", "鍋", "俐",
    "","", "", "", "", "", "蟲", "決",
    "","", "", "", "", "", "矢", "引",
    "","", "", "", "", "", "玄", "汪",
    "","", "", "", "", "", "", "榎",
    "","", "", "", "", "", "", "株",
    "","", "", "", "", "", "", "織",
    "","", "", "", "", "", "", "村",
    "","", "", "", "", "", "", "犛",
    "","", "", "", "", "", "", "牲",
    "","", "", "", "", "", "", "溜",
    "","", "", "", "", "", "", "泉"
	       ]

t1 = [[ 2.25500000e+02 , 2.24571429e+02 , 8.57142857e-01],
 [ 8.61250000e+02, -1.35714286e+00 , 1.65607143e+02]]


def main():
	foo('img1.png',linziList1,t1)

def foo(path,list_,t):
	A = imread(path)
	for i in range(len(list_)):
		save(t,A,int(i/8),i%8,list_[i]);


# ith row, jth column
def save(t,A,i,j,name):
	if name == "":
		return
	I = int(t[0][0] + t[0][1]*j + t[0][2]*i)
	J = int(t[1][0] + t[1][1]*j + t[1][2]*i)
	B = A[J:J+170,I:I+170]
	plt.imsave('../燐字画像42/'+name + '.png', B)
	print(name)

if __name__ == '__main__':
    main()
