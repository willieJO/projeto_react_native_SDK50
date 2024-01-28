import React from "react";
import {View, Text,StatusBar} from 'react-native'
import { Login } from './login/login'
export default function Index() {
    return (
        <View className="bg-purple-600">
            <Login/>
            <StatusBar backgroundColor="black" barStyle="light-content" />
        </View>
    )
}