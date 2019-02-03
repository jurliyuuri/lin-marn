import numpy as np

def main():
	s = np.array([[1,1,1,1],[0,1,0,1],[0,0,4,4]])
	y = np.array([[536,1284,544,1292],[840,840,3052,3048]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	
	

if __name__ == '__main__':
    main()
