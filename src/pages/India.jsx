import React from 'react'
import { Section, LinkedImage, Image, BackButton } from '../components/PageLayout'

import header from '../images/india/00.jpg'
import one from '../images/india/01.jpg'
import two from '../images/india/02.jpg'
import three from '../images/india/03.jpg'
import four from '../images/india/04.jpg'

export default () => {
  return (
    <div>
      <Image src={header} />
      <Section>
        <LinkedImage src={one} horizontal />
        <LinkedImage src={two} horizontal />
      </Section>
      <Section>
        <LinkedImage src={three} horizontal />
        <LinkedImage src={four} horizontal />
      </Section>
      <Section>
        <BackButton />
      </Section>
    </div>
  )
}