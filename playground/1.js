const { observable, autorun, runInAction } = require('mobx');

const state = observable({
  key: 'value',
});

autorun(() => {
  console.log('changed!', state.key);
});

runInAction(() => {
  state.key = Math.random().toFixed(2);
});

runInAction(() => {
  state.key = Math.random().toFixed(2);
});
