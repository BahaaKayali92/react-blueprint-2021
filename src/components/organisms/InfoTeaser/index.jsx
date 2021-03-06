import React from 'react';
import PropTypes from 'prop-types';
import './style';
import Info from '../../molecules/Info';

class InfoTeaser extends React.PureComponent {
  render() {
    const { items } = this.props;
    return (
      <div className='info-teaser-wrapper'>
        <div className='container-lg'>
          <div className='row'>
            {
              items.map((item, index) => (
                <div
                  key={index}
                  className='col-12 col-md-4'
                >
                  <Info
                    {...item}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default InfoTeaser;

InfoTeaser.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      title: PropTypes.string,
      target: PropTypes.string,
    }),
  })),
};

InfoTeaser.defaultProps = {
  items: [],
};
