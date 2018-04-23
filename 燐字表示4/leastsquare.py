import numpy as np

def main():
	s = np.array([[1,1,1,1],[0,19,0,19],[0,0,6,6]])
	y = np.array([[249,1796,249,1797],[305,303,1002,1000]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	
	

if __name__ == '__main__':
    main()
