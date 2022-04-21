import React, { useReducer, createContext, useContext } from "react";

let initialTodos = localStorage.getItem('data') === null ? [] : JSON.parse(localStorage.getItem('data'));

function TodoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            localStorage.setItem('data', JSON.stringify(state.concat(action.todo)));
            initialTodos = state.concat(action.todo);
            return state.concat(action.todo);
        case 'TOGGLE':
            localStorage.setItem('data', JSON.stringify(state.map(todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo)));
            initialTodos = state.map(todo =>
              todo.id === action.id ? { ...todo, done: !todo.done } : todo);
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo);
        case 'REMOVE':
            localStorage.setItem('data', JSON.stringify(state.filter(todo => todo.id !== action.id)));
            initialTodos = state.filter(todo => todo.id !== action.id);
            return state.filter(todo => todo.id !== action.id)
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(TodoReducer, initialTodos);


    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                    {children}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>);
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}
