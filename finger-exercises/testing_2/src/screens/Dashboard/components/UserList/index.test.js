import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import UserList from './index';

configure({ adapter: new Adapter() });

describe('UserList', () => {
  xit('shows new user when props are changed', () => {    
  });
  it('setProps makes componentDidUpdate to be executed', () => {
    jest.spyOn(UserList.prototype, 'componentDidUpdate')
    const wrapper = shallow(<UserList />);
    wrapper.setProps({ hide: true }); //causes a re-render of our component
    expect(UserList.prototype.componentDidUpdate.mock.calls.length).toBe(1);
  });
});
