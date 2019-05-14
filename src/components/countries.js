import ApolloClient from 'apollo-boost';
import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import MapWrapper from './map-wrapper';

// initialize a GraphQL client
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com'
});

// write a GraphQL query that asks for names and codes for all countries
const GET_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

// create a component that renders an API data-powered select input
export default class CountrySelect extends Component {
  state = {
    country: 'United States'
  };

  // set the selected country to the new input value
  onCountryChange(event){
    this.setState({country: event.target.value});
  };

  render() {
    return (
      <Query query={GET_COUNTRIES} client={client}>
        {({loading, error, data}) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{error.message}</p>;
          return (
              <div>
            <select value={this.state.country} onChange={this.onCountryChange.bind(this)}>
              {data.countries.map(country => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
            <MapWrapper country={this.state.country} />
            </div>
          );
        }}
      </Query>
    );
  }
}

