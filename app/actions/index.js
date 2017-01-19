export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const RECOVER_TODO = 'RECOVER_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * 其它的常量
 */
export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action 创建函数
 */
export function addTodo(text) {
	return { type: ADD_TODO, text }
}

export function completeTodo(index) {
	return { type: COMPLETE_TODO, index }
}

export function recoverTodo(index) {
	return { type: RECOVER_TODO, index }
}

export function deleteTodo(index) {
	return { type: DELETE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}