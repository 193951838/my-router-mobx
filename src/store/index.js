import { configure } from "mobx";
import Base from './base';

configure({
  enforceActions: true
})

 class Store extends Base {

   // 全局store
   
}

export default new Store()
