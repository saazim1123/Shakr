import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form'
import authReducer from './authReducer';
import site from './site.js'
import drinks from './drinks.js'

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    drinks:drinks,
    site: site
});