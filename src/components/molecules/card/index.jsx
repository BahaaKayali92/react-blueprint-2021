import React from 'react';
import PropTypes from 'prop-types';
import './style';

class Card extends React.PureComponent {
  render() {
    const { image, title, subheadline, text, link, isVertical } = this.props;

    return (
      <div className={`card-wrapper ${!isVertical ? 'card-wrapper--horizontal' : ''}`}>
        <div className='row'>
          {isVertical &&
            <div className='col-12'>
              <div className='card-wrapper__headline-wrapper'>
                <h3 className='card-wrapper__headline'>{title}</h3>
                <p className='card-wrapper__subheadline'>{subheadline}</p>
              </div>
            </div>
          }
          <div className={`col-12 ${!isVertical ? 'col-md-6' : ''}`}>
            <div className='card-wrapper__image-wrapper'>
              <img src={image.url} alt={image.alt} />
            </div>
          </div>
          {!isVertical &&
            <div className='col-12 col-md-6'>
              <div className='card-wrapper__headline-wrapper'>
                <h3 className='card-wrapper__headline'>{title}</h3>
                <p className='card-wrapper__subheadline'>{subheadline}</p>
              </div>
              <p className='card-wrapper__text'>{text}</p>
              <div className='card-wrapper__button-wrapper'>
                <a className='card-wrapper__button' target={link.target} href={link.href} title={link.title}>
                  {link.text}
                </a>
              </div>
            </div>
          }
        </div>
        {isVertical &&
          <div className='col-12'>
            <p className='card-wrapper__text'>{text}</p>
            <div className='card-wrapper__button-wrapper'>
              <a className='card-wrapper__button' target={link.target} href={link.href} title={link.title}>
                {link.text}
              </a>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }),
  title: PropTypes.string,
  subheadline: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string,
    target: PropTypes.string,
  }),
  isVertical: PropTypes.bool,
};

Card.defaultProps = {
  image: {
    url: '',
    alt: '',
  },
  title: '',
  subheadline: '',
  text: '',
  link: {
    href: '#',
    title: 'Link to',
    text: '',
    target: '_blank',
  },
  isVertical: false,
};
