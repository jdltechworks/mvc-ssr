import React from 'react';

import {
  Sidebar, SidebarNav, SidebarNavItem,
  SidebarControls, SidebarControlBtn,
  LoremIpsum, Grid, Row, Col, FormControl,
  Label, Progress, Icon,
  SidebarDivider
} from '@sketchpixy/rubix';

import { Link, withRouter } from 'react-router';

class ApplicationSidebar extends React.Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <FormControl type='text' placeholder='Search...' className='sidebar-search' style={{border: 'none', background: 'none', margin: '10px 0 0 0', borderBottom: '1px solid #666', color: 'white'}} />
            <div className='sidebar-nav-container'>
              <SidebarNav style={{marginBottom: 0}}>
                { /** Pages Section */ }
                <div className='sidebar-header'>PAGES</div>
              </SidebarNav>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

class DummySidebar extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className='sidebar-header'>DUMMY SIDEBAR</div>
            <LoremIpsum query='1p' />
          </Col>
        </Row>
      </Grid>
    );
  }
}

@withRouter
export default class SidebarContainer extends React.Component {
  render() {
    let { props } = this;
    let { auth: { isLoggedIn } } = props; 
    if(isLoggedIn) {
      return (
        <div id='sidebar'>
          <div id='avatar'>
            <Grid>
              <Row className='fg-white'>
                <Col xs={4} collapseRight>
                  <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=40x40&w=40&h=40" style={ { borderRadius: '100%' } } width='40' height='40' />
                </Col>
                <Col xs={8} collapseLeft id='avatar-col'>
                  <div style={{top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}>JDLtechworks</div>
                  <div>
                    <Progress id='demo-progress' value={30} color='#ffffff'/>
                    <a href='#'>
                      <Icon id='demo-icon' bundle='fontello' glyph='lock-5' />
                    </a>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
          <SidebarControls>
            <SidebarControlBtn bundle='fontello' glyph='docs' sidebar={0} />
            <SidebarControlBtn bundle='fontello' glyph='chat-1' sidebar={1} />
            <SidebarControlBtn bundle='fontello' glyph='chart-pie-2' sidebar={2} />
            <SidebarControlBtn bundle='fontello' glyph='th-list-2' sidebar={3} />
            <SidebarControlBtn bundle='fontello' glyph='bell-5' sidebar={4} />
          </SidebarControls>
          <div id='sidebar-container'>
            <Sidebar sidebar={0}>
              <ApplicationSidebar />
            </Sidebar>
            <Sidebar sidebar={1}>
              <Grid>
                <Row>
                  <Col xs={12}>
                    <div className='sidebar-header'>DUMMY SIDEBAR</div>
                    <LoremIpsum query='1p' />
                  </Col>
                </Row>
              </Grid>
            </Sidebar>
          </div>
        </div>
      );
    } else {
      return(
        <div id="sidebar">
          <div id='avatar'>
            <Grid>
              <Row className='fg-white'>
                <Col xs={4} collapseRight>
                  <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=40x40&w=40&h=40" style={ { borderRadius: '100%' } } width='40' height='40' />
                </Col>
                <Col xs={8} collapseLeft id='avatar-col'>
                </Col>
              </Row>
            </Grid>
          </div>
          <div id='sidebar-container'>
          </div>
        </div>
      );
    }
  }
}
