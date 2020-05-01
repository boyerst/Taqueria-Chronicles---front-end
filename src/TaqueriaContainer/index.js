import React, { Component } from 'react'


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
      const url = process.env.REACT_APP_API_URL + "/api/v1/taquerias/"
      console.log("Will be fetching data from the following url:");
      console.log(url);
    } catch (error) {
      console.log("error gettings Taqueria data", error)
    }
  }

  render() {
    return(
      <h2>Taqueria Container</h2>
    )
  }
}