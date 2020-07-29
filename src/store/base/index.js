import { action, isObservable } from "mobx";

export default class Base {

  @action update(object) {
    Object.keys(object).forEach((key) => {
      if (isObservable(this[key])) {
        this[key] = object[key];
      } else { // 不是可观察的值不能修改
        console.error(key + '--- is not observable key')
      }
    })
  }

}
