import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import Layout from '../layout';
import PostListing from '../components/PostListing/PostListing';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';

// const sizes = {
//   desktop: 992,
//   tablet: 768,
//   phone: 576
// };

// // Iterate through the sizes and create a media template
// const media = Object.keys(sizes).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (max-width: ${sizes[label] / 16}em) {
//       ${css(...args)}
//     }
//   `;

//   return acc;
// }, {});

// const Content = styled.div`
//   height: 3em;
//   width: 3em;
//   background: papayawhip;

//   /* Now we have our methods on media and can use them instead of raw queries */
//   ${media.desktop`background: dodgerblue;`}
//   ${media.tablet`background: mediumseagreen;`}
//   ${media.phone`background: palevioletred;`}
// `;

// render(<Content />);
const renderLabelType = (labelType, props) => {
  const noLabel = props => css`
    ${VisuallyHidden()};
  `;
  const attachedLabel = props => css`
    /* background-color: ${attachedLabelBackgroundColor(props)}; */
    padding-left: 0.5rem;
    padding-top: 0.2rem;
    color: white;
    border-top-left-radius: ${props.theme.fieldBorderRadius};
    border-top-right-radius: ${props.theme.fieldBorderRadius};
    border-bottom-style: none;
    /* border-color: ${attachedLabelBorderColor(props)}; */
    .is-required &::after {
      color: white;
    }
  `;
  const renderLabel = labelLocalType =>
    ({
      // users
      NONE: noLabel,
      ATTACHED: attachedLabel
    }[labelLocalType]);
  return renderLabel(labelType)(props);
};

const bgr = incomingColor => {
  const color = incomingColor;
  return css`
    background-color: ${color};
  `;
};

const bgr2 = (localInputState, localTheme) =>
  ({
    // users
    ERROR: localTheme.errorColor,
    WARNING: localTheme.warningColor,
    VALID: localTheme.validColor
  }[localInputState]);

const other = 'yellow';
const DivWrap = styled.div`
  display: flex;
  align-items: stretch;
`;
const Div1 = styled.div`
  flex-grow: 1;
  min-width: 15%;
  background-color: ${props => bgr2(props.colorBG, theme)};
`;
const Div2 = styled.div`
  flex-grow: 2;
  max-width: 600px;
`;
const Pcenter = styled.div`
  text-align: center;
`;

const theme = {
  errorColor: 'red',
  warningColor: 'orange',
  validColor: 'green'
};
class Index extends React.Component {
  render() {
    // const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <h1>(Pf) => Pure Function LLC</h1>
          <DivWrap>
            <Div1 colorBG="NOdNE" theme={theme} />
            <Div2>
              <Pcenter>_|_</Pcenter>
              <p>Pure Function focuses on developing state of the art, user driven, web applications.</p>
              <p>
                Code, we believe, should follow function. It should be accessible both by all end users as well as by
                developers. This means working closely with our clients to translate their vision into code, and doing
                so using best practices for development, testing, security and accessibility while making the code
                readable and easy to maintain.
              </p>
              <Pcenter>===</Pcenter>
              <p>We have experience in the federal space, as well as in the academic and business worlds.</p>
              <p>
                Contact us at 
                {' '}
                <a href="mailto:info@purefunction.com">maarten.ottens@purefunction.com</a>
              </p>
              <Pcenter />
            </Div2>
            <Div1 colorBG="jn" />
          </DivWrap>
          {/* <PostListing postEdges={postEdges} /> */}
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 2000, sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
