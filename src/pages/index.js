import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import Figure from "../components/Figure"
import { H1, P } from "../components/VerticalRhythm"
import img01_4x1 from "../images/1920/4x1/01.jpg"
import img01_21x9 from "../images/1440/21x9/01.jpg"
import img01_16x9 from "../images/1200/16x9/01.jpg"
import img01_3x2 from "../images/0800/3x2/01.jpg"
import img01_4x3 from "../images/0480/4x3/01.jpg"
import breakpoints from "../theme/breakpoints"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`appdevelopment`, `cbs`, `react`]} />
    <Figure caption="Photo from pexels.com">
      <picture>
        <source srcSet={img01_4x1} media={`(min-width: ${breakpoints.xl})`} />
        <source srcSet={img01_21x9} media={`(min-width: ${breakpoints.lg})`} />
        <source srcSet={img01_16x9} media={`(min-width: ${breakpoints.md})`} />
        <source srcSet={img01_3x2} media={`(min-width: ${breakpoints.sm})`} />
        <img src={img01_4x3} alt="Cologne" />
      </picture>
    </Figure>
    <Section>
      <H1>Hi students, digital marketeers and potential founders!</H1>
      <P>Welcome to this new website template from AppDevelopment@CBS.</P>
      <P>
        Websites are the basis and anchor for any successful marketing strategy.
        Read more about it in the blog post:{" "}
        <Link to="blog/importance-of-websites/">
          The Importance of Websites
        </Link>
        .
      </P>
      <P>
        This template is responsive. It teaches you design with fonts and images
        as well as aspects of SEO. The template comes with the latest JavaScript
        technologies: React, Gatsby, Styled Components, GraphQL and CSS layouts.
        Of course, you can also use icons, e.g.{" "}
        <FontAwesomeIcon icon="coffee" />, <FontAwesomeIcon icon="yin-yang" />,{" "}
        <FontAwesomeIcon icon="peace" />.
      </P>
      <P>Now you have the basis to build something great.</P>
      <P>Have fun with it!</P>
    </Section>
  </Layout>
)

export default IndexPage
