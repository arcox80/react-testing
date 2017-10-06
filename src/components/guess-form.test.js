import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form.js';

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });
    it('Should fire the onGuess callback when form is submitted', () => {
      const callback = jest.fn();
      const wrapper = mount(<GuessForm onGuess={callback} />);
      const value = 25;
      wrapper.find('input[type="text"]').node.value = value;
      wrapper.simulate('submit');
      expect(callback).toHaveBeenCalledWith(value.toString());
    });
    it('Should reset the input when the form is submitted', () => {
      const wrapper = mount(<GuessForm />);
      const textInput = wrapper.find('input[type="text"]');
      textInput.node.value = 25;
      wrapper.simulate('submit');
      expect(textInput.node.value).toEqual('');
    });
});