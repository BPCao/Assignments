
def pyramid(n):
        k = 2 * n - 2
        for i in range(0, n): 
                for j in range(0, k): 
                        print(end=" ")
                k -= 1
                for j in range(0, i+1):
                        print("* ", end="")
                print("\r")             

n = 17
pyramid(n)
