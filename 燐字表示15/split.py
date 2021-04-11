from matplotlib.image import imread
import matplotlib.pyplot as plt
import numpy as np
linziList1 = [
	"", "", "", "", "", "", "", "赤",
	"", "", "", "", "", "", "", "百",
	"", "", "", "", "", "", "", "佰",
	"", "", "", "", "", "", "", "失",
	"", "", "", "", "", "", "", "橋",
	"", "", "", "", "", "", "", "網",
	"", "", "", "", "", "", "", "顫",
	"", "", "", "", "", "", "", "振",
	"", "", "", "", "", "", "", "帽",
	"", "", "", "", "", "", "", "瑪",
	"", "", "", "", "", "", "", "産",
	"", "", "", "", "", "", "", "須",
	"","","","","","","",""]
t1 = [[2.26000000e+02,  3.73714286e+02,  3.57142857e-01],
      [4.31750000e+02, -6.42857143e-01,  2.75678571e+02]]


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
	B = A[J:J+279,I:I+279]
	plt.imsave('../燐字画像16/'+name + '.png', B)
	print(name)

if __name__ == '__main__':
    main()
