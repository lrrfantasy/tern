import React from 'react'
import { Section, LinkedImage, Image, BackButton } from '../components/PageLayout'

import header from '../images/japan-three/00.jpg'
import one from '../images/japan-three/01.jpg'
import two from '../images/japan-three/02.jpg'
import three from '../images/japan-three/03.jpg'
import four from '../images/japan-three/04.jpg'
import five from '../images/japan-three/05.jpg'
import six from '../images/japan-three/06.jpg'
import seven from '../images/japan-three/07.jpg'
import eight from '../images/japan-three/08.jpg'
import nine from '../images/japan-three/09.jpg'
import ten from '../images/japan-three/10.jpg'
import eleven from '../images/japan-three/11.jpg'
import twelve from '../images/japan-three/12.jpg'

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