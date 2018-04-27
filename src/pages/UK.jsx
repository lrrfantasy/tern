import React from 'react'
import { Section, LinkedImage, Image, BackButton } from '../components/PageLayout'

import header from '../images/uk/00.jpg'
import one from '../images/uk/01.jpg'
import two from '../images/uk/02.jpg'
import three from '../images/uk/03.jpg'
import four from '../images/uk/04.jpg'
import five from '../images/uk/05.jpg'
import six from '../images/uk/06.jpg'
import seven from '../images/uk/07.jpg'
import eight from '../images/uk/08.jpg'
import nine from '../images/uk/09.jpg'
import ten from '../images/uk/10.jpg'
import eleven from '../images/uk/11.jpg'
import twelve from '../images/uk/12.jpg'
import thirteen from '../images/uk/13.jpg'

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
        <LinkedImage src={five} />
      </Section>
      <Section>
        <LinkedImage src={six} horizontal />
        <LinkedImage src={seven} horizontal />
      </Section>
      <Section>
        <LinkedImage src={eight} />
      </Section>
      <Section>
        <LinkedImage src={nine} />
      </Section>
      <Section>
        <LinkedImage src={ten} horizontal />
        <LinkedImage src={eleven} horizontal />
      </Section>
      <Section>
        <LinkedImage src={twelve} />
      </Section>
      <Section>
        <LinkedImage src={thirteen} />
      </Section>
      <Section>
        <BackButton />
      </Section>
    </div>
  )
}