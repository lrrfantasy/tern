import React from 'react'
import { Section, LinkedImage, Image, BackButton } from '../components/PageLayout'

import header from '../images/philippines/00.jpg'
import one from '../images/philippines/01.jpg'
import two from '../images/philippines/02.jpg'
import three from '../images/philippines/03.jpg'
import four from '../images/philippines/04.jpg'
import five from '../images/philippines/05.jpg'
import six from '../images/philippines/06.jpg'
import seven from '../images/philippines/07.jpg'
import eight from '../images/philippines/08.jpg'
import nine from '../images/philippines/09.jpg'
import ten from '../images/philippines/10.jpg'
import eleven from '../images/philippines/11.jpg'

export default () => {
  return (
    <div>
      <Image src={header} />
      <Section>
        <LinkedImage src={one} />
      </Section>
      <Section>
        <LinkedImage src={two} />
      </Section>
      <Section>
        <LinkedImage src={three} horizontal/>
        <LinkedImage src={four} horizontal/>
      </Section>
      <Section>
        <LinkedImage src={five} horizontal />
        <LinkedImage src={six} horizontal/>
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
        <LinkedImage src={eleven} />
      </Section>
      <Section>
        <BackButton />
      </Section>
    </div>
  )
}