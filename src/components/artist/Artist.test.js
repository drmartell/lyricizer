import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist';

describe('Artist Component', () => {
  it('should render Artist', () => {
    const wrapper = shallow(<Artist match={{ params: { id : 1 } }} location={{ search: 'hi' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
