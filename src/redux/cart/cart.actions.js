export const TOGGLE_CART_DROPDOWN = 'TOGGLE_CART_DROPDOWN'
export const ADD_ITEM = 'ADD_ITEM'
export const CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART'

export const toggleCartDropdown = () => {
    return {
        type: TOGGLE_CART_DROPDOWN
    }
};

export const addItem = item => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export const clearItemFromCart = item => {
    return {
        type: CLEAR_ITEM_FROM_CART,
        payload: item
    }
}