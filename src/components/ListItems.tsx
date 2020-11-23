import React from 'react';
import {List} from "react-native-paper";
import GestureRecognizer from 'react-native-swipe-gestures';
import swipeDirections from 'react-native-swipe-gestures';
import {removeTodoList} from "../store/actions";

export const ListItems: (list: any) => any = ({list, dispatch}) => {
    return (
        list.map((item: any) => {
            return (
                <List.Section title={item.listName.toUpperCase()} key={item.listId}>
                    {item.todos.map((todo: any)=>
                        {return (
                            <GestureRecognizer key={todo.id}
                                               // onSwipeLeft={() => dispatch(removeTodoList(item.listId))}
                                               onSwipeRight={() => console.log('swiped right')}>
                            <List.Item title={todo.value} onPress={()=>{console.log(todo.id)}}/>
                            </GestureRecognizer>
                        )}
                    )}
                    <List.Accordion title={'Завершенные'} >
                        <List.Item title={'dfgdfg'} />
                    </List.Accordion>
                </List.Section>
            )
        })
    )
};