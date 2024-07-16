number1=(float(input("Ingrese su primer numero: ")))
number2=(float(input("ingrese su segundo numero: ")))
print("Puedes realizar 4 tipos de operacion:")
print("1. Suma"),print("2. Resta"),print("3. Multiplicación"),print("4. División")
suma=1
resta=2
multiplicacion=3
division=4
while True:
    operacion=int(input("Qué operación deseas realizar: "))
    if operacion==suma:
        print(f"Elegiste {suma}. suma")
        print(f"{number1} + {number2}= {round(number1+number2)}")
    elif operacion==resta:
        print(f"Elegiste {resta}. resta")
        print(f"{number1} - {number2}= {round(number1-number2)}")
    elif operacion==multiplicacion:
        print(f"Elegiste la opcion {multiplicacion}. multiplicación")
        print(f"{number1} x {number2}= {round(number1*number2)}")
    elif operacion==division:
        if number2 ==0:
            print("No se puede dividir un número por 0")
            break
        else:
            print(f"Elegiste {division}. división")
            print(f"{number1} / {number2} = {round(number1 / number2)}")
    else:
        print("Por favor, ingresa un valor numerico válido")
        break
