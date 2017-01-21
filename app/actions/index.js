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

export function completeTodo(number) {
	return { type: COMPLETE_TODO, number }
}

export function recoverTodo(number) {
	return { type: RECOVER_TODO, number }
}

export function deleteTodo(number) {
	return { type: DELETE_TODO, number }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}