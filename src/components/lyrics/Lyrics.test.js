import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from './Lyrics';

describe('Lyrics component', () => {
  it('should render Lyrics', () => {
    const wrapper = shallow(<Lyrics location={{ search: 'hi' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
