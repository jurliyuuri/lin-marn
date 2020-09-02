import numpy as np

def main():
	s = np.array([[1,1,1,1],[0,9,0,9],[0,0,19,19]])
	y = np.array([[58,921,58,920],[58,58,1314,1314]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	
	s = np.array([[1,1,1,1],[0,7,0,7],[0,0,19,19]])
	y = np.array([[95,765,95,765],[65,65,1323,1323]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	

if __name__ == '__main__':
    main()
