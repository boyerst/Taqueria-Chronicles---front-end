import React, { Component } from 'react'
import TaqueriaList from '../TaqueriaList'
import NewTaqueriaForm from '../NewTaqueriaForm'
import EditTaqueriaForm from '../EditTaqueriaForm'


export default class TaqueriaContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      taquerias: [],
      idOfTaqueriaToEdit: -1
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
        credentials: 'include',
      })
      console.log(taqueriasResponse, "after fetch json")
      console.log("Here is the response from the fetch call:")
      const taqueriasJson = await taqueriasResponse.json()
      console.log(taqueriasResponse, "this is after await")
      console.log("Here is the data that was fetched via getTaq in taqCont:")
      console.log(taqueriasJson)
      this.setState({
        taquerias: taqueriasJson.data
      })
    } catch (error) {
      console.log("error getting Taqueria data", error)
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
        this.setState({
          taquerias: taquerias
        })
        }
    } catch (error){
      console.log(error)
      console.log("There was an error creating the taq")
    }
  }
  

  deleteTaqueria = async (idOfTaqueriaToDelete) => {
    const url = process.env.REACT_APP_API_URL + "/api/v1/taquerias/*" + idOfTaqueriaToDelete
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


  updateTaqueria = async (updatedTaqueriaInfo) => {
    const url = process.env.REACT_APP_API_URL + "/api/v1/taquerias/" + this.state.idOfTaqueriaToEdit

    try {
      const updateTaqueriaResponse = await fetch(url, {
        credentials: 'include',
        method: 'PUT',
        body: JSON.stringify(updatedTaqueriaInfo), 
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log("updateTaqueriaResponse", updateTaqueriaResponse)
      const updateTaqueriaJson = await updateTaqueriaResponse.json()
      console.log("updateTaqueriaJson", updateTaqueriaJson);
      if(updateTaqueriaResponse.status == 200) {
        const taquerias = this.state.taquerias
        const indexOfTaqueriaBeingUpdated = taquerias.findIndex(taqueria => taqueria.id == this.state.idOfTaqueriaToEdit)
        taquerias[indexOfTaqueriaBeingUpdated] = updateTaqueriaJson.data
        this.setState({
          taquerias: taquerias,
          idOfTaqueriaToEdit: -1
        })
      }
     

    } catch(error) {
      console.error("error - unable to update taq")
      console.error(error)
    }


  }






  render() {
    return(
      <React.Fragment>
      <h2>Taqueria Time</h2>
        <NewTaqueriaForm 
        createTaqueria={this.createTaqueria}
        
        />
       
        <TaqueriaList 
        taquerias={this.state.taquerias}
        deleteTaqueria={this.deleteTaqueria}
        editTaqueria={this.editTaqueria}
        />
        { 
          this.state.idOfTaqueriaToEdit !== -1 
          && 
          <EditTaqueriaForm 
            key={this.state.idOfTaqueriaToEdit}
            taqueriaToEdit={this.state.taquerias.find((taqueria) => taqueria.id === this.state.idOfTaqueriaToEdit)}
            closeModal={this.closeModal}
            updateTaqueria={this.updateTaqueria}
          /> 
        }
      
      </React.Fragment>
    )
  }
}