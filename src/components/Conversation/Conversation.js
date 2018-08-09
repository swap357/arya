import React, { Component } from 'react'
import { Responsive, Comment, Segment, Header, Button, Sticky, Rail } from 'semantic-ui-react'
import { Search, AryaComment } from 'components'

const confActions = [
  {
  type: Button,
  props: {
    positive: true,
    content: 'Yes',
    size: 'tiny'
    }
  },
  {
  type: Button,
  props: {
    negative: true,
    content: 'No',
    size: 'tiny'
  }
}]

const search_app = "search"
const clear_command = "clear"
const root_command = "root"

const root_message ={from:"conv",text:"root mode activated!",time:new Date().toLocaleTimeString(),avatar:"christian",author:"sys"}

export default class Conversation extends Component {
  constructor(props){
    super(props)
    this.Convhandler = this.Convhandler.bind(this)
    this.AddMessage = this.AddMessage.bind(this)
    this.scrollToBottom = this.scrollToBottom.bind(this)
    this.state = {
      messages: {

      }
    }
  }

  state = {}

  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  AddMessage(message) {
    //create a unike key for each new fruit item
     var timestamp = (new Date()).getTime();

     if(message.text==clear_command){
      this.setState({ messages : {} });
     }
     else if(message.text==root_command){

       this.setState({ messages : {root_message} });
     }
     else{
       // update the state object
       this.state.messages['message-' + timestamp ] = message;
       // set the state
       this.setState({ messages : this.state.messages });
     }

  }

  Convhandler(data) {
      // this.props.apphandler(marg);
      if(data.from==search_app){
          this.AddMessage(data)
      }

  }

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: 'smooth' });
  }

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state
    return (
      <>
      <Segment.Group className='conversation-group'>
        <Segment>
          <Header as='h3' classsName="sticky">
            Conversation
          </Header>
        </Segment>

          <Segment classname='conversation' color='green' ref={this.handleContextRef}>

            <Comment.Group className="container-bottom">

              {
                Object.keys(this.state.messages).map(function(key) {
                  return <AryaComment avatar={this.state.messages[key].avatar} author={this.state.messages[key].author} metadata={this.state.messages[key].time} text={this.state.messages[key].text} />
                }.bind(this))
              }

              <div ref={el => { this.el = el; }} />
              </Comment.Group>

            </Segment >

        <Segment className='search-bar'>
          <Search convhandler={this.Convhandler}/>
        </Segment>
        </Segment.Group>
        </>
    )
  }
}
