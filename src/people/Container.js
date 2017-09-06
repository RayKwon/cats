import React, { Component } from 'react'
import { fetchPeople } from './action'
import { connect } from 'react-redux'
import './container.css'
import Cat from './Cat'
import Loading from './Loading'

class Container extends Component {
  componentWillMount() {
    this.props.fetchPeople()
  }

  render() {
    
    return (
      <div className="people-container">
        <Loading isLoading={this.props.isLoading} />

        <div className="actions">
          <button className="btn-reload" onClick={e => this.props.fetchPeople()}>Reload</button>
        </div>

        <ul>
          <li>
            <h4 className="group-title">Male</h4>
            <ul className="people__group">
              {this.props.pets && this.props.pets.male && this.props.pets.male.map((pet, i) => <Cat key={i} {...pet} />)}
            </ul>    
          </li>
          <li>
            <h4 className="group-title">Female</h4>
            <ul className="people__group">
              {this.props.pets && this.props.pets.female && this.props.pets.female.map((pet, i) => <Cat key={i} {...pet} />)}
            </ul>    
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ 
  pets: state.peopleState.pets,
  isLoading: state.peopleState.isLoading
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPeople : () => dispatch(fetchPeople())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)

