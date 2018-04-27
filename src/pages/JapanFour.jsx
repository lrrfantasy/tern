import React from 'react'
import { Section, LinkedImage, Image, BackButton } from '../components/PageLayout'

import header from '../images/japan-four/00.jpg'
import one from '../images/japan-four/01.jpg'
import two from '../images/japan-four/02.jpg'
import three from '../images/japan-four/03.jpg'
import four from '../images/japan-four/04.jpg'
import five from '../images/japan-four/05.jpg'
import six from '../images/japan-four/06.jpg'
import seven from '../images/japan-four/07.jpg'
import eight from '../images/japan-four/08.jpg'
import nine from '../images/japan-four/09.jpg'
import ten from '../images/japan-four/10.jpg'
import eleven from '../images/japan-four/11.jpg'
import twelve from '../images/japan-four/12.jpg'

export default () => {
  return (
    <div>
      <Image src={header} />
      <Section>
        <LinkedImage src={one} horizontal />
        <LinkedImage src={two} horizontal />
      </Section>
      <Section>
        <LinkedImage src={three} />
      </Section>
      <Section>
        <LinkedImage src={four} />
      </Section>
      <Section>
        <LinkedImage src={five} horizontal />
        <LinkedImage src={six} horizontal />
      </Section>
      <Section>
        <LinkedImage src={seven} />
      </Section>
      <Section>
        <LinkedImage src={eight} />
      </Section>
      <Section>
        <LinkedImage src={nine} horizontal />
        <LinkedImage src={ten} horizontal />
      </Section>
      <Section>
        <LinkedImage src={eleven} />
      </Section>
      <Section>
        <LinkedImage src={twelve} />
      </Section>
      <Section>
        <BackButton />
      </Section>
    </div>
  )
}