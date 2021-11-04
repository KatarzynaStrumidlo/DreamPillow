import React from 'react';
import { shallow } from 'enzyme';
import { AllAuthorsComponent } from './AllAuthors';

describe('Component AllAuthors', () => {
  it('should render without crashing', () => {
    const component = shallow(<AllAuthorsComponent />);
    expect(component).toBeTruthy();
  });
});
