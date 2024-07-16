# Escribe un programa que calcule la suma de los primeros 10 números naturales (1 a 10).

# range
print(sum(range(1,11)))

#for
suma= 0
for n in range(1,11):
    suma += n #suma += n es una forma abreviada de escribir suma = suma + n
print(suma)

#while
n=1
a=0
while n <= 10:
    a+=n #a=a+n 
    n+=1 #n=n+1
print(a)
