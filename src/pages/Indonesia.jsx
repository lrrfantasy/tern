import React from 'react'
import { Section, Image, BackButton } from '../components/PageLayout'

import header from '../images/indonesia/00.jpg'

export default () => {
  return (
    <div>
      <Image src={header} />
      <Section>
        <BackButton />
      </Section>
    </div>
  )
}