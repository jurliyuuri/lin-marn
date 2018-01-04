import json

def main():
	a = open("air.json" , "r") 
	b = json.load(a)
	b["words"] = list(filter(lambda a: len(a["tags"])==1, b["words"]));
	c = open("air_compressed.json", "w") 
	json.dump(b, c)



if __name__ == '__main__':
    main()
