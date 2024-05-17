import numpy as np

def main():
	s = np.array([[1,1,1,1],[0,3,0,3],[0,0,19,19]])
	y = np.array([[127,543,135,552],[84,84,1906,1906]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	
	

if __name__ == '__main__':
    main()
