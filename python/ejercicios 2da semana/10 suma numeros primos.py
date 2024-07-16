#en un rango de 1 a 353 sume todos los numeros primos #1240
#si divides un primo por un número que no sea 1 o él mismo, 
#se obtiene un resto distinto de cero
#si al dividir un numero x por un numero que no sea si mismo o 1, da un resto de 0=no es primo

for n in range(1, 354):# n tomará cada valor desde 1 hasta 353, uno a la vez
    if n == 1:
        print("no es primo") #Si n es 1, imprimimos "No es primo" porque 1 no es primo.
    else: #se ejecuta si n no es 1.
        for m in range (2,n): # todos los números m desde 2 hasta n-1.
            if n%m==0: # comprueba si n es divisible por m
                print("no es primo") # significa que i es un divisor de n (es decir, n no es primo), 
                                     # por lo que imprimimos "No es primo"
                break #usamos break para salir del bucle.
        else:
            print(n)
#falta suma

            


            
            
