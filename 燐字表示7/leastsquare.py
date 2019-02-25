import numpy as np

def main():
	s = np.array([[1,1,1,1],[0,1,0,1],[0,0,10,10]])
	y = np.array([[680,1428,692,1436],[848,848,6360,6356]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	
	

if __name__ == '__main__':
    main()
