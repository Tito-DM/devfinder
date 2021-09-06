import {REMOVE_ALERT, SET_ALERT} from "./types"
import {v4 as uuidv4} from "uuid"
                        // works because of thunk middleware
export const setAlert = (msg, alertType)=>dispatch=>{
    //create radom id
    const id = uuidv4();

    //set dispatch function
    dispatch({
        type: SET_ALERT,
        payload: {msg,alertType,id}
    })

}