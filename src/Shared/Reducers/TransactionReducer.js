
const transactionReducer = (state = {}, action) => { //es6 arrow function
    switch (action.type) {
        case 'ADD':
            return action.payload;
        default:
            return state;
    }
}

export default transactionReducer;