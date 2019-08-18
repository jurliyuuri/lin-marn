import numpy as np

def main():
	s = np.array([[1,1,1,1],[0,19,0,19],[0,0,9,9]])
	y = np.array([[760,3016, 752,3008],[ 354, 361,1874,1880]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	
	

if __name__ == '__main__':
    main()
