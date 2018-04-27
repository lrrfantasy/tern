import React from 'react'
import { Section, LinkedImage, Image, BackButton } from '../components/PageLayout'

import header from '../images/thailand/00.jpg'
import one from '../images/thailand/01.jpg'
import two from '../images/thailand/02.jpg'

export default () => {
  return (
    <div>
      <Image src={header} />
      <Section>
        <LinkedImage src={one} horizontal />
        <LinkedImage src={two} horizontal />
      </Section>
      <Section>
        <BackButton />
      </Section>
    </div>
  )
}