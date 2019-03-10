import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Page">GSoC 2018 at Debian | ChapterLead NullBhopal</Header>
    <Container center={center}>
        <p>
          Hello there, I’m Deepanshu, a Security Enthusiast and open source contributer.
          Currently now I am a 4th year student and actively looking for oppturnities
        </p>  
        <p align="left">
          Email : gajbhiye.deepanshu[@]gmail[dot]com
        </p>
        <p align="left">
          twitter : <a href="https://twitter.com/deep0x00">https://twitter.com/deep0x00.</a>
        </p>
        <p align="left">
          Linkedin : <a href="https://www.linkedin.com/in/deepanshu-gajbhiye">https://www.linkedin.com/deepanshu-gajbhiye</a>
        </p>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
