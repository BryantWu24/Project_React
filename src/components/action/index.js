export const handleTextInput = (val) => {
    return {
        type: 'HANDLE_TEXT_INPUT',
        input: val.target.value
    }
}

export const handleMenuHeaderItem = (val) => {
    return {
        type: 'HANDLE_MENUHEADER_ITEM',
        item: val
    }
}