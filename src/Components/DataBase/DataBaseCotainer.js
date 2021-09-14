import React from "react"
import { api } from '../../api/api'
import { connect } from "react-redux"
import { setCurrentPage, setPeople } from "../../Redux/App-reducer"
import { DataBase } from './DataBase'


class DataBaseApiContainer extends React.Component{
    componentDidMount(){
        api.getPeople()
        .then(response => {
            this.props.setPeople(response.data.results)
        })
    }

    onPageChange(pageNumber){
        api.getCurrentPage(pageNumber)
        .then(response => {
            this.props.setPeople(response.data.results)
            this.props.setCurrentPage(pageNumber)
        }) 
    }

    render() {
        return <DataBase people={this.props.people}
                         onPageChange={this.onPageChange.bind(this)}/>
    }
}

const mapStateToProps = (state) => ({
    people: state.app.people
})

export const DataBaseContainer = connect(mapStateToProps, {setPeople, setCurrentPage})(DataBaseApiContainer)