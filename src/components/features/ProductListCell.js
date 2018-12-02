// import libary components
import React from "react";
import {Card} from 'semantic-ui-react'

const ProductListCell = (props) => {
  let searchResults = props.results.map((game) => {
    return(
          <Card
            key={game.id} // Unique key identifier for React
            image={game.image_url} // Url of the image for the current object inside api
            header={game.name}
            meta={game.year_published}
            description={game.description}
          />
        );
      });

  return(
    <Card.Group>
          {searchResults}
    </Card.Group>
  );
}

export default ProductListCell
