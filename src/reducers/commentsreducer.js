const defaultState = [
    { commentsID: "1", comments: "This is Funny" },
]


export default (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_COMMENTS":
            return [...state, action.obj];
        default:
            return state;
    }
}