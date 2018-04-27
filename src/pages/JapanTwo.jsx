import React from 'react'
import { Section, LinkedImage, Image, BackButton } from '../components/PageLayout'

import header from '../images/japan-two/00.jpg'
import one from '../images/japan-two/01.jpg'
import two from '../images/japan-two/02.jpg'
import three from '../images/japan-two/03.jpg'
import four from '../images/japan-two/04.jpg'
import five from '../images/japan-two/05.jpg'
import six from '../images/japan-two/06.jpg'
import seven from '../images/japan-two/07.jpg'
import eight from '../images/japan-two/08.jpg'
import nine from '../images/japan-two/09.jpg'
import ten from '../images/japan-two/10.jpg'
import eleven from '../images/japan-two/11.jpg'
import twelve from '../images/japan-two/12.jpg'
import thirteen from '../images/japan-two/13.jpg'
import fourteen from '../images/japan-two/14.jpg'
import fifteen from '../images/japan-two/15.jpg'

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
        <LinkedImage src={ten} horizontal />
        <LinkedImage src={eleven} horizontal />
      </Section>
      <Section>
        <LinkedImage src={twelve} />
      </Section>
      <Section>
        <LinkedImage src={thirteen} horizontal />
        <LinkedImage src={fourteen} horizontal />
      </Section>
      <Section>
        <LinkedImage src={fifteen} />
      </Section>
      <Section>
        <BackButton />
      </Section>
    </div>
  )
}