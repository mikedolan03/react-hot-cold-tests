import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    it('Can guess numbers', () => {

    		const wrapper = shallow(<Game />);
    		wrapper.setState({
    			correctAnswer: 100
    		});

    		wrapper.instance().makeGuess(80);
    		expect(wrapper.state('guesses')).toEqual([80]);
    		expect(wrapper.state('feedback')).toEqual('You\'re Warm.');

    		wrapper.instance().makeGuess(10);
    		expect(wrapper.state('guesses')).toEqual([80, 10]);
    		expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

    		wrapper.instance().makeGuess(100);
    		expect(wrapper.state('guesses')).toEqual([80, 10, 100]);
    		expect(wrapper.state('feedback')).toEqual('You got it!'); 


    });
 });   



//tests to  do
//1 takes a user guess 
//2 takes guess and shows feedback
//3 shows win when user gets it right
//4 shows hot cold after a guess
