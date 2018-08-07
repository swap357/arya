import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment, Input } from 'semantic-ui-react'

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}))

export default class SearchExample extends Component {


  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    }

  handleRef = component => (this.ref = component);
  componentWillMount() {
    this.resetComponent();
  }
  componentDidMount() {

  }
  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),

      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid className="arya-search">
        <Grid.Column>
          <Search
            autoFocus

            size="small"
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            results={results}
            value={value}
            placeholder='say hi'
            showNoResults={false}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    )
  }
}
