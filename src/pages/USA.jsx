import React from 'react'
import { Section, LinkedImage, Image, BackButton } from '../components/PageLayout'

import header from '../images/usa/00.jpg'
import one from '../images/usa/01.jpg'
import two from '../images/usa/02.jpg'
import three from '../images/usa/03.jpg'
import four from '../images/usa/04.jpg'
import five from '../images/usa/05.jpg'
import six from '../images/usa/06.jpg'
import seven from '../images/usa/07.jpg'
import eight from '../images/usa/08.jpg'
import nine from '../images/usa/09.jpg'
import ten from '../images/usa/10.jpg'
import eleven from '../images/usa/11.jpg'
import twelve from '../images/usa/12.jpg'

export default () => {
  return (
    <div>
      <Image src={header} />
      <Section>
        <LinkedImage src={one} />
      </Section>
      <Section>
        <LinkedImage src={two} horizontal />
        <LinkedImage src={three} horizontal />
      </Section>
      <Section>
        <LinkedImage src={four} horizontal />
        <LinkedImage src={five} horizontal />
      </Section>
      <Section>
        <LinkedImage src={six} />
      </Section>
      <Section>
        <LinkedImage src={seven} />
      </Section>
      <Section>
        <LinkedImage src={eight} horizontal />
        <LinkedImage src={nine} horizontal />
      </Section>
      <Section>
        <LinkedImage src={ten} />
      </Section>
      <Section>
        <LinkedImage src={eleven} horizontal />
        <LinkedImage src={twelve} horizontal />
      </Section>
      <Section>
        <BackButton />
      </Section>
    </div>
  )
}