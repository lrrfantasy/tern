import React from 'react'
import { Section, LinkedImage, Image, BackButton } from '../components/PageLayout'

import header from '../images/kenya/00.jpg'
import one from '../images/kenya/01.jpg'
import two from '../images/kenya/02.jpg'
import three from '../images/kenya/03.jpg'
import four from '../images/kenya/04.jpg'
import five from '../images/kenya/05.jpg'
import six from '../images/kenya/06.jpg'
import seven from '../images/kenya/07.jpg'
import eight from '../images/kenya/08.jpg'
import nine from '../images/kenya/09.jpg'
import ten from '../images/kenya/10.jpg'
import eleven from '../images/kenya/11.jpg'
import twelve from '../images/kenya/12.jpg'
import thirteen from '../images/kenya/13.jpg'
import fourteen from '../images/kenya/14.jpg'
import fifteen from '../images/kenya/15.jpg'
import sixteen from '../images/kenya/16.jpg'

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
        <LinkedImage src={eight} horizontal />
        <LinkedImage src={nine} horizontal />
      </Section>
      <Section>
        <LinkedImage src={ten} />
      </Section>
      <Section>
        <LinkedImage src={eleven} horizontal />
        <LinkedImage src={twelve} horizontal />
      </Section>

      <Section>
        <LinkedImage src={thirteen} />
      </Section>
      <Section>
        <LinkedImage src={fourteen} horizontal />
        <LinkedImage src={fifteen} horizontal />
      </Section>
      <Section>
        <LinkedImage src={sixteen} />
      </Section>
      <Section>
        <BackButton />
      </Section>
    </div>
  )
}
