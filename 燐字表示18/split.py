from matplotlib.image import imread
import matplotlib.pyplot as plt
import numpy as np
linziList1 = [
 "囁", "体", "遊", "怖", "万", "胸", "頬", "呉", "待", "檸", "叫", "鶏", "決", "引", "汪", "哦", "榎", "株", "織", "村", 
 "犛", "牲", "溜", "泉", "玉", "叉", "飛", "鍋", "蟲", "矢", "玄", "慥", "釘", "槌", "妙", "涙", "悖", "順", "嗚", "黍", 
 "乾", "湿", "搾", "窄"]

t1 = [[ 3.67500000e+02,  1.18263158e+02, -5.00000000e-01],
	[ 4.04250000e+02,  2.36842105e-01,  1.68750000e+02]]


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
	plt.imsave('../燐字画像51/'+name + '.png', B)
	print(name)

if __name__ == '__main__':
    main()
