import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LiveInputSearch from '../LiveInputSearch.js';
import data from '../assets/fixtures';

configure({ adapter: new Adapter() });

describe('Snapshoot test', () => {

    it('renders component', () => {
        const wrapper = shallow(<LiveInputSearch {...data}/>);

        expect(wrapper).toMatchSnapshot();
    });
});
