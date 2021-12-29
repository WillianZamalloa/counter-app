import { retornaArreglo } from "../../base/07-deses-arr";

describe('Pruebas de desestructuracion', ()=>{

    test('Debe de retornar un string o un numero ', () => {

        //const arr = retornaArreglo(); //['ABC', 123]
        const [letras, numeros] = retornaArreglo(); //['ABC', 123]

        //expect(arr).toEqual(['ABC', 123]);
        expect(letras).toBe('ABC');
        console.log(typeof letras)   
        expect(typeof letras).toBe('string');     
        
        expect(numeros).toBe(123);
        console.log(typeof numeros);
        expect(typeof numeros).toBe('number');     
        
    }); 
    
})