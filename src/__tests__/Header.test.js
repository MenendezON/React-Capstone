import React from 'react';
import Header from '../components/Header';
import { shallow } from 'enzyme';

describe('Header Component', () => {
  it('renders without crashing', () => {
    shallow(<Header title="Test Title" back="false" />);
  });

  it('renders a back button when "back" prop is true', () => {
    const wrapper = shallow(<Header title="Test Title" back="true" />);
    expect(wrapper.find('Link').exists()).toBeTruthy();
  });

  it('does not render a back button when "back" prop is false', () => {
    const wrapper = shallow(<Header title="Test Title" back="false" />);
    expect(wrapper.find('Link').exists()).toBeFalsy();
  });
});
