import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Slider from './index';

jest.mock('./images/left-arrow.png', () => 'left-arrow.png');
jest.mock('./images/right-arrow.png', () => 'right-arrow.png');

configure({ adapter: new Adapter() });

describe('Slider', () => {
  let exampleSlides;

  beforeEach(() => {
    exampleSlides = mount(
      <Slider>
        <div className="test-slide1">Hello world!</div>
        <div className="test-slide2">Hello world!</div>
        <div className="test-slide3">Hello world!</div>
      </Slider>);
  })

  it('should render without crashing when empty', () => {
    shallow(<Slider />);
  });

  it('should render the first slide initially', () => {
    expect(exampleSlides.find('div.test-slide1').length).toBe(1);
  });

  it('should show second slide when right arrow is clicked', () => {
    exampleSlides.find('.arrow.right').simulate('click');
    expect(exampleSlides.find('div.test-slide1').length).toBe(0);
    expect(exampleSlides.find('div.test-slide2').length).toBe(1);
  });
});
