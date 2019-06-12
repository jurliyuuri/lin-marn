import json

def conv(a):
	a = a.lower()
	translator = str.maketrans('', '', '0123456789')
	a = a.translate(translator)
	return a

def foo(q):
	old_form = q["entry"]["form"]
	q["entry"]["form"] = conv(old_form)
	assert(q["contents"][0]["title"] == "訳語")
	q["translations"] = [{"title":"","forms":[q["contents"][0]["text"]]}]
	q["contents"] = q["contents"][1:]
	if old_form != conv(old_form):
		q["contents"] += [{"title":"旧辞書表記","text":old_form}]
	return q

def main():
	a = open("air.json" , "r", encoding='utf-8') 
	b = json.load(a)
	b["words"] = list(filter(lambda a: len(a["tags"])>=1, b["words"]))
	b["words"] = [foo(q) for q in b["words"]]
	c = open("air_compressed.json", "w", encoding='utf-8') 
	json.dump(b, c)



if __name__ == '__main__':
    main()
