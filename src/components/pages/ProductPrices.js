// import libary components
import React, {Fragment, Component} from 'react';
import {Grid, Card, Segment, Image, Container, Divider} from 'semantic-ui-react'

// import file components
import './ProductPrices.css';

class ProductPrices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      reviews: [],
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
    const URL2 = "https://www.5colorcombo.com/api/game/videos?game-id=" + encodeURI(array[3]);
    console.log(URL2);
    fetch(URL2).then( (response) => {
      response.json().then( (data) => {
        this.setState({
            reviews: data.videos
        })
      })
    })
    const URL3 = "https://www.5colorcombo.com/api/game/prices?game-id=" + encodeURI(array[3]);
    console.log(URL3);
    fetch(URL3).then( (response) => {
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
        <Fragment key={index} className="searchItem-display">
            <Image src={item.image_url} size='large' centered />
            <h1 className="product-name">{item.name}</h1>
        </Fragment>
      );
    });

    let searchReviews = this.state.reviews.map((review, index) => {
      return(
          <Card
            key={index}
            image={review.image_url}
            header={review.title}
            description={review.description}
            href={review.url}
            target='_blank'
          />
      );
    });

    let searchPrices = this.state.prices.map((price, index) => {
      return(
        <Fragment>
            <Card fluid
              key={index} // Unique key identifier for React
              // image={}
              description={price.price_text}
              header={price.store_name}
              meta={price.country}
              href={price.url}
              target='_blank'
            />
            <Divider />
        </Fragment>
      );
    });

    return (
      <Fragment>
        <div className="ProductList-title">
          <a href="/">
            <h1 ui header>
              <span style={{color:"red"}}>Mark</span>
              <span style={{color:"yellow"}}>et</span>
              <span style={{color:"cornFlowerBlue"}}>place</span>
            </h1>
          </a>
        </div>

        <div className="content-wrapper">
          <div className="itemReviews">
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column >
                  {searchItem}
                </Grid.Column>
                <Grid.Column >
                  <Card.Group>
                    {searchReviews}
                  </Card.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <div className="itemComparison">
            <Card.Group>
                {searchPrices}
            </Card.Group>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProductPrices
