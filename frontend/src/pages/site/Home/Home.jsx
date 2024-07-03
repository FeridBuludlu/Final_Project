import React from 'react'
import Section1 from '../../../components/site/Section/Section1'
import Section2 from '../../../components/site/Section/Section2'
import Section3 from '../../../components/site/Section/Section3'
import Section4 from '../../../components/site/Section/Section4'
import Section5 from '../../../components/site/Section/Section5'
import Section6 from '../../../components/site/Section/Section6'
import Section7 from '../../../components/site/Section/Section7'
import {Helmet} from 'react-helmet'
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section7/>
      <Section6/>
    </div>
  )
}

export default Home