from matplotlib.image import imread
import matplotlib.pyplot as plt
import numpy as np
linziList1 = [
	"虎","輪","唯","火","銭","国","北","龍",
	"使","其","力","弓","之","類","鳥","日",
	"八","高","党","人","足","川","識","笑",
	"欽","善","清","律","手","米","認","神",
	"男","悪","族","声","果","小","牌","低",
	"島","古","右","位","中","無","種","女",
	"蜜","季","墨","新","岩","受","乎","山",
	"縦","黒","冠","琴","撃","如","亦","六",
	"来","豊","倉","肉","木","内","魚","目",
	"於","四","西","而","貝","壊","層","花",
	"上","布","値","全","猫","此","刀","函",
	"我","獣","論","地","膠","心","勿","背",
	"戦","美","彼","谷","輝","囲","口","意",
	"集","頭","春","月","紙","学","周","王",
	"守","水","七","同","何","天","大","軸"]
linziList2 = [
	"","満","衣","書","始","術","為","在",
	"","","行","汝","外","左","巫","闇",
	"","","御","菓","将","加","入","処",
	"","","或","文","糸","言","禦","等",
	"","","械","硬","船","脂","夘","寝",
	"","","機","別","噫","三","東","友",
	"","","覆","横","字","時","二","兵",
	"","","光","近","累","与","腹","油",
	"","","故","物","五","一","箱","陸",
	"","","金","連","石","己","筆","再",
	"","","真","星","互","味","官","終",
	"","","錘","輩","風","下","車","机",
	"","","積","馬","色","骨","皇","絵",
	"","","閉","開","虫","名","南","家",
	"","","海","静","席","九","草","出"];

t1 = [[ 363.5,         748.71428571,   -1.21428571],
      [ 399. ,           0.85714286,  552.28571429]];
t2 = [[  2.95000000e+02,   7.48285714e+02,   5.71428571e-01],
      [  3.77500000e+02,  -2.14285714e+00,   5.52071429e+02]]

def main():
	foo('img1.png',linziList1,t1)
	foo('img2.png',linziList2,t2)

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
	B = A[J:J+553,I:I+553]
	plt.imsave('../燐字画像4/'+name + '.png', B)
	print(name)

if __name__ == '__main__':
    main()
