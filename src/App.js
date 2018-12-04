import React from 'react'
import { Button, Grid, Header, List, Segment, Menu, Comment, Form, Divider, Item, Image } from 'semantic-ui-react'

import { CustomMessage, Navbar, Search, Conversation, AryaApp } from 'components'
import 'styling/semantic.less'
var $ = require ('jquery')
const leftItems = [

]
const rightItems = [
  {
    as: 'a',
    content: '@somerandomguy',
    href: 'https://github.com/swap357',
    icon: 'github',
    key: 'github',
    target: '_blank',
  },

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

    var params = {"query": query};
    $.get('https://1byrumjdl9.execute-api.us-west-1.amazonaws.com/default/aryaController?query='+query)
      .then((response) => this.setState({
        answer: response.answer
      }));
  }

  Apphandler(userLatestMessage){
      this.setState({
        userQuery: userLatestMessage.text
      })
      this.ShortAnswers(userLatestMessage.text);

  }


  render() {
    const { userQuery } = this.state
    var { query } = ""
    if(this.state.userQuery) query = "query: "+this.state.userQuery;
    
    const dataItems = [

      {
        type: 'Card',
        props: {
          subItems: [
            {
              type: 'p',
              props: {
                subItems: []
              },
              content: query
            },
            {
              type: Header,
              props: {
                subItems: [],
                as: 'h1'
              },
              content: this.state.answer
            }
          ]
        }
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
