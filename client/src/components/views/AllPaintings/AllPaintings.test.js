import React from 'react';
import { shallow } from 'enzyme';
import { AllPaintingsComponent } from './AllPaintings';

describe('Component AllPaintings', () => {
  it('should render without crashing', () => {
    const component = shallow(<AllPaintingsComponent />);
    expect(component).toBeTruthy();
  });
});
