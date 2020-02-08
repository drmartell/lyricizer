import React from 'react';
import { shallow } from 'enzyme';
import Recording from './Recording';

describe('Recording component', () => {
  it('should render Recording', () => {
    const wrapper = shallow(
      <Recording
        match={{ params: { id: 1 } }}
        location={{ search: 'hi' }}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
