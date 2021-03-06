import Reflux from 'reflux';
import TestStore from '../../stores/TestStore';
import { ACTIVE_BUNDLE_CONTRACT_SUCCESS } from '../../constants/actions';
import Header from '../../organisms/Header';
import Actions from '../../actions';
import Teaser from '../../organisms/Teaser';
import InfoTeaser from '../../organisms/InfoTeaser';
import Card from '../../molecules/card';

class HomePage extends Reflux.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      nav: [
        {
          text: 'Homepage',
          href: '#',
          subList: [
            {
              text: 'Lorem Ipsum',
            },
            {
              text: 'Lorem Ipsum',
            },
            {
              text: 'Lorem Ipsum',
              subList: [
                {
                  text: 'lorem Ipsum 1',
                  subList: [
                    {
                      text: 'lorem Ipsum 2',
                    },
                  ],
                },
              ],
            },
            {
              text: 'Lorem Ipsum',
            },
          ],
        },
        {
          text: 'A Dropdown Menu',
          href: '#',
        },
        {
          text: 'Two Column #1',
          href: '#',
        },
        {
          text: 'Two Column #2',
          href: '#',
        },
        {
          text: 'One Column',
          href: '#',
        },
      ],
      teaser: {
        image: {
          url: 'assets/images/pic01.png',
          alt: 'image',
        },
        title: 'Donec sedurna',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        link: {
          href: '#',
          title: 'title',
          text: 'Lorem Ipsum',
        },
      },
      infoTeaser: [
        {
          title: 'title',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          link: {
            href: '#',
            title: 'title',
            text: 'more Info',
          },
        },
        {
          title: 'title',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          link: {
            href: '#',
            title: 'title',
            text: 'more Info',
          },
        },
        {
          title: 'title',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          link: {
            href: '#',
            title: 'title',
            text: 'more Info',
          },
        },
      ],
      card1: {
        image: {
          url: 'assets/images/pic02.jpg',
          alt: 'image',
        },
        title: 'Donec sedurna',
        subheadline: 'Donec sedurna subheadline',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        link: {
          href: '#',
          title: 'title',
          text: 'Lorem Ipsum',
        },
      },
      card2: {
        image: {
          url: 'assets/images/pic03.jpg',
          alt: 'image',
        },
        title: 'Donec sedurna',
        subheadline: 'Donec sedurna subheadline',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        link: {
          href: '#',
          title: 'title',
          text: 'Lorem Ipsum',
        },
        isVertical: true,
      },
    };
    this.mapStoreToState(TestStore, HomePage.onStoreChange);
  }

  static onStoreChange(store) {
    if (!store) return;
    const action = store.action.type;
    if (action === ACTIVE_BUNDLE_CONTRACT_SUCCESS) {
      return {
        title: store.data.title,
      };
    }
  }

  componentDidMount() {
    Actions.testAction();
  }

  render() {
    const { nav, teaser, infoTeaser, card1, card2 } = this.state;

    return (
      <div>
        <Header
          nav={nav}
        />
        <div>
          <div className='row'>
            <div className='col-12'>
              <Teaser
                {...teaser}
              />
              <InfoTeaser
                items={infoTeaser}
              />
            </div>
          </div>
          <div className='container-lg'>
            <div className='row'>
              <div className='col-12 col-md-9'>
                <div className='row'>
                  <div className='col-12'>
                    <Card
                      {...card1}
                    />
                  </div>
                  <div className='col-12'>
                    <div className='row'>
                      <div className='col-12 col-md-6'>
                        <Card
                          {...card2}
                        />
                      </div>
                      <div className='col-12 col-md-6'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-3'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
