import * as React from "react"
import NavBar from '../components/navbar'
import HomeContent from'../components/homecontent'
import Contact from'../components/Contact'
import DisplayBanner from '../components/displaybanner'
import WhyUseUs from'../components/whyuseus'
import ServicesPreview from'../components/ServicesPreview'
import "fontsource-raleway"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import '../styles/index.css'

import favicon from '../images/favicon.ico'
import Helmet from 'react-helmet'


const IndexPage = () => {
  return (
    <div>
      <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
      <NavBar />
      <HomeContent />
      <DisplayBanner />
      <WhyUseUs />
      <ServicesPreview />
      <Contact />

    </div>
  )
}

export default IndexPage