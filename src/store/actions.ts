import {REMOVE_TODO_LIST} from "./types";

export function removeTodoList(listId: number) {
    const action = {
        type: REMOVE_TODO_LIST,
        payload: listId,
    };
    return action;
}