import React from "react";
import {View, Text,StatusBar,TextInput, TouchableOpacity} from 'react-native'
import { Link,router } from "expo-router";


export function Login() {
    const entrar = () => {
        router.navigate("/home/home")
    }
    return (
        <View className="bg-purple-600">
            
            <View className="flex items-center justify-center min-h-screen pt-48">
                <View className='flex-1 bg-purple-50 px-8 pt-16 w-full' style={{borderTopLeftRadius:50,borderTopRightRadius:50}}>
                <View className="w-full mb-72">
            <Text className="text-purple-400 font-semibold text-sm">E-mail</Text>
            <TextInput placeholder="Digite o E-mail" placeholderTextColor="black" className="border border-purple-200 rounded-md p-2 text-black" />
            <Text className="text-purple-400 font-semibold text-sm">Senha</Text>
            <TextInput secureTextEntry={true} placeholder="Digite sua senha" placeholderTextColor="black" className="border border-purple-200 rounded-md p-2 text-black" />
            <TouchableOpacity onPress={entrar} className="border bg-purple-700 border-purple-800 rounded-md p-2 mt-4">
                <Text className="text-purple-100 text-center">Entrar</Text>
            </TouchableOpacity>
            <Link href="registro/registro">
            <Text className="mt-4 text-sm text-gray-600">
                Caso não tenha conta, <Text className="text-blue-500">registre-se apertando aqui</Text>.
            </Text>
            </Link>
            <StatusBar backgroundColor="black" barStyle="light-content" />
        </View>
                </View>
            </View>
            <StatusBar backgroundColor="black" barStyle="light-content" />
        </View>
    )
}