def fizzbuzz(n): #hacemos que el programa nos entregue el valor n
    for n in range(1,n+1): #n+1 nos va a indicar el numero que elegimos al invocar la funcion+1 
        if n==24 or n==55:
            print(n)
        elif n%3==0:
            print("Fizz")
        elif n%5==0:
            print("Buzz")
        elif n%15==0:
            print("FizzBuzz")
        else:
            print(n)
fizzbuzz(100)# invoco la funcion y le doy valor a mi n(limite superior)
#ya que pusimos print dentro de a funcion, no es necesario imprimir al invocar a la función