export const TOGGLE_CART_DROPDOWN = 'TOGGLE_CART_DROPDOWN'
export const ADD_ITEM = 'ADD_ITEM'

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