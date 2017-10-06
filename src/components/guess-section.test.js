import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section.js';
import GuessForm from './guess-form.js';

describe('<GuessSection />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });
    it('Renders the Feedback', () => {
      const feedback = 'HOT';
      const wrapper = shallow(<GuessSection feedback={feedback} />);
      expect(wrapper.contains(feedback)).toEqual(true);
    });
    it('Renders GuessForm initially', () => {
      const wrapper = shallow(<GuessSection />);
      expect(wrapper.containsMatchingElement(<GuessForm />)).toEqual(true);
    });
});