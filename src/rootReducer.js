import {combineReducers} from 'redux'
import HomePageReducer from './redux/HomePage/HomePage.reducer'
import SinglePageReducer from './redux/SinglePage/SinglePage.reducer'
export default combineReducers({
    HomePageReducer,
    SinglePageReducer
})