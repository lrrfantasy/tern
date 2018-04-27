import React from 'react'
import { Section, LinkedImage, Image, BackButton } from '../components/PageLayout'

import header from '../images/mauritius/00.jpg'
import one from '../images/mauritius/01.jpg'
import two from '../images/mauritius/02.jpg'
import three from '../images/mauritius/03.jpg'
import four from '../images/mauritius/04.jpg'
import five from '../images/mauritius/05.jpg'
import six from '../images/mauritius/06.jpg'
import seven from '../images/mauritius/07.jpg'
import eight from '../images/mauritius/08.jpg'
import nine from '../images/mauritius/09.jpg'

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
        <LinkedImage src={nine} />
      </Section>
      <Section>
        <BackButton />
      </Section>
    </div>
  )
}