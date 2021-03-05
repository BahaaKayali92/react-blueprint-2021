import Reflux from 'reflux';
import H1 from './atoms/H1';
import TestStore from './stores/TestStore';
import {
  ACTIVE_BUNDLE_CONTRACT_SUCCESS
} from './constants/actions';
import Actions from './actions';
import Header from './organisms/Header';
import Slider from './organisms/slider';

class App extends Reflux.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      nav: [
        {
          text: 'Über uns',
          href: '#',
        },
        {
          text: 'Unsere Services',
          href: '#',
        },
        {
          text: 'Referenzen',
          href: '#',
        },
        {
          text: 'Karriere',
          href: '#',
        },
        {
          text: 'Blog',
          href: '#',
        },
      ],
      sliderItems: [
        {
          url: '../assets/images/test.png',
        },
        {
          url: '../assets/images/test.png',
        },
        {
          url: '../assets/images/test.png',
        },
        {
          url: '../assets/images/test.png',
        },
      ],
    };
    this.mapStoreToState(TestStore, App.onStoreChange);
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
    const { title, nav, sliderItems } = this.state;
    return (
      <div>
        <Header
          nav={nav}
        />
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <Slider
                items={sliderItems}
              />
            </div>
            <div className='col-6 col-sm-12'>
              <H1
                text={title}
              />
              <i className="fab fa-500px" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
