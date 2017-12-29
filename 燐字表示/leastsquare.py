import numpy as np

def main():
	s = np.array([[1,1,1,1],[0,19,19,0],[0,0,9,9]])
	y = np.array([[159,4658,4645,150],[245,254,3290,3281]])
	print(y @ s.T @ np.linalg.inv(s@s.T))

	s = np.array([[1,1,1,1],[0,0,19,19],[10,13,13,10]])
	y = np.array([[158,155,4654,4655],[210,1222,1220,208]])
	print(y @ s.T @ np.linalg.inv(s@s.T))

if __name__ == '__main__':
    main()
