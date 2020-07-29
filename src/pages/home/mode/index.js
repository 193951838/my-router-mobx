import Base from 'store/base';
import { observable, action } from 'mobx'

export default class HomeMode extends Base {
  staticValue = 1;
@observable test = "初始值";
obj = { };


@action updateValue() {
  this.staticValue = 2;
  this.test = "第一次修改";
  console.log('isObservable(obj)', isObservable(this.obj))
  this.update({
    obj: { name: "测试" }
  })

}
}