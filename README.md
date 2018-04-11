# Cifrado César

### Descripción:

> Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de **Cifrado César** con el parámetro de desplazamiento de 33 espacios hacia la derecha.

> Por ejemplo:

• Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ

• Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG

> Para poder resolver el problema se utilizará:

charCodeAt(); te da la letra en cod. ASCII

String.fromCharCode(); te devuelve la letra desde el cod ASCII

Formula para descifrar: (x + n) % 26

Formula para cifrar: (x - 65 + n)%26 + 65

> El usuario no debe poder ingresar un campo vacío o que contenga números
> Permite encriptar mensajes segun el algoritmo de **Cifrado César**.

Con este programa se puede:

Elegir una opción para si se desea:

## Cifrar una palabra 
* Se puede combinar letras mayusculas con minusculas. 
* Acepta espacios.
## Descifrar una palabra 
* Se puede combinar letras mayusculas con minusculas. 
* Acepta espacios.

***
## Consideraciones Específicas: 

> Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26

> Tu código debe estar compuesto por 2 funciones con los siguientes nombres: **Cipher** y **Decipher**


***
## Pseudocódigo

* Creamos un menu de opciones para que el usuario pueda decidir que hacer Cifrar, Desifrar o salir.
* Por medio de un _do_ _while_ ponemos una condicional Mientras el valor ingresado este vacio o no cumpla el rango de letras establecidos no ingresara a la función y volvera a salir un prompt que pedira que ingrese datos validos.
* Creamos una variable para guardar la frase.
* Se itinera la frase
* Opción (1) Función **Cipher**, Pedimos frase al usuario, Por medio de charCodeAt obtenemos el numero del codigo Ascii, definír un rango de numeros para mayusculas y minusculas, despues se utiliza la formula (Ascii-65 +33)%26 + 65, convertir el nuevo ASCII en una letra del alfabeto con fromCharCode y concatenamos para formar la frase (si ingreso espación definimos una condicion para que agrege el espacio ala frase). Para el caso de las minusculas es lo mismo solo que usamos (Ascii-97 +33)%26 +97.
* Opción (2) Función **Decipher**, Pedimos frase al usuario, Creamos una variable para guardar la frase. por medio de charCodeAt obtenemos el numero del codigo Ascii, definír un rango de numeros para mayusculas y minusculas, despues se utiliza la formula (Ascii+65-33)%26+65, convertir el nuevo ASCII en una letra del alfabeto con fromCharCode y concatenamos para formar la frase (si ingreso espación definimos una condicion para que agrege el espacio ala frase). Para el caso de las minusculas es lo mismo solo que usamos (Ascii+97-45)%26+97.
* Opción (3) Salir,  Muestra en pantalla mensaje de despedida.


***
## Diagrama de flujo

![Diagrama de flujo del problema Cipher](/assets/image/Cipher.png)

***
## Herramientas Utilizadas

• Html 5

• Javascript Es6

***
## Creado por:

> Maria Elizabeth Vera Meza
