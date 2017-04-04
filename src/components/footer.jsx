import React from 'react'
import { Grid, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap'
import socials from './../data/socials.json'

import './../assets/footer.css'

const SocialLink = ({url, overlay, icon}) => (
  <Col xs={2} sm={1}>
    <OverlayTrigger placement="top" overlay={<Tooltip id={icon}>{overlay}</Tooltip>}>
      <a href={url}><i className={`icon ion-${icon}`}></i></a>
    </OverlayTrigger>
  </Col>
)

const BuildLink = ({url, src, alt}) => (
  <Col xs={4} sm={6}>
    <a href="https://travis-ci.org/ndufreche/the.12.gy"><img alt="tarvis-ci build status badge" src="https://travis-ci.org/ndufreche/the.12.gy.svg?branch=master" /></a>
  </Col>
)

const Footer = () => (
  <footer className="footer">
    <Grid>
      <Row className="social-icons">
        {socials.map((social, key) => (<SocialLink key={key} {...social} />))}

        <Col xs={12} sm={4} smOffset={2}>
          <Row className="social-icons">
            {
              [
                {
                  url: 'https://travis-ci.org/ndufreche/the.12.gy',
                  src: 'https://travis-ci.org/ndufreche/the.12.gy.svg?branch=master',
                  alt: 'tarvis-ci build status badge'
                },
                {
                  url: 'https://codeclimate.com/github/ndufreche/the.12.gy',
                  src: 'https://codeclimate.com/github/ndufreche/the.12.gy/badges/gpa.svg',
                  alt: 'tcode climate badge'
                }
              ].map((build, key) => (<BuildLink key={key} {...build} />))
            }
          </Row>
        </Col>
      </Row>
    </Grid>
  </footer>
)

export default Footer
