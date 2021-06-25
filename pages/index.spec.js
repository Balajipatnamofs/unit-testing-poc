import 'jsdom-global/register';
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import Home from './index';

// describe('Home Component', () => {
//   it('should render a text', () => {
//     const wrapper = shallow(<Home/>);
//     expect(wrapper.find('.text').text()).toBe('testing react app')
//   })
// })

// describe('Home Component', () => {
//   it('should render count', () => {
//     const wrapper = shallow(<Home/>);
//     expect(wrapper.find('.count').text()).toBe('0');
//   })
// })

// describe('Button onClick', () => {
//   it('should render 1', () => {
//     const wrapper = shallow(<Home/>);
//     const button = wrapper.find('.add');
//     button.simulate('click')
//     expect(wrapper.find('.count').text()).toBe('1');
//   })
// })

// describe('Button onClick', () => {
//   it('should render 1', () => {
//     const wrapper = shallow(<Home/>);
//     const button = wrapper.find('.sub');
//     button.simulate('click')
//     expect(wrapper.find('.count').text()).toBe('-1');
//   })
// })

// describe('Button is disabled', () => {
//   it('should make sure sub button is disabled if count is 0', () => {
//     const mockOnClick = jest.fn();
//     const wrapper = shallow(<Home disabled onClick={mockOnClick}/>);
//     const button = wrapper.find('.sub');
//     button.simulate('click')
//     expect(mockOnClick).toHaveBeenCalledTimes(0);
//   })
// })

// describe('Button is disabled', () => {
//   it('should make sure add button is disabled if count is 10', () => {
//     const mockOnClick = jest.fn();
//     const wrapper = shallow(<Home disabled onClick={mockOnClick}/>);
//     const button = wrapper.find('.add');
//     button.simulate('click')
//     expect(mockOnClick).toHaveBeenCalledTimes(10);
//   })
// })
// it("does not call injected onClick if disabled is true", () => {
//   const mockOnClick = jest.fn();
//   const wrapper = shallow(<Home disabled onClick={mockOnClick} />);
//   // const wrapper = shallow(<Counter disabled onClick={mockOnClick} />);
//   wrapper.find(".add").simulate("click");
//   expect(mockOnClick).toHaveBeenCalledTimes(0);
//   const returnsTrue = jest.fn(() => true);
// console.log(returnsTrue());
// });

// it('should have value 1', () => {
//   const wrapper = shallow(<Home/>);
//   wrapper.setCount(1);
//   expect(wrapper.find('.count').text()).toBe('2');
// })

it('render correctly text component', () => {  
  const HomeComponent = renderer.create(<Home />).toJSON();
  expect(HomeComponent).toMatchSnapshot();
});

it('render disable false', () => {  
  const props = {
          disable: false
      },
      button = shallow(<Home {...props} />);
  expect((button).find(".add").prop('disabled')).toBeFalsy();
});

/**
 * not working
 */
// describe('Home Component', () => {
//   it('validates add button on click', () => {
//     const handleAddOnClick = jest.fn();
//     const props = {
//       handleAddOnClick: handleAddOnClick
//   },
//       const wrapper = shallow(
//           <Home { ...props }/>
//       );
//       // const instance = wrapper.instance();
//       const addBtn = wrapper.find('.add')
//       addBtn.simulate('click')
//       expect(handleAddOnclick).toHaveBeenCalled();
//     })
//   })

  it('renders text input firstname', () => {
    const wrapper = shallow(<Home/>);
    const input = wrapper.find('input').at(0);
      expect(input).toHaveLength(1);
      expect(input.props()['type']).toEqual('text');
      expect(input.props()['id']).toEqual('firstname');
      expect(input.props()['value']).toEqual('dakshina');
  });
  
  it('renders text input lastname', () => {
    const wrapper = shallow(<Home/>);
    const input = wrapper.find('input').at(1);
    expect(input).toHaveLength(1);
    expect(input.props()['type']).toEqual('text');
    expect(input.props()['id']).toEqual('lastname');
    expect(input.props()['value']).toEqual('jayakumar');
  });

  it('should check if there is no image value', () => {
    const wrapper = shallow(<Home/>);
    const input = wrapper.find('input').at(2);
    expect(input.props()['type']).toEqual('file');
    expect(input.props()['src']).toBeFalsy();
  });
