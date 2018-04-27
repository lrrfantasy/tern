import React from 'react'
import { Section, LinkedImage, Image, BackButton } from '../components/PageLayout'

import header from '../images/denmark/00.jpg'
import one from '../images/denmark/01.jpg'
import two from '../images/denmark/02.jpg'
import three from '../images/denmark/03.jpg'
import four from '../images/denmark/04.jpg'
import five from '../images/denmark/05.jpg'
import six from '../images/denmark/06.jpg'
import seven from '../images/denmark/07.jpg'
import eight from '../images/denmark/08.jpg'
import nine from '../images/denmark/09.jpg'
import ten from '../images/denmark/10.jpg'

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
        <LinkedImage src={three} />
      </Section>
      <Section>
        <LinkedImage src={four} />
      </Section>
      <Section>
        <LinkedImage src={five} />
      </Section>
      <Section>
        <LinkedImage src={six} />
      </Section>
      <Section>
        <LinkedImage src={seven} horizontal />
        <LinkedImage src={eight} horizontal />
      </Section>
      <Section>
        <LinkedImage src={nine} />
      </Section>
      <Section>
        <LinkedImage src={ten} />
      </Section>
      <Section>
        <BackButton />
      </Section>
    </div>
  )
}