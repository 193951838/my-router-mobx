import React from 'react';

export default class Layout extends React.Component{

  render() {

    console.log('this.props-----test', this.props)
    return (
      <div>
        {this.props.children}
      </div>
    )
  }

}