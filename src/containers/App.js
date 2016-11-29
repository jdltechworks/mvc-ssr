import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../common/sidebar';
import Header from '../common/header';
import Footer from '../common/footer';
import * as AuthActions from '../redux/actions/Auth';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

@connect((state) => {
  return {
    auth: state.Auth
  };
}, dispatch => bindActionCreators(AuthActions, dispatch))

export default class App extends Component {
  componentDidMount() {
    document.getElementById('container').classList.remove('container-open');
  }
  render() {
    let { props } = this;
    let { auth: { isLoggedIn }, children } = props;
    return (
      <MainContainer {...props}>
        <Sidebar {...props} />
        <Header {...props} />
        <div id='body'>
          <Grid>
            <Row>
              <Col xs={12}>
                { children }
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </MainContainer>
    );
  }
};