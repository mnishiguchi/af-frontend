import React from 'react';
import { Container } from 'reactstrap';

import styles from './Home.module.scss';
import { withFooter } from './Footer';

const Home = () => {
  return (
    <>
      <Container fluid className={styles.headerContainer}>
        <h1 className={styles.headerText}>Find Great Apartments.</h1>
      </Container>
      <Container className={styles.bodyContainer}>
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
