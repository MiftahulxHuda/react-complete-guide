const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
            break;

        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
            break;

        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.val
            }
            break;

        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.val
            }
            break;

        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
            break;

        case 'DELETE_RESULT':
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
            break;
    }
    return state;
};

export default reducer;