import React from 'react';
import {
  Container,
  Header,
  Segment
} from 'semantic-ui-react';
import ResponsiveContainer from '../components/containers/ResponsiveContainer';

const ContentComponent = () => (
  <Container style={{ height: 700 }}>
    <Segment vertical>
      <Container text>
        <Segment secondary>
          <Header as="h3">Lesson Content</Header>
          <ol>
            <li>Lesson content one</li>
            <li>Lesson content two</li>
            <li>Lesson content listed</li>
            <ul>
              <li>Subcontent one</li>
              <li>Subcontent two</li>
            </ul>
            <li>Lesson content three</li>
          </ol>
        </Segment>
      </Container>
    </Segment>
  </Container>
);

export default function Content() {
  return (
    <ResponsiveContainer>
      <ContentComponent />
    </ResponsiveContainer>
  );
}
