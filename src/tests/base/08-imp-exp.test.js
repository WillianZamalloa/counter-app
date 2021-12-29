import { getHeroeById } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas en fucniones de heroes', ()=>{

    test('debe de retornar un heroe por id ', () => {

        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find( h => h.id === id);
        expect(heroe).toEqual(heroeData);      
        
    });


    test('debe de retornar undefined si el heroe no existe ', () => {

        const id = 11;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);      
        
    });

});