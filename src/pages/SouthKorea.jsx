import React from 'react'
import { Section, LinkedImage, Image, BackButton } from '../components/PageLayout'

import header from '../images/south-korea/00.jpg'
import one from '../images/south-korea/01.jpg'
import two from '../images/south-korea/02.jpg'
import three from '../images/south-korea/03.jpg'
import four from '../images/south-korea/04.jpg'
import five from '../images/south-korea/05.jpg'

export default () => {
  return (
    <div>
      <Image src={header} />
      <Section>
        <LinkedImage src={one} horizontal/>
        <LinkedImage src={two} horizontal />
      </Section>
      <Section>
        <LinkedImage src={three} />
      </Section>
      <Section>
        <LinkedImage src={four} />
      </Section>
      <Section>
        <LinkedImage src={five} />
      </Section>
      <Section>
        <BackButton />
      </Section>
    </div>
  )
}