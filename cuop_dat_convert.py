import csv
import json

counter = 30

def foo(a,b):
	return {"title" : a, "forms" : [ b ]}

def conv(a):
	a = a.lower()
	translator = str.maketrans('', '', '0123456789')
	a = a.translate(translator)
	return conv3(a)	

def conv2(a):
	if a == "$$$$$$":
		return "~"
	return a

def conv3(a):
	if a[0:4].lower() == "air:":
		return a[4:]
	if a == "---":
		return "~"
	return "*"		

ans = []

with open('【改造版】燐字早見表（牌AZZ藍） - メインの表.tsv','r') as tsvin:
    tsvin = csv.reader(tsvin, delimiter='\t')

    for row in tsvin:
    	if row[0] == "漢字転写":
    		continue
    	'''
    	print(counter
    		,row[0] #燐字
    		,row[1] #パイグ音
    		,row[3] #備考情報
    		,row[5] #アイツォ音
    		,(row[9],row[10]) #韻図音、伝統表記
    		,row[13] #同根アイル
    		)
    	'''
    	tmp2=[("標準パイグ語",conv2(row[1]))
    		,("早見表「古パイグ」",conv2(row[9]))
    		,("早見表「古パイグ」伝統表記",conv2(row[10]))
    		,("アイル語",conv(row[13]))
    		,("アイル語(辞書表記)",conv3(row[13]))
    	]
    	if row[5] != "":
    		tmp2.append(("アイツォ音",row[5]))

    	tmp = {"entry":{"id" : counter,"form" : row[0]},"translations":[foo(a,b) for (a,b) in tmp2]}

    	if row[3] != "":
    		tmp["contents"] = [{"title" : "備考", "text" : row[3] }]

    	ans.append(tmp)
    	counter+=1

q = {"words": ans}
    
c = open("cuop_dat_new.json", "w") 
json.dump(q, c)
