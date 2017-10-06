import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game.js';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });
    it('Renders Header initially', () => {
      const wrapper = shallow(<Game />);
      expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
    });
    it('Renders GuessSection initially', () => {
      const wrapper = shallow(<Game />);
      expect(wrapper.containsMatchingElement(<GuessSection />)).toEqual(true);
    });
    it('Renders GuessCount initially', () => {
      const wrapper = shallow(<Game />);
      expect(wrapper.containsMatchingElement(<GuessCount />)).toEqual(true);
    });
    it('Renders GuessList initially', () => {
      const wrapper = shallow(<Game />);
      expect(wrapper.containsMatchingElement(<GuessList />)).toEqual(true);
    });
    // it('Renders the add button initially', () => {
    //     const wrapper = shallow(<AddForm />);
    //     expect(wrapper.hasClass('add-button')).toEqual(true);
    // });

    // it('Should render the add form when editing', () => {
    //     const wrapper = shallow(<AddForm />);
    //     wrapper.instance().setEditing(true);
    //     expect(wrapper.hasClass('add-form')).toEqual(true);
    // });

    // it('Should switch to editing when the add button is clicked', () => {
    //     const wrapper = shallow(<AddForm />);
    //     wrapper.simulate('click');
    //     expect(wrapper.state('editing')).toEqual(true);
    // });

    // it('Should fire the onAdd callback when the form is submitted', () => {
    //     const callback = jest.fn();
    //     const wrapper = mount(<AddForm onAdd={callback} />);
    //     const value = 'Foobar';
    //     wrapper.instance().setEditing(true);
    //     wrapper.find('input[type="text"]').node.value = value;
    //     wrapper.simulate('submit');
    //     expect(callback).toHaveBeenCalledWith(value);
    // });

    // it('Should not fire onAdd if the input is empty', () => {
    //     const callback = jest.fn();
    //     const wrapper = mount(<AddForm onAdd={callback} />);
    //     wrapper.instance().setEditing(true);
    //     wrapper.simulate('submit');
    //     expect(callback).not.toHaveBeenCalled();
    // });
});


