from matplotlib.image import imread
import matplotlib.pyplot as plt
import numpy as np
linziList1 = [
	"","哩",
	"","麗",
	"","店",
	"","鎖",
	"","後"]

t1 = [[536.,  748. ,   2. ],
 [841. ,  -2. , 552.5]];


def main():
	foo('img1.png',linziList1,t1)

def foo(path,list_,t):
	A = imread(path)
	for i in range(len(list_)):
		save(t,A,int(i/2),i%2,list_[i]);


# ith row, jth column
def save(t,A,i,j,name):
	if name == "":
		return
	I = int(t[0][0] + t[0][1]*j + t[0][2]*i)
	J = int(t[1][0] + t[1][1]*j + t[1][2]*i)
	B = A[J:J+553,I:I+553]
	plt.imsave('../燐字画像8/'+name + '.png', B)
	print(name)

if __name__ == '__main__':
    main()
