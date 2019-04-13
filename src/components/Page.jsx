import React from 'react';
import { Container } from 'reactstrap';

import Footer from './Footer';

const Page = () => {
  return (
    <>
      <Container className="my-3" style={{ minHeight: '30vh' }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate et nulla non, tempore a
        molestias nesciunt velit. Nobis quibusdam ipsam deserunt vero at ex eos eveniet. Rerum
        similique illo doloribus?
      </Container>
      <Footer />
    </>
  );
};

export default Page;
