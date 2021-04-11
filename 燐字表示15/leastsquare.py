import numpy as np

def main():
	s = np.array([[1,1,1,1],[0,7,0,7],[0,0,14,14]])
	y = np.array([[350, 2966,347,2964],[474, 478,4332,4336]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	
	

if __name__ == '__main__':
    main()
