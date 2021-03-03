import Reflux from 'reflux';

const Actions = Reflux.createActions([{
  testAction: { asyncResult: true },
}]);

Actions.testAction.listen(function() {
  new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => resolve(json))
    .catch(error => reject(error))
  })
  .then(data => this.completed(data))
  .catch(err => this.failed(err));
});

export default Actions;
