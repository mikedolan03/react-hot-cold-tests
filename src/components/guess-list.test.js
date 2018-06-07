import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
 		const guessList = [4,5,6];

    it('Renders without crashing', () => {
        shallow(<GuessList guesses={guessList} />);
    });

it('Renders guess items', () => {
    const wrapper = shallow(<GuessList guesses={guessList} />);
    //expect(wrapper.find('ul').children()).to.have.length(guessList.length);
    expect(wrapper.find('li').length).toEqual(guessList.length);

});

 });  

