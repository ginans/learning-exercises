#numeros primos
#si es primo que retorne true
#si no es primo que retorne false
#usar booleanos
for n in range(1,10):
    if n==1:
        print("no es primo")
    else:
        for m in range(2,n):
            if n%m==0:
                print("no es primo")
                break
        else:
            print(n)   


