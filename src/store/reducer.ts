import {ADD_TODO, ADD_TODO_LIST, EDIT_TODO, READ_TODO, REMOVE_TODO_LIST} from "./types";

export const initialState = {
    allLists: [
        {listId: 1,
            listName: 'Программирование',
            todos: [
                {id: 1, value: 'Разобраться с тайпскриптом'},
                {id: 2, value: 'Написать программу'},
                {id: 3, value: 'Выпить чашку кофе'},
            ]}
    ]
    };

type todo = {
    value: string,
        id: number,
}

type todoList = {
    listId: number,
    title: string,
    todos: todo[],
};

// type allLists = todoList[];

// type action = {type: string, payload: {id: number, value: string}}

export const reducer = (state = initialState, action: { type: string; payload: any; }) => {
    switch (action.type) {
        // case READ_TODO: {
        //     return {
        //         ...state,
        //         todoList: action.payload,
        //     }
        // }

        case ADD_TODO_LIST: {
            return {
                ...state,
                allLists: [
                    ...state.allLists,
                    {
                        listId: action.payload.listId,
                        listName: action.payload.listName,
                        todos: [],
                    }
                ]
            }
        }

        // case ADD_TODO: {
        //     return {
        //         ...state,
        //         allLists: [
        //             ...state.allLists,
        //
        //         ]
        //     }
        // }

        case REMOVE_TODO_LIST: {
                return {
                    ...state,
                    allLists: state.allLists.filter((list) => {
                       return (list.listId !== action.payload)
                    })
                }
        }
        //
        // case EDIT_TODO: {
        //     return {
        //         ...state,
        //         todoList: state.todoList.map((todo: {id: number, value: string}) => {
        //             if (todo.id === action.payload.id) {
        //                 todo.value = action.payload.value;
        //             }
        //             return todo;
        //         })
        //     }
        // }

        default: {
            return state;
        }
    }
};
