const initialState = {
    history: [],
    loadHistory: false,
    errorHistory: false,
    errorHistoryMessage: "Data Not Found",
    details: {},
    loadDetails: false,
    errorDetails: false,
    errorDetailsMessage: "Data Not Found",   
}

const transactionReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_HISTORY_PENDING":
            return {
                ...state,
                loadHistory: true
            }

        case "GET_HISTORY_FULLFILLED":
            return {
                ...state,
                loadHistory: false,
                history: action.payload,
                errorHistoryMessage: "Get TRANSACTION Success"
            }

        case "GET_HISTORY_REJECTED":
            return {
                ...state,
                loadHistory: false,
                errorHistoryMessage: action.payload
            }

        case "GET_DETAILS_TRANSACTIONS_PENDING":
            return {
                ...state,
                loadDetails: true
            }

        case "GET_DETAILS_TRANSACTION_FULLFILLED":
            return {
                ...state,
                details: action.payload,
                loadDetails: false,
                errorDetailsMessage: "Get TRANSACTION Success"
            }

        case "GET_DETAILS_TRANSACTION_REJECTED":
            return {
                ...state,
                loadDetails: false,
                errorDetailsMessage: action.payload
            }

        default:
            return state
    }
}

export default transactionReducer
