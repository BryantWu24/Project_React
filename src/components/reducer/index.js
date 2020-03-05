const initState = {
    handleTextInput: '',
    handleMenuHeaderItem: 'HomePage',
}

const Reducer = (state = initState, action) => {
    switch (action.type) {

        case 'HANDLE_TEXT_INPUT':
            return Object.assign({}, state, {
                handleTextInput: action.input
            })

        case 'HANDLE_MENUHEADER_ITEM':
            return Object.assign({}, state, {
                handleMenuHeaderItem: action.item
            })

        default:
            return state
    }
}

export default Reducer