// import libary components
import React, {Fragment, Component} from 'react';
import {Card} from 'semantic-ui-react'

class ProductPrices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      prices: []
    };
  }

  componentDidMount() {
    console.log(this.props.location.pathname);
    let pathname = this.props.location.pathname;
    let array = pathname.split('/');
    console.log(array[3]);

    const URL = "https://beta.5colorcombo.com/api/search?ids=" + encodeURI(array[3]);
    console.log(URL);
    fetch(URL).then( (response) => {
      response.json().then( (data) => {
        this.setState({
            item: data.games
        })
      })
    })
    const URL2 = "https://www.5colorcombo.com/api/game/prices?game-id=" + encodeURI(array[3]);
    console.log(URL2);
    fetch(URL2).then( (response) => {
      response.json().then( (data) => {
        this.setState({
            prices: data.prices
        })
      })
    })

  }

  render() {
    let searchItem = this.state.item.map((item, index) => {
      return(
        <Card
          key={index}
          image={item.image_url}
          header={item.name}
        />
          );
    });

    let searchPrices = this.state.prices.map((price, index) => {
      return(
            <Card
              key={index} // Unique key identifier for React
              description={price.price_text}
              header={price.store_name}
              meta={price.country}
              href={price.url}
            />
          );
    });

    return (
      <Fragment>
        {searchItem}
        <Card.Group>
              {searchPrices}
        </Card.Group>
      </Fragment>
    );
  }
}

export default ProductPrices
