import React from 'react';
import { Checkbox, Icon, Form, FormGroup, FormControl, Grid, Row, Col } from '@sketchpixy/rubix';
import omit from 'lodash/omit';
import map from 'lodash/map';
import capitalize from 'lodash/capitalize';
import eq from 'lodash/eq';


/**
 * Login component to be rendered from redux form config in the login
 * @return {React Component} A React component
 */

const renderLoginFields = (field) => {
  let _fields = omit(field, 'names');
  return(
    <Row>
      <Col sm={12}>
      {map(_fields, (fld, key) => {
        let { input, meta: { touched, error } } = fld;
        let { name } = input;
        if(!eq(name, 'rememberme')) {
          return (
            <FormGroup key={key} className="clearfix" style={ eq(name, 'password') ? { margin: '0' } : null } validationState={ touched && error ? 'error' : null }>
              <Col sm={12}>
                <Row>
                  <FormControl {...input} type={name} placeholder={capitalize(name)} />
                  { touched && error ? <FormControl.Feedback style={ { right: '0' } }/> : null }
                </Row>
              </Col>
            </FormGroup>
          );
        } else {
          return(
           <FormGroup className="clearfix" key={key}>
              <Col sm={12}>
                <Row>
                  <Checkbox {...input}>Remember me</Checkbox>
                </Row>
              </Col>
           </FormGroup>         
          );
        }
      })}
      </Col>
    </Row>
  );
}

export default renderLoginFields;