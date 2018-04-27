import React from 'react'
import { Section, LinkedImage, Image, BackButton } from '../components/PageLayout'

import header from '../images/japan/00.jpg'
import one from '../images/japan/01.jpg'
import two from '../images/japan/02.jpg'
import three from '../images/japan/03.jpg'
import four from '../images/japan/04.jpg'
import five from '../images/japan/05.jpg'
import six from '../images/japan/06.jpg'
import seven from '../images/japan/07.jpg'

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
        <LinkedImage src={six} horizontal />
        <LinkedImage src={seven} horizontal />
      </Section>
      <Section>
        <BackButton />
      </Section>
    </div>
  )
}