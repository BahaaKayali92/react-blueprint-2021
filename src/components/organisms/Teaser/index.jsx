import React from 'react';
import PropTypes from 'prop-types';
import './style';

class Teaser extends React.PureComponent {
  render() {
    const { image, title, text, link } = this.props;

    return (
      <div className='teaser-wrapper'>
        <div className='container-lg'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <div className='teaser-wrapper__image-wrapper'>
                <img src={image.url} alt={image.alt} />
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='teaser-wrapper__content-wrapper'>
                <h3 className='teaser-wrapper__headline'>{title}</h3>
                <p className='teaser-wrapper__text'>{text}</p>
                <div className='teaser-wrapper__button-wrapper'>
                  <a className='teaser-wrapper__button' target={link.target} href={link.href} title={link.title}>
                    {link.text}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Teaser;

Teaser.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }),
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string,
    target: PropTypes.string,
  }),
};

Teaser.defaultProps = {
  image: {
    url: '',
    alt: '',
  },
  title: '',
  text: '',
  link: {
    href: '#',
    title: 'Link to',
    text: '',
    target: '_blank',
  },
};
