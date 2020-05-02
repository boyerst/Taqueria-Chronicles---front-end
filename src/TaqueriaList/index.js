import React from 'react'
import { Card, Rating, Button } from 'semantic-ui-react'

export default function TaqueriaList(props) {
  console.log("Here is props in TaqueriaList")
  console.log(props)
  // const formattedDate = Moment(taquerias.created_at).format("LL")
  const taquerias = props.taquerias.map(taquerias => {
    return(
      <Card key={taquerias.id}>
        <Card.Content>
          <Card.Header>{taquerias.name}</Card.Header>
          <Card.Meta>
            {taquerias.rating}
          </Card.Meta>
          <Rating icon="star" type="custom" value={taquerias.rating}/>
          <Card.Description>
            What to eat: {taquerias.recommendations}
          </Card.Description>
          <Card.Meta textAlign={"left"}>
            {taquerias.address}
          </Card.Meta>
          <Card.Meta textAlign={"left"}>
            <span 
            className='date'>
            Posted on {taquerias.created_at} by {taquerias.patron_id.username}
            </span>
          </Card.Meta>
        </Card.Content>
         <Button.Group>
          <Button 
            icon="delete"
            color='red' 
            size="mini"
            onClick={ () => props.deleteDog(taquerias.id) }
          >
          </Button>
          <Button.Or />
          <Button 
            icon="edit outline"
            color='green' 
            size="mini"
            onClick={ () => props.editDog(taquerias.id) }
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