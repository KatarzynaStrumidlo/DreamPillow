import React from 'react';
import { shallow } from 'enzyme';
import { PaintingComponent } from './Painting';

describe('Component Painting', () => {
  it('should render without crashing', () => {
    const component = shallow(<PaintingComponent />);
    expect(component).toBeTruthy();
  });
});
