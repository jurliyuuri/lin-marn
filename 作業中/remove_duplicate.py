import json

def f(q):
	q["translations"] = g(q["translations"])
	return q

def g(r):
	d = {}
	for i in range(len(r)):
		key = r[i]["title"]
		content = r[i]["forms"]
		if key not in d:
			d[key] = content
		elif d[key][0] != content[0]:
			d[key].append("$$$$$$")
			d[key] += content

	return [ {"title":p, "forms":q} for (p,q) in d.items()]

a = open("../lin cuop2 dat2.json", "r")
b = json.load(a)

b["words"] = [ f(c) for c in b["words"]]

d = open("cuop_dat_new2.json", "w") 
json.dump(b, d)