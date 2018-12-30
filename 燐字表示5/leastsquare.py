import numpy as np

def main():
	s = np.array([[1,1,1,1],[0,19,0,19],[0,0,5,5]])
	y = np.array([[450,4948,450,4948],[864,858,2550,2546]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	
	

if __name__ == '__main__':
    main()
