import { createContext } from 'react';
import { observable, computed, action } from 'mobx';

class Store {
  @observable page = {
    header: 'UiKit',
    body: 'Body test'
  };
  @observable amount = 1;

  @action setBody = data => {
    this.page.body = data;
    console.log(this.page.body);
  };
  @computed get total() {
    // return this.price * this.amount;
    console.log('comp', this.page.body);
    return this.price * this.amount;
  }
}
// export default new Store();
export default createContext(new Store());
