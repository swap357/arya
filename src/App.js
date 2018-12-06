import React from 'react'
import { Button, Grid, Header, List, Segment, Menu, Comment, Form, Divider, Item, Image } from 'semantic-ui-react'

import { CustomMessage, Navbar, Search, Conversation, AryaApp } from 'components'
import 'styling/semantic.less'

const $ = require('jquery');
const leftItems = [
];

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

const nextLine = React.createElement('br');

class App extends React.Component{
  constructor(props){
    super(props);

    this.Apphandler = this.Apphandler.bind(this);
    this.Controller = this.Controller.bind(this);
    this.state = {
      userQuery: "",
      answer: "",
      interface: "",
      app: "Arya"
    }
  }

  Controller(query) {
      let controller_url = 'https://1byrumjdl9.execute-api.us-west-1.amazonaws.com/default/aryaControllerv2?query='+query+'&app='+this.state.app;

      $.get(controller_url)
      .then((response) => this.setState({
        answer: response.message,
        app: response.app,
        interface: response.interface
      }));
      }

  Apphandler(userLatestMessage){
      this.setState({
        userQuery: userLatestMessage.text
      });
      this.Controller(userLatestMessage.text);
  }

  render() {

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
              content: this.state.userQuery
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
    ];

    return(
      <>
      <Navbar leftItems={leftItems} rightItems={rightItems} borderless={true} >
        <Grid className="main-grid">
          <Grid.Column computer={5} mobile={16}>
            <Conversation apphandler={this.Apphandler} />
          </Grid.Column>
          <Grid.Column computer={10} mobile={16}>
            <AryaApp title={this.state.app} data={dataItems} apphandler={this.Apphandler}/>
          </Grid.Column>
        </Grid>
      </Navbar>
    </>
    )
  }
}

export default App
