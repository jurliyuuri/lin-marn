import numpy as np

def main():
	s = np.array([[1,1,1,1],[0,19,0,19],[0,0,9,9]])
	y = np.array([[912, 3163,  910, 3160],[407, 407, 1924, 1924]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	
	

if __name__ == '__main__':
    main()
