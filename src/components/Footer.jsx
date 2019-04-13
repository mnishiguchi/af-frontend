import React from 'react';
import { Badge, Container } from 'reactstrap';
import MediaQuery from 'react-media';

import equalHousingOpportunityPng from '../assets/equal-housing-opportunity.png';
import { LinkListCollapsibles, LinkListColumns } from './FooterLinkLists';

// TODO: organize CSS and constants
const Footer = () => {
  return (
    <footer style={{ color: '#fff', backgroundColor: '#74767a', padding: '0' }}>
      <Container fluid tag={'header'} className="text-center py-4 mb-3">
        <Container>
          <h5 className="h2">ApartmentFinding</h5>
          <p className="footer-copyright" style={{ fontSize: '14px' }}>
            © 2019
            <a href="#!"> ApartmentFinding</a>
          </p>

          <MediaQuery query={{ maxWidth: '767px' }}>
            {matches =>
              matches ? (
                <Badge color="primary">less than 767px wide</Badge>
              ) : (
                <Badge color="info">at least 767px wide</Badge>
              )
            }
          </MediaQuery>
        </Container>
      </Container>

      <MediaQuery query={{ maxWidth: '767px' }}>
        {matches => (matches ? <LinkListCollapsibles /> : <LinkListColumns />)}
      </MediaQuery>

      <Container fluid style={{ backgroundColor: '#64666a' }}>
        <div className="py-4" style={{ color: '#ccc' }}>
          <small>
            Information deemed reliable but not guaranteed. All measurements are approximate.
            <br />
            <img
              src={equalHousingOpportunityPng}
              alt="equal-housing-opportunity"
              height="16"
              width="16"
            />
            {` Equal Housing Opportunity`}
          </small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

export const withFooter = WrappedComponent => {
  const WithFooter = props => (
    <>
      <WrappedComponent {...props} />
      <Footer />
    </>
  );
  WithFooter.displayName = `WithFooter(${getDisplayName(WrappedComponent)})`;
  return WithFooter;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
