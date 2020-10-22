import * as actionTypes from '../actions/actions';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
            break;

        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
            break;

        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
            break;

        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
            break;
    }
    return state;
};

export default reducer;