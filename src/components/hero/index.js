import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Typography from '@material-ui/core/Typography'
import Img from "gatsby-image"
import HeroStyles from "./hero.module.css"

const Hero = () => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "slider-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return (
    <div className={HeroStyles.root}>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    <div className={HeroStyles.textBlock}>
    <Typography variant="h1">
        some text
    </Typography>
      <Typography>
        some small text
    </Typography>
    </div>
    </div>
  )
}

export default Hero

