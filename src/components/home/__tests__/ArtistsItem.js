import React from 'react';
import { shallow } from 'enzyme';
import ArtistItem from '../ArtistsItem';

describe('ArtistItem component', () => {
  it('should render ArtistItem', () => {
    const wrapper = shallow(<ArtistItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
