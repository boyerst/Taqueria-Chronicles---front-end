import React from 'react'
import { Card } from 'semantic-ui-react'

export default function TaqueriaList(props) {
  console.log("Here is props in TaqueriaList")
  console.log(props)
  const taquerias = props.taquerias.map(taquerias => {
    return(
      <Card>
        <Card.Content>
          <Card.Header>
            {taquerias.name}
          </Card.Header>
        </Card.Content>
      </Card>

    )
  })
  return (
    <Card.Group>
      {taquerias}
    </Card.Group>
  )
}