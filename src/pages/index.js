import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HomePageHero from "../components/home-page/hero"
import HomePageFeatures from "../components/home-page/features"
import HomePageTryFree from "../components/home-page/try-free"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePageHero></HomePageHero>
    <HomePageFeatures></HomePageFeatures>
    <HomePageTryFree></HomePageTryFree>
  </Layout>
)

export default IndexPage
