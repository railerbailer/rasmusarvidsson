import _ from 'lodash'
import React, { Component } from 'react'
import { Grid, Header, Image, Rail, Segment, Sticky } from 'semantic-ui-react'

const Placeholder = () => <Image src='http://placehold.it/1000x500' />

export default class StickyExamplePushing extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state

    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <div ref={this.handleContextRef}>
            <Segment>
              {_.times(10, i => <Placeholder key={i} />)}

              <Rail position='left'>
                <Sticky context={contextRef} pushing>
                  <Header as='h3'>Stuck Content</Header>
                  <Image src='http://placehold.it/1000x500' />
                </Sticky>
              </Rail>

              <Rail position='right'>
                {_.times(3, i => <Placeholder key={i} />)}

                <Sticky context={contextRef} pushing>
                  <Header as='h3'>Stuck Content</Header>
                  <Image src='http://placehold.it/1000x500' />
                </Sticky>
              </Rail>
            </Segment>
          </div>
        </Grid.Column>
      </Grid>
    )
  }
}
