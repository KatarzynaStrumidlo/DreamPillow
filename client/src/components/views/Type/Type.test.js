import React from 'react';
import { shallow } from 'enzyme';
import { TypeComponent } from './Type';

describe('Component Type', () => {
  it('should render without crashing', () => {
    const component = shallow(<TypeComponent />);
    expect(component).toBeTruthy();
  });
});
