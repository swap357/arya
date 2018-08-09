import React from 'react'
import { Button, Grid, Header, List, Segment, Menu, Comment, Form, Divider, Item } from 'semantic-ui-react'

import { CustomMessage, Navbar, Search, Conversation, AryaApp } from 'components'
import 'styling/semantic.less'
var $ = require ('jquery')
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

const dataItems = [
  {
    type: 'p',
    props: {
    },
    content: "Ada"
  },
  {
    type: Header,
    props: {
      as: 'h1'
    },
    content: '94° F'
  }
]
const appTitle = "ShortAnswers";
const nextLine = React.createElement('br');



class App extends React.Component{
  constructor(props){
    super(props)

    this.Apphandler = this.Apphandler.bind(this)
    this.ShortAnswers = this.ShortAnswers.bind(this)
    this.state = {
      userQuery: "",
      answer: "",
    }
  }

  ShortAnswers(query) {
    var params = { appid: "G3YUE2-2KH8U3U3E6", i: query};
    $.getJSON('http://api.wolframalpha.com/v1/result?callback=?',params)
      .then(({ results }) => this.setState({ answer: results }));
  }

  Apphandler(userLatestMessage){
      this.setState({
        userQuery: userLatestMessage
      })
      this.ShortAnswers(userLatestMessage);
      console.log(userLatestMessage);
  }

  render() {
    const { userQuery } = this.state

    const dataItems = [
      {
        type: 'p',
        props: {
        },
        content: this.state.userQuery.text
      },
      {
        type: Header,
        props: {
          as: 'h1'
        },
        content: this.state.answer
      }
    ]

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
