import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';

describe('Search Component', () => {
  it('should render Search', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });
});
