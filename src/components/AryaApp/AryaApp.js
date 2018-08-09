import React, { Component } from 'react'
import { Responsive, Divider, Segment, Header, Button, Item } from 'semantic-ui-react'
import { Search } from 'components'
import PropTypes from 'prop-types'
import _ from 'lodash'

export default class AryaApp extends Component {

  constructor(props) {
    super(props);

    }

  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    const { data } = this.props

    return (
      <Segment inverted={false} color='grey' size='big' className='app-container'>
          <Header as='h1'>
            {this.props.title}<Divider/>
          </Header>
          {_.map(data, item => React.createElement(item.type, item.props,
                item.content
            ) )}
        </Segment>
    )
  }
}
