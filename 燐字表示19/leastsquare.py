import numpy as np

def main():
	s = np.array([[1,1,1,1],[0,19,0,19],[0,0,2,2]])
	y = np.array([[3092,2675,2682,3098],[270,270,2093,2093]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	
	

if __name__ == '__main__':
    main()
