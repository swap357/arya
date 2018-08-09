import React from 'react'
import { Button, Grid, Header, List, Segment, Menu, Comment, Form, Divider, Item } from 'semantic-ui-react'

import { CustomMessage, Navbar, Search, Conversation, AryaApp } from 'components'
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
const appTitle = "ShortAnswers";
const nextLine = React.createElement('br');

const dataItems = [
  {
    type: 'p',
    props: {
    },
    content: "Sacramento temp"
  },
  {
    type: Header,
    props: {
      as: 'h1'
    },
    content: '94° F'
  }
]

class App extends React.Component{
  constructor(props){
    super(props)

    this.Apphandler = this.Apphandler.bind(this)
  }

  Apphandler(marg){
      this.setState({})
  }

  render() {
    return(
      <>
      <Navbar leftItems={leftItems} rightItems={rightItems} borderless={true} >
        <Grid className="main-grid">
          <Grid.Column computer={5} mobile={16}>
            <Conversation apphandler={this.Apphandler} />
          </Grid.Column>
          <Grid.Column computer={10} mobile={16}>
            <AryaApp title={appTitle} data={dataItems} apphandler={this.Apphandler}/>
          </Grid.Column>
        </Grid>
      </Navbar>
    </>
    )
  }
}

export default App
