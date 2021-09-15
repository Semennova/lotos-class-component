import React from "react"
import { connect } from "react-redux"
import { api } from "../../api/api"
import { setCurrentPage, setTotalPeopleCount } from "../../Redux/App-reducer"
import { Pagination } from "./Pagination"


class PaginationApiContainer extends React.Component {
    componentDidMount(){
        api.getPeople()
        .then(response => {
            this.props.setTotalPeopleCount(response.data.count)       
    }) 
}

    render(){
        return <Pagination  onPageChange={this.props.onPageChange}
                            totalPeopleCount={this.props.totalPeopleCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
        />
    }
}


const mapStateToProps = (state) => ({
    totalPeopleCount: state.app.totalPeopleCount,
    pageSize: state.app.pageSize,
    currentPage: state.app.currentPage
})

export const PaginationContainer = connect(mapStateToProps, {setTotalPeopleCount, setCurrentPage})(PaginationApiContainer)