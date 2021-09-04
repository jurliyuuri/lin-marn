import numpy as np

def main():
	s = np.array([[1,1,1,1],[0,7,0,7],[0,0,14,14]])
	y = np.array([[225,1798,238,1809],[861,852,3180,3170]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	
	

if __name__ == '__main__':
    main()
