import React, { Component } from 'react';
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import Link from 'next/link';

class DesktopContainer extends Component {
  
  render() {
    const { children } = this.props;
    const { getWidth } = this.props;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            color="blue"
            textAlign="center"
            style={{ minHeight: 80, padding: '1em 0em' }}
            vertical
          >
            <Menu
              inverted
              fixed
              pointing
              secondary
              size="large"
            >
              <Container>
                <Menu.Item active>
                  <Link href="/index" as="/">
                    <a>Home</a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/content" as="/content">
                    <a>Content</a>
                  </Link>
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" color="blue">Sign in</Button>
                  <Button as="a" style={{ marginLeft: '0.5em' }}>Sign up</Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

export default DesktopContainer;
