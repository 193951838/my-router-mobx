import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';

// @inject('homeMode')
@observer
class Home extends React.Component {
  render() {
    console.log('this.props-----home', this.props);

    return (
      <div>
        测试Layout----1234654564 bt
        <Link to="/">跳转测试</Link>
        {/* {store.obj.name} */}
        {/* store.updateValue() */}
        <button onClick={() => {}}></button>
      </div>
    );
  }
}

export default Home;
