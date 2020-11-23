import React from 'react';
import {View, StyleSheet} from "react-native";
import {ListItems} from "../../components/ListItems";
import {TextInput} from "react-native-paper";

export const MainScreenView: (controller: any, model: any) => any = ({controller, model}) => {
    const {listOfLists, dispatch} = model;

    return (
        <View>
            <View>
                <TextInput />
            </View>
            <ListItems list={listOfLists} dispatch={dispatch} />
        </ View>
    )
};

const styles = StyleSheet.create({
    textInputWrapper: {
        borderRadius: 20,
        borderWidth: 5,
    },
});