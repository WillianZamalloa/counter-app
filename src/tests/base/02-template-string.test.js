import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';


describe('Pruebas 02-template-string.js', ()=>{

    test('getSaludo debe de retornar Hola Willian ', () => {
        
        const nombre = 'Willian';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola '+nombre+'!');

    }); 

    test('getSaludo por defecto debe de retornar Hola Jose Luis ', () => {
        
        

    });

})

