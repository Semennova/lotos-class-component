import { connect } from "react-redux"
import { setPeople } from "../../Redux/App-reducer"
import { Searchbar } from "./Searchbar"



export const SearchbarContainer = connect(null, {setPeople})(Searchbar)