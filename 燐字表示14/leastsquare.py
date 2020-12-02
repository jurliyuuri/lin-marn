import numpy as np

def main():
	s = np.array([[1,1,1,1],[0,19,0,19],[0,0,3,3]])
	y = np.array([[850,3100,849,3099],[427,425,931,929]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	
	

if __name__ == '__main__':
    main()
