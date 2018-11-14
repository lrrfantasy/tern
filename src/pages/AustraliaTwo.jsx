import React from 'react'
import { Section, LinkedImage, Image, BackButton } from '../components/PageLayout'

import header from '../images/australia-two/00.jpg'
import one from '../images/australia-two/01.jpg'
import two from '../images/australia-two/02.jpg'
import three from '../images/australia-two/03.jpg'
import four from '../images/australia-two/04.jpg'
import five from '../images/australia-two/05.jpg'
import six from '../images/australia-two/06.jpg'
import seven from '../images/australia-two/07.jpg'
import eight from '../images/australia-two/08.jpg'

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
      <LinkedImage src={three} horizontal />
        <LinkedImage src={four} horizontal />
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
        <BackButton />
      </Section>
    </div>
  )
}
