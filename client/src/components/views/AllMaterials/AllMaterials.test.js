import React from 'react';
import { shallow } from 'enzyme';
import { AllMaterialsComponent } from './AllTypes';

describe('Component AllMaterials', () => {
  it('should render without crashing', () => {
    const component = shallow(<AllMaterialsComponent />);
    expect(component).toBeTruthy();
  });
});
