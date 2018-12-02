// import libary components
import React from "react";
import { Card} from 'semantic-ui-react'

const ProductCell = (props) => {
  let recommended = props.topResult.map((game) => {
    return(
          <Card
            key={game.id} // Unique key identifier for React
            image={game.image_url} // Url of the image for the current object inside api
            header={game.name}
            description={game.description}
          />
        );
      });

  return(
    <Card.Group>
          {recommended}
    </Card.Group>
  );
}

export default ProductCell
