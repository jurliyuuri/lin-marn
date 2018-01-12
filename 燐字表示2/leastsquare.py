import numpy as np

def main():
	s = np.array([[1,1,1,1],[0,7,0,7],[0,0,14,14]])
	y = np.array([[362,5606,348,5586],[398,406,8132,8136]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	
	s = np.array([[1,1,1,1],[0,7,0,7],[0,0,14,14]])
	y = np.array([[296,5532,302,5542],[378,362,8106,8092]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	

if __name__ == '__main__':
    main()
