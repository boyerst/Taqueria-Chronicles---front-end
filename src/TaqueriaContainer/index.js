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


  createTaqueria = (taqueriaToAdd) => {
    console.log("This is the Taq that you are trying to create:")
    console.log(taqueriaToAdd)
  }


  render() {
    return(
      <React.Fragment>
      <h2>Taqueria Chronicles</h2>
        <TaqueriaList taquerias={this.state.taquerias}/>
        <NewTaqueriaForm createTaqueria={this.createTaqueria}/>
      </React.Fragment>
    )
  }
}