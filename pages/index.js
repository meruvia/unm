import React from 'react';
import {
  Header,
  Segment
} from 'semantic-ui-react';
import ResponsiveContainer from '../components/containers/ResponsiveContainer';

const Homepage = () => (
  <ResponsiveContainer>
    <Segment style={{ height: 700 }}>
      <Header>Example home page!</Header>
    </Segment>
  </ResponsiveContainer>
);

export default function Main() {
  return (
    <Homepage />
  );
}
