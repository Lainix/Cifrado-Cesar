var option = prompt("Ingresa una opción \n 1. Cifrado Cesar \n 2. Desifrado cesar \n 3. Salir"); // opciones para que el usuario decida si Cifrar o Desifrar

if(option === "1"){ // opciones cifrar 

    function cipher(){ // funcion cifrar
        do{
            var string= prompt("Ingresa una frase correcta");// va a repetirse hasta que ingrese una frase correcta
        }
        while (!string || !/^[a-zA-Z\s]*$/.test(string));// condición para que no ingrese numeros y caracteres especiales

        var phraseCipher = " "; // variable para guardar las letras
        for(i=0;i<string.length;i++){// para itinerar la frase ingresada
            var numberCodeAscii = string.charCodeAt(i); // para combertir las letras en numero
            if(numberCodeAscii>=65 && numberCodeAscii<=90){ // condición si la letra es Mayuscula
                var letter = (numberCodeAscii -65 +33)%26 +65; // formula para sacar con el numero la letra
                var asciiLetter = String.fromCharCode(letter);// obtenemos la letra del alfabeto
                phraseCipher+= asciiLetter; // concatenamos las letra 
            }// if de la condicion mayusculas
            else if (numberCodeAscii>=97 && numberCodeAscii <=122){ // condicion Minusculas
                var valueLetter = (numberCodeAscii-97 +33)%26 +97; // formula para sacar con el numero la letra
                var letterLower = String.fromCharCode(valueLetter);// obtenemos la letra del alfabeto 
                phraseCipher+= letterLower; //concatenamos las letras
            }// else if minusculas
            else if (numberCodeAscii==32){ // condicion para agregar spacios
                var space = " "; // variable para spacio y le digo como sera " "
                phraseCipher+= space; // concatenamos letras y spacios
            } // else if spacios
        }// for
        return document.write("Texto original: " + string + " --> " + "Texto codificado: " + phraseCipher);// escribimos en el documento la frase original y la frace cifrada
    } // funcion cipher
    cipher(); // llama la funcion
} // opcion 1 cipher
else if(option === "2"){ // opcion decifrar
    function decipher(){ // funcion decifrar
        do{
            var string= prompt("Ingresa una frase correcta");// repite hasta que ingrese uno frase correcta
        }
        while (!string || !/^[a-zA-Z\s]*$/.test(string));// condición para que no ingrese numeros y caracteres especiales

        var codeDecipher = " "; // variable para guardar las letras
        for(i=0;i<string.length;i++){ // itinera la frase ingresada
            var numberCodeAscii = string.charCodeAt(i); // obtener el numero del codigo Ascii
            if(numberCodeAscii>=65 && numberCodeAscii<=90){ // condicion de mayusculas 
                var letter = (numberCodeAscii+65-33)%26 +65;// formula para obtener la letra del codigo Ascii
                var  asciiLetter = String.fromCharCode(letter); // para obtener con el numero la letra
                codeDecipher+= asciiLetter; // concatenamos las letras
            }// condicion de mayusculas
            else if (numberCodeAscii>=97 && numberCodeAscii<=122){ // condicion de minusculas
                var valueLetter = (numberCodeAscii+97-45)%26 +97;// para obtener el numero Ascii
                var letterLower = String.fromCharCode(valueLetter);// para encontrar la letra con el numero
                codeDecipher+= letterLower; // concatenamos las letras
            }// condicion para minusculas 
            else if (numberCodeAscii==32){ //condicion para agregar spacios
                var space = " "; // variable para spacio y le digo como sera " "
                phraseCipher+= space; // concatenamos letras y spacios
            }// else if para los spacios
        }// for
        return document.write("Texto original: " + string + " --> " + "Texto codificado: " + codeDecipher); // escribimos en el documento la frase original cifrada y la frace decifrada
    } // funcion decipher
    decipher(); // llama la funcion
} // opcion 2 Decipher
else if(option === "3"){ // opcion salir
    document.write("Nos vemos para la proxima"); // mensaje de despedida

} // else if opcion salir
else {
    alert("Ingrese una frase correcta");
}  