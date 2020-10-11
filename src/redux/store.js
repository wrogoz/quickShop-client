import reducer from './reducer';
import {createStore} from 'redux';

export default ()=>{
    const mystore = createStore(reducer);
    return mystore;
}

