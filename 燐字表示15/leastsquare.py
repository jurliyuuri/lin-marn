import numpy as np

def main():
	s = np.array([[1,1,1,1],[0,7,0,7],[0,0,14,14]])
	y = np.array([[226, 2842,231,2847],[432, 427,4291,4287]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	
	

if __name__ == '__main__':
    main()
