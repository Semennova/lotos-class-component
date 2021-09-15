const SET_PEOPLE = 'SET_PEOPLE'
const SET_TOTAL_PEOPLE_COUNT = 'SET_TOTAL_PEOPLE_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let initialState = {
    people: [],
    pageSize: 10,
    currentPage: 1,
    totalPeopleCount: 0
}

export const appReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PEOPLE :
            return {
                ...state,
                people: action.payload
            }
        case SET_TOTAL_PEOPLE_COUNT :
            return {
                ...state,
                totalPeopleCount: action.payload
            }
        case SET_CURRENT_PAGE :
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state
    }
}

export const setPeople = (people) => ({
    type: SET_PEOPLE,
    payload: people
})

export const setTotalPeopleCount = (people) => ({
    type: SET_TOTAL_PEOPLE_COUNT,
    payload: people
})

export const setCurrentPage = (pageNumber) => ({
    type: SET_CURRENT_PAGE,
    payload: pageNumber
}) 
 