import { shallow } from "enzyme";
import CounterApp from "../CounterApp";
import { render } from '@testing-library/react';


describe('Pruebas con el <CounterApp />', ()=>{
    test('debe de mostrar <CounterApp /> correctamente ', () => {        
        const wrapper = shallow(<CounterApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el valor por defecto 100 ', () => {        
        const wrapper = shallow(<CounterApp value={100}/>);
        const counterText = wrapper.find('h2').text().trim();
       
        expect(counterText).toMatchSnapshot('100');
    });

    test('debe de incrementar el valor del boton +1 ', () => {        
        const wrapper = shallow(<CounterApp />);
        const btn1 = wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('101');

       //console.log(btn1.html());
        //expect(counterText).toMatchSnapshot('100');
    });
    




});