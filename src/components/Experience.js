import { Accordion } from 'semantic-ui-react'
import React from 'react'

const level1Panels = [
  { title: 'Level 1A', content: 'Level 1A Contents' },
  { title: 'Level 1B', content: 'Level 1B Contents' },
]

const Level1Content = (
  <div>
    Welcome to level 1
    <Accordion.Accordion panels={level1Panels} />
  </div>
)

const level2Panels = [
  { title: 'Level 2A', content: 'Level 2A Contents' },
  { title: 'Level 2B', content: 'Level 2B Contents' },
]

const level3Panels = [
  { title: 'Level 3A', content: 'Level 3A Contents' },
  { title: 'Level 3B', content: 'Level 3B Contents' },
]
const level4Panels = [
  { title: 'Level 4A', content: 'Level 4A Contents' },
  { title: 'Level 4B', content: 'Level 4B Contents' },
]

const Level2Content = (
  <div>
    Welcome to level 2
    <Accordion.Accordion panels={level2Panels} />
  </div>
)
const Level3Content = (
  <div>
    Welcome to level 3
    <Accordion.Accordion panels={level3Panels} />
  </div>
)
const Level4Content = (
  <div>
    Welcome to level 4
    <Accordion.Accordion panels={level4Panels} />
  </div>
)

const rootPanels = [
  { title: 'Work Experience', content: { content: Level1Content, key: 'content-1' } },
  { title: 'Education', content: { content: Level2Content, key: 'content-2' } },
  { title: 'Skills', content: { content: Level3Content, key: 'content-3' } },
  { title: 'Languages', content: { content: Level4Content, key: 'content-4' } },
]

const AccordionExampleNested = () => (
  <Accordion defaultActiveIndex={0} panels={rootPanels} styled fluid />
)

export default AccordionExampleNested
