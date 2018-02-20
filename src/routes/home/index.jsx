//  @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../../components/Logo';

export class Home extends Component<Props> {
  render() {
    const { caption } = this.props;
    return (
      <>
				<Logo />
        <h1>{caption}</h1>
      </>
    );
  }
}

export default connect(state => ({
  caption: state.data.caption
}))(Home);
