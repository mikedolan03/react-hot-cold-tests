import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should fire a callback on submit with users guess', () => {
    		const callback = jest.fn();
    		const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    		const guessValue = '3';
    		wrapper.find('input[type="number"]').instance().value = guessValue;
    		wrapper.simulate('submit');
    		expect(callback).toHaveBeenCalledWith(guessValue);	

    });		


 });  