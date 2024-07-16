number1=(float(input("Ingrese su primer numero: ")))
number2=(float(input("ingrese su segundo numero: ")))
print("Puedes realizar 4 tipos de operacion:")
print("1. Suma"),print("2. Resta"),print("3. Multiplicación"),print("4. División")
suma=1
resta=2
multiplicacion=3
division=4
operacion=int(input("Qué operación deseas realizar: "))

try:
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
            raise ZeroDivisionError("No sé puede dividir por 0")
        print(f"Elegiste {division}. división")
        print(f"{number1} / {number2} = {round(number1 / number2)}")
    else:
        print("Por favor, ingresa un valor numerico válido")
except ValueError:
    print("Por favor, ingresa un numero valido")
except ZeroDivisionError as e:
    print(e)

    
def suma(a, b=8):
    return a + b
result = suma(5)# result = 13"
print(result)#????????????????????????????????????