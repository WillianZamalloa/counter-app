import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';
import PrimeraApp from '../PrimeraApp';


describe('Pruebas en <PrimeraApp />', ()=>{
    
    test('debe de mostrar el subtitulo enviado por el props ', () => {
        const saludo = 'Hola, soy Naruto';
        const subti = 'Hola, soy un subtitulo de Naruto';
        const wrapper = shallow(
                <PrimeraApp 
                    saludo={ saludo } 
                    subti={ subti }
                />
        );

        const textoParrafo = wrapper.find('p').text();
        //console.log(textoParrafo);

        expect( textoParrafo ).toBe(subti);
    })
    
    
    
    
    
    
    // test('debe de mostrar <PrimeraApp /> correctamente ', () => {
    //     const saludo = 'Hola, soy Naruto';
    //     const subti = 'Hola, soy un subtitulo de Naruto';
    //     const wrapper = shallow(
    //             <PrimeraApp 
    //                 saludo={ saludo } 
    //                 subti={ subti }
    //             />
    //     );

    //     expect( wrapper ).toMatchSnapshot();
    // })
    
    
    
    
    // test('debe de mostrar el mensaje "Hola, soy Naruto"', () => {
    //     const saludo = 'Hola, soy Naruto';
    //     const { getByText } = render(<PrimeraApp saludo = { saludo }/>);
    //     expect(getByText(saludo)).toBeInTheDocument;
        
    // });
});