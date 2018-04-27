import React from 'react'
import { Section, LinkedImage, Image, BackButton } from '../components/PageLayout'

import header from '../images/australia/00.jpg'
import one from '../images/australia/01.jpg'
import two from '../images/australia/02.jpg'
import three from '../images/australia/03.jpg'
import four from '../images/australia/04.jpg'
import five from '../images/australia/05.jpg'
import six from '../images/australia/06.jpg'
import seven from '../images/australia/07.jpg'
import eight from '../images/australia/08.jpg'
import nine from '../images/australia/09.jpg'

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
        <LinkedImage src={eight} horizontal />
        <LinkedImage src={nine} horizontal />
      </Section>
      <Section>
        <BackButton />
      </Section>
    </div>
  )
}