import React from 'react'
import { Button, Grid, Header, List, Segment, Menu, Comment, Form, Divider } from 'semantic-ui-react'

import { CustomMessage, Navbar, Search, Conversation } from 'components'
import 'styling/semantic.less'

const leftItems = [

]
const rightItems = [
  {
    as: 'a',
    content: '@swap357',
    href: 'https://github.com/swap357',
    icon: 'github',
    key: 'github',
    target: '_blank',
  },

]

const App = () => (
  <>
  <Navbar leftItems={leftItems} rightItems={rightItems} borderless={true} >
    <Grid className="main-grid">
      <Grid.Column computer={5} mobile={16}>
        <Conversation />
      </Grid.Column>
      <Grid.Column computer={10} mobile={16}>
        <Segment inverted={false} color='grey' size='big' className='app-container'>
          <Header as='h1'>
            Weather App<Divider/>
          </Header>

          <Header as='h3'>
            Sacramento, CA
          </Header>
          <p>Monday 3:00 PM<br/>
          Partly Cloudy
          </p>
          <Header as='h1'>
            94° F
          </Header>
        </Segment>
      </Grid.Column>
    </Grid>
  </Navbar>
</>
)

export default App
