import numpy as np

def main():
	s = np.array([[1,1,1,1],[0,1,0,1],[0,0,10,10]])
	y = np.array([[588,1336,576,1324],[732,732,6248,6252]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	
	

if __name__ == '__main__':
    main()
