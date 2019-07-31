import React from 'react';
import {
  Responsive,
  Segment,
  Container,
  Grid,
  Header
} from 'semantic-ui-react';
import DesktopContainer from './DesktopContainer';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const MainFooter = () => (
  <Segment inverted vertical style={{ padding: '3em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={5}>
            <Header as="h4" inverted>Development</Header>
            <p>dev.vrodriguez@gmail.com</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

const ResponsiveContainer = ({ children }) => (
  <div>
    <Segment style={{ padding: 0, border: 0 }}>
      <DesktopContainer getWidth={getWidth}>{children}</DesktopContainer>
    </Segment>
    <Segment style={{
      padding: 0,
      border: 0
    }}
    >
      <MainFooter />
    </Segment>
  </div>
);

export default ResponsiveContainer;
