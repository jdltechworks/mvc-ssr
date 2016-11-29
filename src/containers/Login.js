import React, { Component } from 'react';
import { reduxForm, Fields } from 'redux-form';
import renderLoginFields from '../redux/forms/components/Auth';
import { AuthFields as fieldConfig } from '../redux/forms/fields/Auth';
import { connect } from 'react-redux';
import map from 'lodash/map';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../redux/actions/Auth';
import { 
  Button, 
  Container, 
  ControlLabel, 
  Checkbox, 
  Icon, 
  Form, 
  FormGroup, 
  FormControl, 
  Grid, 
  Row, 
  Col, 
  MainContainer 
} from '@sketchpixy/rubix';


/**
 * Validate login fields
 */

const validate = (values) => {
  let errors = {};
  map(fieldConfig, (type, field) => {
    let { required } = type;
    if(required && !values[field]) {
      errors[field] = `${field} is required`;
    }
  });
  return errors;
};


/**
 * Decorate login form with reduxForm
 * @type {String}
 */

@reduxForm({
  form: 'login',
  validate
})

@connect((state) => {
  return {
    auth: state.Auth
  }
}, dispatch => bindActionCreators(AuthActions, dispatch))

export default class Login extends Component {
  render() {
    let { props } = this;
    let { handleSubmit, Authenticate } = props; 
    return(
      <Row>
        <Grid>
          <Col sm={12} md={4} mdPush={4}>
            <Col sm={12} md={8} mdPush={2} className="auth">
              <Row className="auth-header">
                <Col md={2} className="icon-login">
                  <Row>
                    <Icon bundle="fontello" glyph="user-1" />
                  </Row>
                </Col>
                <Col md={10} className="icon-spacer">
                  <p>Login to your account </p>
                </Col>
              </Row>
              <form onSubmit={handleSubmit((props) => {
                console.log(props);
                Authenticate(props);
                document.getElementById('container').classList.add('logged-in');
              })}>
              <Fields names={['email', 'password', 'rememberme']} component={renderLoginFields} />
              <FormGroup className="clearfix">
                <Col sm={12} className="text-right">
                  <Row>
                    <button className="btn-outlined btn btn-danger">Submit</button>
                  </Row>
                </Col>
              </FormGroup>
              </form>
              <div className="text-center clearfix">
                <a href="#">Forgot password?</a>
              </div>
            </Col>
          </Col>
        </Grid>
      </Row>
    );
  }
}