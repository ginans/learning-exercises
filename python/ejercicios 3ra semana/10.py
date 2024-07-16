#Escribe una funcion que reciba un string como parametro y retorne el string
#pero con cada parametro que estuviese en mayusculas reemplazando por "$".
#Asuma que el string consistira solamente de letras.
#Por ejemplo si el string es "Viva la Vida" entonces su funcion
#debe retornar "$iva la $iva".
#"Silvia Salta Sobre Siete Soles Soñados"
import re
def reemplaza_mayus(texto):
    reemplazado=re.sub(r"[A-Z]","$", texto)
    print(reemplazado)
reemplaza_mayus("Silvia Salta Sobre Siete Soles Soñados")