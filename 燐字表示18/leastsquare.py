import numpy as np

def main():
	s = np.array([[1,1,1,1],[0,19,0,19],[0,0,2,2]])
	y = np.array([[367,2615,367,2613],[404,409,742,746]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	
	

if __name__ == '__main__':
    main()
