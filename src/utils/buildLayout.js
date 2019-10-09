import React from 'react'
import { Section, LinkedImage, Image, BackButton } from '../components/PageLayout'

const stringify = num => num < 10 ? `0${num}` : `${num}`

export const buildLayout = (id, layouts, history) => {
  const images = layouts.map(section => {
    if (section === 0) {
      return <Image src={require(`../images/${id}/${stringify(section)}.jpg`)} key={section} />
    }
    if (Array.isArray(section)) {
      return (
        <Section key={section.join('.')}>
          {
            section.map(imgIdx =>
              <LinkedImage
                src={require(`../images/${id}/${stringify(imgIdx)}.jpg`)}
                key={imgIdx}
                horizontal
              />
            )
          }
        </Section>
      )
    }
    return (
      <Section key={section}>
        <LinkedImage src={require(`../images/${id}/${stringify(section)}.jpg`)} />
      </Section>
    )
  })
  return (
    <div>
      {images}
      <Section>
        <BackButton onClick={history.goBack} />
      </Section>
    </div>
  )
}
