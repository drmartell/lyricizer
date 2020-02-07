import React, { Component } from 'react';


export default class ErrorBoundary extends Component {

  state = {
    error: null,
    hasError: false
  }

  componentDidCatch(error) {
    this.setState({ error, hasError: true });
  }

  render() {
    if(this.state.hasError) {
      return (
        <img src='https://avatars0.githubusercontent.com/u/49651717?s=400&v=4' />
      );}
    return this.props;
  }
}
