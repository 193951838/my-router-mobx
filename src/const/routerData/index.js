import React, { lazy, Suspense } from 'react';
import Loadable from 'react-loadable';
// import store from 'store';

// const loading = (err) => {

//   if (err.error) {
//     console.error(err.error);
//   }

//   return (
//     <div>111</div>
//   );
// };

const lazyComponents = (path, modeName) => {
  let loaderOption = {
    com: () => import(`pages/${path}`),
  };
  if (modeName) {
    loaderOption.store = () => import(`pages/${path}/mode`);
  }

  return Loadable.Map({
    loader: loaderOption,
    loading: () => '加载中',
    render: (loader, props) => {
      let newProps = Object.assign({}, props);
      if (loader.store) {
        const Mode = loader.store.default;
        newProps[modeName] = new Mode();
      }

      const Com = loader.com.default;
      //  console.log()
      return <Com {...newProps} />;
    },
  });
};

const routerData = [
  {
    path: '/',
    key: 'test',
    label: '测试',
    exact: true,
    component: lazyComponents('test'),
  },
  {
    path: '/home',
    label: '主页',
    key: 'home',
    component: lazyComponents('home', 'homeMode'),
  },
];

export default routerData;
