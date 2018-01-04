import json

def foo(a):
	return len(a["tags"])==1

def main():
	a = open("air.json" , "r") 
	b = json.load(a)
	b["words"] = list(filter(foo, b["words"]));
	c = open("air_compressed.json", "w") 
	json.dump(b, c)



if __name__ == '__main__':
    main()
