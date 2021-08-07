import React from 'react';
import { shallow } from 'enzyme';
import { MaterialComponent } from './Material';

describe('Component Material', () => {
  it('should render without crashing', () => {
    const component = shallow(<MaterialComponent />);
    expect(component).toBeTruthy();
  });
});
