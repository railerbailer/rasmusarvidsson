import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonSocial = () => (
  <div>
    <Button color='facebook' style={{marginRight: 50}}>
      <Icon name='facebook' /> Facebook
    </Button>
    
    <Button color='google plus' style={{marginRight: 25, marginLeft: 25}}>
      <Icon name='google plus' /> Google Plus
    </Button>
   <a href="https://www.linkedin.com/in/rasmus-arvidsson/">
    <Button color='linkedin' style={{marginLeft: 50}}>
      <Icon name='linkedin' /> LinkedIn
    </Button>
    </a>
  </div>
)

export default ButtonSocial;