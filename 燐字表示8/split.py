from matplotlib.image import imread
import matplotlib.pyplot as plt
import numpy as np
linziList1 = [
	"","","","","","","","謝",
	"","","","","","","","針", 
	"","","","","","","","翰", 
	"","","","","","","","歌",
	"","","","","","","","寐",
	"","","","","","","","恒",
	"","","","","","","","享", 
	"","","","","","","","軍", 
	"","","","","","","","隊", 
	"","","","","","","","青", 
	"","","","","","","","止", 
	"","","","","","","","秋", 
	"","","","","","","","冬"]

t1 = [[323.25   ,    448.5    ,      1.39285714],
 [498.75   ,     -0.64285714 ,330.53571429]];


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
	B = A[J:J+333,I:I+333]
	plt.imsave('../燐字画像10/'+name + '.png', B)
	print(name)

if __name__ == '__main__':
    main()
