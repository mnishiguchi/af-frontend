import React from 'react';
import { Container } from 'reactstrap';

import { withFooter } from './Footer';

const NoMatch = () => {
  return (
    <Container className="my-3" style={{ minHeight: '30vh' }}>
      <h1>
        No match for <code>{window.location.pathname}</code>
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate et nulla non, tempore a
        molestias nesciunt velit. Nobis quibusdam ipsam deserunt vero at ex eos eveniet. Rerum
        similique illo doloribus?
      </p>
    </Container>
  );
};

export default withFooter(NoMatch);
