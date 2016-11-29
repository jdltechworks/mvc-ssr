import React, { Component } from 'react';

import {
  Row,
  Col,
  Icon,
  Grid,
  Nav,
  Panel,
  Image,
  Button,
  PanelBody,
  PanelHeader,
  PanelFooter,
  FormControl,
  PanelContainer,
} from '@sketchpixy/rubix';

class SocialBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      follow: 'follow me',
      followActive: false,
      likeCount: 999,
      likeActive: false,
      likeTextStyle: 'fg-white'
    };
  }
  handleFollow() {
    this.setState({
      follow: 'followed',
      followActive: true
    });
  }
  handleLike() {
    this.setState({
      likeCount: 1000,
      likeActive: true,
      likeTextStyle: 'fg-orange75'
    });
  }
  render() {
    return (
      <div style={{height: 350, marginTop: -25, backgroundImage: `url(https://dummyimage.com/1366x768/000/fff)`, backgroundSize: 'cover', position: 'relative', marginBottom: 25, backgroundPosition: 'center'}}>
        <div className='social-cover' style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
        </div>
        <div className='social-desc'>
          <div>
            <h1 className='fg-white'>Empire State, NY, USA</h1>
            <h5 className='fg-white' style={{opacity: 0.8}}>- Aug 20th, 2014</h5>
            <div style={{marginTop: 50}}>
              <div style={{display: 'inline-block'}}>
                <Button id='likeCount' retainBackground rounded bsStyle='orange75' active={this.state.likeActive} onClick={this.handleLike}>
                  <Icon glyph='icon-fontello-heart-1' />
                </Button>
                <label className='social-like-count' htmlFor='likeCount'><span className={this.state.likeTextStyle}>{this.state.likeCount} likes</span></label>
              </div>
            </div>
          </div>
        </div>
        <div className='social-avatar'>
          <Image src='/imgs/app/avatars/avatar.jpg' height='100' width='100' style={{display: 'block', borderRadius: 100, border: '2px solid #fff', margin: 'auto', marginTop: 50}} />
          <h4 className='fg-white text-center'>JDLtechworks</h4>
          <h5 className='fg-white text-center' style={{opacity: 0.8}}>DevOps Engineer, NY</h5>
          <hr className='border-black75' style={{borderWidth: 2}}/>
          <div className='text-center'>
            <Button outlined inverse retainBackground active={this.state.followActive} bsStyle='brightblue' onClick={this.handleFollow}>
              <span>{this.state.follow}</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export class UserSettings extends Component {
  render() {
    return(
      <PanelHeader style={{padding: 25, paddingTop: 12.5}}>
              
      </PanelHeader>
    );
  }
}

export default class UserProfile extends Component {
  componentDidMount() {
  }


  render() {
    return (
      <Row className='social'>
        <SocialBanner />     
        <Col xs={12}>
          <Row>
            <Col sm={6} collapseRight>
              <PanelContainer>
                <PanelBody style={{padding: 12.5}}>
                  <FormControl componentClass='textarea' rows='3' placeholder="What's on your mind?" style={{border: 'none'}} />
                </PanelBody>
                <PanelFooter className='fg-black75 bg-gray' style={{padding: '12.5px 25px'}}>
                  <Grid>
                    <Row>
                      <Col xs={6} collapseLeft collapseRight>
                        <a href='#' style={{border: 'none'}}><Icon glyph='icon-dripicons-location icon-1-and-quarter-x fg-text' style={{marginRight: 25}} /></a>
                        <a href='#' style={{border: 'none'}}><Icon glyph='icon-dripicons-camera icon-1-and-quarter-x fg-text' style={{marginRight: 25}} /></a>
                        <a href='#' style={{border: 'none'}}><Icon glyph='icon-dripicons-calendar icon-1-and-quarter-x fg-text' style={{marginRight: 25}} /></a>
                      </Col>
                      <Col xs={6} className='text-right' collapseLeft collapseRight>
                        <Button bsStyle='darkgreen45'>send</Button>
                      </Col>
                    </Row>
                  </Grid>
                </PanelFooter>
              </PanelContainer>
            </Col>
            <Col sm={6}>
              <PanelContainer>
                <UserSettings />
              </PanelContainer>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
