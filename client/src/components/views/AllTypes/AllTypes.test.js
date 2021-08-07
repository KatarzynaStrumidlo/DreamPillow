import React from 'react';
import { shallow } from 'enzyme';
import { AllTypesComponent } from './AllTypes';

describe('Component AllTypes', () => {
  it('should render without crashing', () => {
    const component = shallow(<AllTypesComponent />);
    expect(component).toBeTruthy();
  });
});
