import React, { Component } from 'react'
import { Responsive, Comment, Segment, Header, Button } from 'semantic-ui-react'
import { Search } from 'components'
export default class Conversation extends Component {

  render() {

    return (
      <Segment className='conversation' color='green'>
        <Comment.Group>
            <Header as='h3'>
              Conversation
            </Header>

            <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Arya</Comment.Author>
                  <Comment.Metadata>
                    <div>Today at 5:42PM</div>
                  </Comment.Metadata>
                  <Comment.Text>
                      Awesome! Launcing the <a>Weather App</a> to help you with that...
                  </Comment.Text>
                  <Comment.Actions>

                  </Comment.Actions>
              </Comment.Content>
            </Comment>

            <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Swapnil</Comment.Author>
                  <Comment.Metadata>
                    <div>Today at 5:42PM</div>
                  </Comment.Metadata>
                  <Comment.Text>Yes</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action></Comment.Action>
                  </Comment.Actions>
              </Comment.Content>
            </Comment>

            <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Arya</Comment.Author>
                  <Comment.Metadata>
                    <div>Today at 5:42PM</div>
                  </Comment.Metadata>
                  <Comment.Text>
                      I sense you need <a>Sacramento</a> weather information.
                      Is that correct ?
                  </Comment.Text>
                  <Comment.Actions>
                    <Comment.Action><Button active={true} positive={true} content='Yes' size='tiny'/></Comment.Action>
                    <Comment.Action><Button active={false} negative={true} content='No' size='tiny'/></Comment.Action>
                  </Comment.Actions>
              </Comment.Content>
            </Comment>

            <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Swapnil</Comment.Author>
                  <Comment.Metadata>
                    <div>Today at 5:42PM</div>
                  </Comment.Metadata>
                  <Comment.Text>sac temp</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action></Comment.Action>
                  </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
          <Search />
        </Segment>
    )
  }
}
