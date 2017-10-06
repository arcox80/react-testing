import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoModal from './info-modal.js';

describe('<InfoModal />', () => {
    it('Renders without crashing', () => {
        shallow(<InfoModal />);
    });
    it('Should call onClose when Got It! is clicked', () => {
      const callback = jest.fn();
      const wrapper = shallow(<InfoModal onClose={callback}/>);
      wrapper.find('a').simulate('click', { preventDefault: () => {} });
      expect(callback).toHaveBeenCalled();
    });
});