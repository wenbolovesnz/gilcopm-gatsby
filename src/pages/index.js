import * as React from "react"
import NavBar from '../components/navbar'
import HomeContent from'../components/homecontent'
import Contact from'../components/Contact'
import AppraisalForm from'../components/appraisalform'
import DisplayBanner from '../components/displaybanner'
import WhyUseUs from'../components/whyuseus'
import ServicesPreview from'../components/ServicesPreview'
import "fontsource-raleway"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import '../styles/index.css'

const IndexPage = () => {
  return (
    <div>
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