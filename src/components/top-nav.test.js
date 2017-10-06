import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav.js';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });
});