import {useDispatch, useSelector} from 'react-redux';
import { plainToClass, Type } from 'class-transformer';

export const MainScreenModel: () => any = () => {
   class TodoList {
       listId: number;
       listName: string;

       todos: object[];

       constructor(listId: number, listName: string){
           this.listId = listId;
           this.listName = listName;
           this.todos = [];
       }

       setTodos(id: number, value: string){
           this.todos.push(new Todo(id, value));
       }

       getList(){
           return this.todos;
       }
   }

   class Todo {
       id: number;
       value: string;

       constructor(id: number, value: string){
          this.id = id;
          this.value = value;
       }
   }

   interface RootState {
       reducer: any,
   }

   const dispatch = useDispatch();
   const {allLists} = useSelector((state: RootState) => state.reducer);
   let listOfLists = plainToClass(TodoList, allLists);

    // const todoListTwo = new TodoList(2, 'Дом');
    // todoListTwo.setTodos(1, 'Убраться в комнате');
    // todoListTwo.setTodos(2, 'Приготовить еду');
    // todoListTwo.setTodos(3, 'Выгулять собаку');
    // todoListTwo.setTodos(4, 'Сделать зарядку');
    // todoListTwo.setTodos(5, 'Поесть');

    return {listOfLists, dispatch};
};
