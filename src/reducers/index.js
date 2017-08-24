import {combineReducers} from 'redux'
import leaguetable from './leaguetable'
import team from './team'
import leaguefixtures from './leaguefixtures'

export default combineReducers({leaguetable, leaguefixtures, team})