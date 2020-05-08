import React from 'react'
import { Card, Rating, Button } from 'semantic-ui-react'

export default function TaqueriaList(props) {
  console.log("Here is props in TaqueriaList")
  console.log(props)
 
  const taquerias = props.taquerias.map(taqueria => {
    return(
      <Card key={taqueria.id}>
        <Card.Content>
          <Card.Header>{taqueria.name}</Card.Header>
          <Rating icon="star" maxRating="5" rating={taqueria.rating} disabled/>
          <Card.Description>
            What to eat: {taqueria.recommendations}
          </Card.Description>
          <Card.Meta textAlign={"left"}>
            {taqueria.address}
          </Card.Meta>
          <Card.Meta textAlign={"left"}>
            <span 
            className='date'>
            Posted on {taqueria.created_at} by {taqueria.patron_id.username}
            </span>
          </Card.Meta>
        </Card.Content>
        <Button.Group>
          <Button 
            icon="delete"
            color='red' 
            size="mini"
            inverted
            onClick={ () => props.deleteTaqueria(taqueria.id) }
          >
          </Button>
          <Button.Or />
          <Button 
            icon="edit outline"
            color='green' 
            size="mini"
            inverted
            onClick={ () => props.editTaqueria(taqueria.id) }
          >
          </Button>
        </Button.Group>
      </Card>
    )
  })
  return (
    <Card.Group centered={true}>
      {taquerias}
    </Card.Group>
  )
}