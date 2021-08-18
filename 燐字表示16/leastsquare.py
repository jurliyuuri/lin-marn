import numpy as np

def main():
	s = np.array([[1,1,1,1],[0,2,0,2],[0,0,19,19]])
	y = np.array([[2812,3099,2812,3097],[317,317,2203,2203]])
	print(y @ s.T @ np.linalg.inv(s@s.T))
	

if __name__ == '__main__':
    main()
