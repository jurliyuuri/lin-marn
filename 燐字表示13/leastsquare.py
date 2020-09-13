import numpy as np

def main():
	s = np.array([[1,1,1,1],[0,9,0,9],[0,0,19,19]])
	y = np.array([[75,937,75,938],[211,211,1467,1467]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	
	s = np.array([[1,1,1,1],[0,7,0,7],[0,0,19,19]])
	y = np.array([[370,1041,373,1042],[211,210,1468,1468]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	

if __name__ == '__main__':
    main()
