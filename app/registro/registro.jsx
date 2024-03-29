import React,{useState } from "react";
import {View,ScrollView, Text,StatusBar,TextInput, TouchableOpacity} from 'react-native'
import { useNavigation,router  } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome'; // Certifique-se de ajustar o nome do ícone conforme necessário
import { TextInputMask } from 'react-native-masked-text';
import { RadioButton } from 'react-native-paper';


export default function Registro() {
    const [cpf, setCpf] = useState('');
    const [valorSelecionado, setValorSelecionado] = useState('nao');
    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [cnpj, setCnpj] = useState('');
    const navigation = useNavigation();

    const handleVoltar = () => {
        navigation.goBack();
    };
    const registrar = () => {
        router.navigate({href:"/login/login"})
    }
    return (
        <ScrollView className="bg-purple-600">
            <TouchableOpacity onPress={handleVoltar} style={{ position: 'absolute', top: 10, left: 10 }}>
                <Icon name="arrow-left" size={40} color="#EEECFB" />
            </TouchableOpacity>
            <View className="flex items-center justify-center min-h-screen pt-48">
                <View className='flex-1 bg-purple-50 px-8 pt-16 w-full' style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                    <Text className="text-purple-400 font-semibold text-sm">Nome</Text>
                    <TextInput placeholder="Digite o seu nome" placeholderTextColor="black" className="border border-purple-200 rounded-md p-2 text-black" />
                    <Text className="text-purple-400 mt-2 font-semibold text-sm">CPF</Text>
                    <TextInputMask
                        type={'cpf'}
                        placeholder="Digite o seu CPF"
                        placeholderTextColor="black"
                        value={cpf}
                        className="border border-purple-200 rounded-md p-2 text-black"
                        onChangeText={(formatted, extracted) => {
                            setCpf(extracted);
                        }}
                    />

                    <Text className="text-purple-400 mt-2 font-semibold text-sm">E-mail</Text>
                    <TextInput placeholder="Digite o seu e-mail" placeholderTextColor="black" className="border border-purple-200 rounded-md p-2 text-black" />

                    <Text className="text-purple-400 mt-2 font-semibold text-sm">Senha</Text>
                    <TextInput secureTextEntry={true} placeholder="Digite a sua senha" placeholderTextColor="black" className="border border-purple-200 rounded-md p-2 text-black" />

                    <Text className="text-purple-400 mt-2 font-semibold text-sm">Possui empresa?</Text>
                    <TouchableOpacity onPress={() => setValorSelecionado('sim')} className="mt-2 font-semibold text-sm flex-row items-center">
                        <RadioButton.Android
                            value="sim"
                            status={valorSelecionado === 'sim' ? 'checked' : 'unchecked'}
                            color="#805ad5"
                            onPress={() => setValorSelecionado('sim')}
                        />
                        <Text>Sim</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setValorSelecionado('nao')} className="mt-2 font-semibold text-sm flex-row items-center">
                        <RadioButton.Android
                            value="nao"
                            status={valorSelecionado === 'nao' ? 'checked' : 'unchecked'}
                            color="#805ad5"
                            onPress={() => setValorSelecionado('nao')}
                        />
                        <Text>Não</Text>
                    </TouchableOpacity>

                    {valorSelecionado === 'sim' && (
                        <View>
                            <Text className="text-purple-400 mt-2 font-semibold text-sm">Nome da Empresa</Text>
                            <TextInput placeholder="Digite o nome da empresa" placeholderTextColor="black" className="border border-purple-200 rounded-md p-2 text-black" />

                            <Text className="text-purple-400 mt-2 font-semibold text-sm">CNPJ</Text>
                            <TextInputMask
                                type={'cnpj'}
                                placeholder="Digite o CNPJ da empresa"
                                placeholderTextColor="black"
                                value={cnpj}
                                className="border border-purple-200 rounded-md p-2 text-black"
                                onChangeText={(formatted, extracted) => {
                                    setCnpj(extracted);
                                }}
                            />
                        </View>
                    )}
                    <TouchableOpacity onPress={registrar} className="border bg-purple-500 border-purple-200 rounded-md p-2 mt-4 mb-4">
                        <Text className="text-purple-100 text-center">Registrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar backgroundColor="black" barStyle="light-content" />
        </ScrollView>
    );
}