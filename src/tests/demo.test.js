
describe('Pruebas en el archivo demo.js', ()=>{

    test('Deben ser iguales los strings', () =>{
    
        // 1. Inicializamos
        const mensaje = 'Hola mundo';
        
        // 2. Estimulo    
        const mensaje2 = 'Hola mundo';
    
        // 3. Observar
        expect(mensaje).toBe(mensaje2);
    
    });

});
