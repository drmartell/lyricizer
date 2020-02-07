import React from 'react';
import { shallow } from 'enzyme';
import Paging from '../Paging';

describe('Paging Component', () => {
  it('should render Paging', () => {
    const wrapper = shallow(<Paging />);
    expect(wrapper).toMatchSnapshot();
  });
});
