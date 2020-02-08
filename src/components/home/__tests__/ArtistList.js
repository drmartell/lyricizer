import React from 'react';
import { shallow } from 'enzyme';
import ArtistList from '../ArtistList';

describe('ArtistList Component', () => {
  it('should render Artists List', () => {
    const wrapper = shallow(<ArtistList artistArr={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
