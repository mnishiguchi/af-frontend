import React from 'react';
import { Container } from 'reactstrap';

import { withFooter } from './Footer';

const Home = () => {
  return (
    <>
      <Container
        fluid
        className="text-center py-3"
        style={{ color: '#fff', backgroundColor: '#e66501' }}
      >
        <h1 className="h5">Find Great Apartments.</h1>
      </Container>
      <Container className="my-3" style={{ minHeight: '30vh' }}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate et nulla non, tempore
          a molestias nesciunt velit. Nobis quibusdam ipsam deserunt vero at ex eos eveniet. Rerum
          similique illo doloribus?
        </p>
      </Container>
    </>
  );
};

export default withFooter(Home);
