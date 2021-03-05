import Reflux from 'reflux';
import H1 from './atoms/H1';
import TestStore from './stores/TestStore';
import {
  ACTIVE_BUNDLE_CONTRACT_SUCCESS
} from './constants/actions';
import Actions from './actions';

class App extends Reflux.Component {
  constructor() {
    super();
    this.state = {
      title: '',
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
    const { title } = this.state;
    return (
      <div>
        <div className='row'>
          <div className='col-6 col-sm-12'>
            <H1
              text={title}
            />
            <img src="../assets/images/test.png" />
            <i className="fab fa-500px"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
