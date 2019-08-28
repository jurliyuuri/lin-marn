from matplotlib.image import imread
import matplotlib.pyplot as plt
import numpy as np
linziList1 = [
	"即","冬","止","秋","極","倒","謝","歌","油","後","輝","累","通","哩","麗","恒","店","鎖","多","笛",
	"筒","増","竹","竺","属","針","翰","寐","享","軍","戦","氏","閥","纂","穐","啌","哇","","",""	]

t1 = [[ 9.12250000e+02,  1.18447368e+02 ,-2.77777778e-01],
 [ 4.07000000e+02 , 2.96981920e-14,  1.68555556e+02]];


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
	B = A[J:J+123,I:I+123]
	plt.imsave('../燐字画像12/'+name + '.png', B)
	print(name)

if __name__ == '__main__':
    main()
