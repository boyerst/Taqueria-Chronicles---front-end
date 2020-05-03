import React, { Component } from 'react'
import TaqueriaList from '../TaqueriaList'
import NewTaqueriaForm from '../NewTaqueriaForm'


export default class TaqueriaContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      taquerias: []
    }
  }

  componentDidMount() {
    this.getTaquerias()
  }

  getTaquerias = async () => {
    try {
      console.log(process.env)
      const url = process.env.REACT_APP_API_URL + "/api/v1/taquerias/"
      console.log("Will be fetching data from the following url:")
      console.log(url)
      const taqueriasResponse = await fetch(url, {
        credentials: 'include'
      })
      console.log("Here is the response from the fetch call:")
      console.log(taqueriasResponse)
      const taqueriasJson = await taqueriasResponse.json()
      console.log("Here is the data that was fetched via getTaq in taqCont:")
      console.log(taqueriasJson)
      this.setState({
        taquerias: taqueriasJson.data
      })
    } catch (error) {
      console.log("error gettings Taqueria data", error)
    }
  }


  createTaqueria = async (taqueriaToAdd) => {
    console.log("This is the Taq that you are trying to create:")
    console.log(taqueriaToAdd)
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/taquerias/"

      const createTaqueriaResponse = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(taqueriaToAdd)
      })
      const createTaqueriaJson = await createTaqueriaResponse.json()
      console.log("Here is the result of creating the taq:")
      console.log(createTaqueriaJson)

      if(createTaqueriaResponse.status === 201) {
        const taquerias = this.state.taquerias
        taquerias.push(createTaqueriaJson.data)
        this.setState( {taquerias: taquerias} )
        }
    } catch (error){
      console.log(error)
      console.log("There was an error creating the taq")
    }
  }
  

  deleteTaqueria = async (idOfTaqueriaToDelete) => {
    const url = process.env.REACT_APP_API_URL + "/api/v1/taquerias/" + idOfTaqueriaToDelete
    try {
    
      const deleteTaqueriaResponse = await fetch(url, {
        credentials: 'include',
        method: 'DELETE'
      })
      console.log("deleteTaqueriaResponse", deleteTaqueriaResponse)
      const deleteTaqueriaJson = await deleteTaqueriaResponse.json()
      console.log("deleteTaqueriaJson", deleteTaqueriaJson)
      this.setState({
        taquerias: this.state.taquerias.filter(taqueria => taqueria.id != idOfTaqueriaToDelete)
      })

    } catch (error) {
      console.log("error - unable to delete taq")
      console.log(error)
    }
  }

  editTaqueria = async (idOfTaqueriaToEdit) => {
    console.log("Here is the taq you are trying to edit:", idOfTaqueriaToEdit)
    this.setState({
      idOfTaqueriaToEdit: idOfTaqueriaToEdit
    })
  }


  render() {
    return(
      <React.Fragment>
      <h2>Taqueria Chronicles</h2>
        <TaqueriaList 
        taquerias={this.state.taquerias}
        deleteTaqueria={this.deleteTaqueria}
        editTaqueria={this.editTaqueria}
        />
        <NewTaqueriaForm createTaqueria={this.createTaqueria}/>
      </React.Fragment>
    )
  }
}