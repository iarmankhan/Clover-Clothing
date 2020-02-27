import { TOGGLE_CART_DROPDOWN } from "./cart.actions";

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            }
            break;
    
        default:
            return state;
    }
};

export default cartReducer  