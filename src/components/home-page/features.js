import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "../container"

/*
 * This component will need to use a static query to get the features from graphQL.
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const HomePageFeatures = () => {
  return (
    <div>
      <Container>home page features here</Container>
    </div>
  )
}

export default HomePageFeatures
