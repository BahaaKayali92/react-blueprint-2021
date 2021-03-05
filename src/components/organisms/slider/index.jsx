import React from 'react';
import PropTypes from 'prop-types';
import './style';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.activeIndex = 0;
    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
  }

  slideTo() {
    this.slideList.style.transform = `translateX(-${this.activeIndex * 100}%)`;
  }

  slideLeft() {
    this.activeIndex = Math.max(0, this.activeIndex - 1);
    this.slideTo();
  }

  slideRight() {
    const { items } = this.props;
    this.activeIndex = Math.min(items.length - 1, this.activeIndex + 1);
    this.slideTo();
  }

  render() {
    const { items } = this.props;
    if (items.length < 1) {
      return <div />;
    }

    return (
      <div className='slider'>
        <ul ref={(ref) => { this.slideList = ref; }} className='slider__list'>
          {items.map((item, index) => (
            <li key={index}>
              <div>
                <img src={item.url} />
              </div>
            </li>
          ))}
        </ul>
        <button onClick={this.slideLeft} className='slider__nav-btn slider__nav-btn--left'>left</button>
        <button onClick={this.slideRight} className='slider__nav-btn slider__nav-btn--right'>right</button>
      </div>
    );
  }
}

export default Slider;

Slider.propTypes = {
  items: PropTypes.arrayOf({
    url: PropTypes.string.isRequired,
  }),
};

Slider.defaultProps = {
  items: [],
};
