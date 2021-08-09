import React from 'react';
import { shallow } from 'enzyme';
import { AddOrderComponent } from './AddOrder';

describe('Component AddOrder', () => {
  it('should render without crashing', () => {
    const component = shallow(<AddOrderComponent />);
    expect(component).toBeTruthy();
  });
});
