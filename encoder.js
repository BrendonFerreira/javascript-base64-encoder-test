const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

const minha_string = "sads á sio pso"
let minha_string_convertida = ""


let stringInBinary = ""

let i = 0
while( i < minha_string.length ){
   /*
   -------------------------------------------------------------------------------------------------
   |         toChar        |         toChar        |         toChar        |         toChar        |
   -------------------------------------------------------------------------------------------------
   | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 |
   -------------------------------------------------------------------------------------------------
   |             Byte              |             Byte              |             Byte              |
   -------------------------------------------------------------------------------------------------
   */ 
    
   stringInBinary += (minha_string.charCodeAt(i).toString(2))
   i++
  
}

let j = 0
let encodedString = ""
while( j < stringInBinary.length ){
  encodedString += symbols.charAt( parseInt(stringInBinary.slice( j, j + 5),2) )
  j += 5
}

console.log(encodedString)
