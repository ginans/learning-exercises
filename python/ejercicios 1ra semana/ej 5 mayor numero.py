# Escribe un programa que encuentre el mayor número en una lista dada.

numayor=0
numeros= [12, 72, 18, 450, 9, 11, 185, 58, 7, 93, 4, 19, 83, 30, 25, 20, 420]
for n in numeros:
    if numayor > numeros:
        numayor=numeros
        print(f"El numero mayor es:{numayor}")