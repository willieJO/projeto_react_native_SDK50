import React from "react";
import {View,ScrollView, Text,StatusBar,TextInput, TouchableOpacity} from 'react-native'
import { useNavigation } from 'expo-router';


export default function Registro() {
    const navigation = useNavigation();

    const handleVoltar = () => {
        navigation.goBack();
    };
    return (
        <ScrollView className="bg-purple-600">
              <TouchableOpacity onPress={handleVoltar}>
                        <Text style={{ color: 'blue', marginTop: 10 }}>Voltar</Text>
                    </TouchableOpacity>
           <View className="flex items-center justify-center min-h-screen pt-48">
                <View className='flex-1 bg-white px-8 pt-16 w-full' style={{borderTopLeftRadius:50,borderTopRightRadius:50}}>
                    
                </View>
            </View>
        </ScrollView>
    )
}