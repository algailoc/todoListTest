import {MainScreenModel} from "./MainScreenModel";
import {MainScreenController} from "./MainScreenController";
import {View} from "react-native";
import {MainScreenView} from "./MainScreenView";
import React from "react";

export const MainScreen = () => {
    const model = MainScreenModel();
    const controller = MainScreenController(model);

    return (
        <View>
            <MainScreenView model={model} controller={controller} />
        </ View>
    )
};