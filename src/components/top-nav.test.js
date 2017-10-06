import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav.js';
import Header from './header';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });
    it('Should call InfoModal when What is clicked', () => {
      const callback = jest.fn();
      const wrapper = shallow(<TopNav onInfo={callback} />);
      wrapper.find('.what').simulate('click', { preventDefault: () => {} });
      expect(callback).toHaveBeenCalled();
    });
    it('Should call onNewGame when New Game is clicked', () => {
      const callback = jest.fn();
      const wrapper = shallow(<TopNav onNewGame={callback} />);
      wrapper.find('.new').simulate('click', { preventDefault: () => {} });
      expect(callback).toHaveBeenCalled();
    });
});