import numpy as np

def main():
	s = np.array([[1,1,1,1],[0,7,0,7],[0,0,14,14]])
	y = np.array([[236, 2854,237,2854],[413, 410,4274,4271]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	
	

if __name__ == '__main__':
    main()
