import Reflux from 'reflux';
import Actions from '../actions';
import {
  ACTIVE_BUNDLE_CONTRACT_SUCCESS
} from '../constants/actions';

class TestStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      data: {},
      action: {
        type: '',
      },
    };
    this.listenToMany(Actions);
  }

  onTestActionCompleted(data) {
    console.log(data);
    this.setState({
      data,
      action: {
        type: ACTIVE_BUNDLE_CONTRACT_SUCCESS,
      },
    });
  }

  onTestActionFailed() {}
}

export default TestStore;
