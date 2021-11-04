import React from 'react';
import { shallow } from 'enzyme';
import { AuthorComponent } from './Author';

describe('Component Author', () => {
  it('should render without crashing', () => {
    const component = shallow(<AuthorComponent />);
    expect(component).toBeTruthy();
  });
});
