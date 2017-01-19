import {
     ADD_TODO,
     COMPLETE_TODO, 
     DELETE_TODO,
     RECOVER_TODO
} from '../actions/index';

let todos;
(function() {
    if (localStorage.todos) {
        todos = JSON.parse(localStorage.todos)
    } else {
        todos = []
    }
})();

function todoList(state = todos, action) {
    switch (action.type) {
        case ADD_TODO:
            var results = [
                ...state, {
                    text: action.text,
                    completed: false
                }
            ];
            localStorage.setItem('todos', JSON.stringify(results));
            return results;

        case COMPLETE_TODO:
            var results = [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ];
            localStorage.setItem('todos', JSON.stringify(results));
            return results;

        case RECOVER_TODO:
            var results = [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: false
                }),
                ...state.slice(action.index + 1)
            ];
            localStorage.setItem('todos', JSON.stringify(results));
            return results;

        case DELETE_TODO:
            var results = [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];  
            localStorage.setItem('todos', JSON.stringify(results));
            return results;

        default:
            return state;
    }
}

export default todoList;