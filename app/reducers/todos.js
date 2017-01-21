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
    let index = 0, results;
    if (action.number) {
        index = state.findIndex((value => {
            return value.number == action.number;
        }));
    }
    switch (action.type) {
        case ADD_TODO:
            let number = state.length >0 ? state[state.length-1].number : 0;
            results = [
                ...state, {
                    text: action.text,
                    completed: false,
                    number: number+1
                }
            ];
            localStorage.setItem('todos', JSON.stringify(results));
            return results;

        case COMPLETE_TODO:
            results = [
                ...state.slice(0, index),
                Object.assign({}, state[index], {
                    completed: true
                }),
                ...state.slice(index + 1)
            ];
            localStorage.setItem('todos', JSON.stringify(results));
            return results;

        case RECOVER_TODO:
            results = [
                ...state.slice(0, index),
                Object.assign({}, state[index], {
                    completed: false
                }),
                ...state.slice(index + 1)
            ];
            localStorage.setItem('todos', JSON.stringify(results));
            return results;

        case DELETE_TODO:
            results = [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];  
            localStorage.setItem('todos', JSON.stringify(results));
            return results;

        default:
            return state;
    }
}

export default todoList;