import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Row, Col, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as shortid from 'shortid';

const marketPlaceLinks = [
  { linkName: 'Find Office Space', linkHref: shortid.generate() },
  { linkName: 'Find Industrial Space', linkHref: shortid.generate() },
  { linkName: 'Find a Business', linkHref: shortid.generate() },
];
const neighborgoodLinks = [
  { linkName: 'Downtown', linkHref: shortid.generate() },
  { linkName: 'Chinatown', linkHref: shortid.generate() },
  { linkName: 'Dupont Circle', linkHref: shortid.generate() },
];
const cityLinks = [
  { linkName: 'Washington, DC', linkHref: shortid.generate() },
  { linkName: 'Arlington, VA', linkHref: shortid.generate() },
  { linkName: 'Baltimore, MD', linkHref: shortid.generate() },
];
const aboutUsLinks = [
  { linkName: 'Company Info', linkHref: shortid.generate() },
  { linkName: 'Mobile Apps', linkHref: shortid.generate() },
  { linkName: 'Contact Us', linkHref: shortid.generate() },
];

const LinkList = ({ title = 'Links', links = [] }) => {
  if (!Array.isArray(links)) throw new Error();
  return (
    <div className="px-3">
      <h5
        className="font-weight-bold text-uppercase"
        style={{ padding: '8px 0', fontSize: '14px' }}
      >
        {title}
      </h5>
      <Nav vertical>
        {links.map(({ linkName, linkHref }, i) => (
          <NavItem key={i}>
            <NavLink
              tag={RouterNavLink}
              to={linkHref}
              style={{ padding: '8px 0', fontSize: '14px' }}
            >
              {linkName}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
};

const LinkListColapsible = ({ title = 'Links', links = [] }) => {
  if (!Array.isArray(links)) throw new Error();
  const [isOpen, updateIsOpen] = React.useState(false);
  const toggle = () => updateIsOpen(prev => !prev);

  return (
    <>
      <div
        className="font-weight-bold text-uppercase px-3 clearfix"
        style={{
          fontSize: '14px',
          height: '52px',
          lineHeight: '52px',
          backgroundColor: '#64666a',
          borderBottom: '1px solid #777',
        }}
        onClick={toggle}
      >
        {title}
        <span style={{ color: '#e66501' }} className="float-right">
          {isOpen ? (
            <FontAwesomeIcon icon={['fas', 'minus']} fixedWidth={true} />
          ) : (
            <FontAwesomeIcon icon={['fas', 'plus']} fixedWidth={true} />
          )}
        </span>
      </div>
      <Collapse isOpen={isOpen}>
        <Nav vertical style={{ backgroundColor: '#74767a' }} className="px-3 my-3">
          {links.map(({ linkName, linkHref }) => (
            <NavItem key={linkName}>
              <NavLink href={linkHref} style={{ padding: '8px 0', fontSize: '14px' }}>
                {linkName}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </>
  );
};

// for mobile devices
export const LinkListCollapsibles = () => {
  return (
    <>
      <LinkListColapsible title="The Marketplace" links={marketPlaceLinks} />
      <LinkListColapsible title="Neighborhoods" links={neighborgoodLinks} />
      <LinkListColapsible title="Cities" links={cityLinks} />
      <LinkListColapsible title="About Us" links={aboutUsLinks} />
    </>
  );
};

// for larger devices
export const LinkListColumns = () => {
  return (
    <Row className="py-4">
      <Col className="col-md-3 mx-auto">
        <LinkList title="The Marketplace" links={marketPlaceLinks} />
      </Col>
      <Col className="col-md-3 mx-auto">
        <LinkList title="Neighborhoods" links={neighborgoodLinks} />
      </Col>
      <Col className="col-md-3 mx-auto">
        <LinkList title="Cities" links={cityLinks} />
      </Col>
      <Col className="col-md-3 mx-auto">
        <LinkList title="About Us" links={aboutUsLinks} />
      </Col>
    </Row>
  );
};
