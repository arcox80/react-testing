import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header.js';
import TopNav from './top-nav';
import InfoModal from './info-modal';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });
    it('Renders TopNav initially', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.containsMatchingElement(<TopNav />)).toEqual(true);
    });
    it('Renders InfoModal when toggled', () => {
      const wrapper = shallow(<Header />);
      wrapper.instance().toggleInfoModal(true);
      expect(wrapper.containsMatchingElement(<InfoModal />)).toEqual(true);
    });
});