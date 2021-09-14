const SET_PEOPLE = 'SET_PEOPLE'
const SET_TOTAL_PEOPLE_COUNT = 'SET_TOTAL_PEOPLE_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let initialState = {
    people: [
        {
            name: 'C-3PO', 
            height: '167', 
            mass: '75', 
            hair_color: 'n/a', 
            skin_color: 'gold', 
            eye_color: 'yellow', 
            birth_year: '112BBY', 
            gender: 'n/a', 
            homeworld: 'https://swapi.dev/api/planets/1/', 
        },

        {
            name: 'Luke Skywalker', 
            height: '172', 
            mass: '77', 
            hair_color: 'blond', 
            skin_color: 'fair', 
            eye_color: 'blue', 
            birth_year: '19BBY', 
            gender: 'male', 
            homeworld: 'https://swapi.dev/api/planets/1/', 
           }
    ],
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
 