import React from "react";
import {View, Text,StatusBar} from 'react-native'
export default function Index() {
    return (
        <View className="bg-purple-50 flex-1 w-full">
            <Text>Home</Text>
            <StatusBar backgroundColor="black" barStyle="light-content" />
        </View>
    )
}