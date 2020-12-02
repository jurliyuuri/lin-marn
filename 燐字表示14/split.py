from matplotlib.image import imread
import matplotlib.pyplot as plt
import numpy as np
linziList1 = [
	"須", "遠", "激", "付", "子", "民", "迷", "常", "形", "毎", "赤", "普", "白", "寒", "軽", "急", "型", "質", "青", "百", 
	"咍", "犬", "穏", "毛", "巻", "躍", "壁", "牛", "卵", "球", "網", "羊", "穴", "凹", "笙", "淮", "失", "隊", "思", "橋", 
	"帝", "浬", "刻", "羅", "聚", "叛", "科", "吏", "宦", "僚", "健", "兄", "佰", "顫", "振", "帽", "瑪", "産", "刺", "育", 
	"呻", "杯", "可", "蛋", "顔", "醇", "羚", "牡", "槍", "鑓", "斧", 
]


t1 = [[8.50000000e+02, 1.18421053e+02, - 3.33333333e-01],
	[4.27000000e+02, - 1.05263158e-01, 1.68000000e+02]];


def main():
	foo('img1.png',linziList1,t1)

def foo(path,list_,t):
	A = imread(path)
	for i in range(len(list_)):
		save(t,A,int(i/20),i%20,list_[i]);


# ith row, jth column
def save(t,A,i,j,name):
	if name == "":
		return
	I = int(t[0][0] + t[0][1]*j + t[0][2]*i)
	J = int(t[1][0] + t[1][1]*j + t[1][2]*i)
	B = A[J:J+120,I:I+120]
	plt.imsave('../燐字画像25/'+name + '.png', B)
	print(name)

if __name__ == '__main__':
    main()
