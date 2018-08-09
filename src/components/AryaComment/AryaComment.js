import React, { Component } from 'react'
import { Responsive, Comment, Segment, Header, Button } from 'semantic-ui-react'
import { Search } from 'components'
import _ from 'lodash'

export default class AryaComment extends Component {
  constructor(props) {
    super(props);
    }

  render() {
    const { avatar, author, metadata, text, actions } = this.props
    return (
      <Comment>
        <Comment.Avatar src={'https://react.semantic-ui.com/images/avatar/small/'+avatar+'.jpg'} />
          <Comment.Content>
            <Comment.Author as='a'>{author}</Comment.Author>
            <Comment.Metadata>
              <div>{metadata}</div>
            </Comment.Metadata>
            <Comment.Text>
                {text}
            </Comment.Text>
            <Comment.Actions>
                <Comment.Action>
                  {_.map(actions, item => React.createElement(item.type, item.props,
                        item.content
                    ) )}

                </Comment.Action>
            </Comment.Actions>
        </Comment.Content>
      </Comment>
    )
    }
  }
