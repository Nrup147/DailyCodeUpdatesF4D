import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Background from '../assets/Background';
import Field from '../assets/Field';
import Btn from '../assets/Btn';
import Signup from './Signup';
import { useNavigation } from '@react-navigation/native';
import Tabs from '../navigation/Tabs';

const Login = (props) => {
    const navigation = useNavigation();
    return (
        <Background>
            <View style= {{alignItems:'center', width: 375, backgroundColor: '#0C8CE9'}}>
            <View style={{backgroundColor: 'white', height: 700, width: 375, top: 80, borderTopLeftRadius: 60, borderTopRightRadius: 60, alignItems: 'left', paddingLeft: 18}}>
                <Text style={{paddingTop: 140, color: 'black', fontSize: 32, fontWeight: 'bold', marginBottom: 5, fontFamily: 'Sofia Pro'}}>
                    Login
                </Text>
                <Text style={{paddingTop: 20, color: '#252525', fontSize: 14, fontFamily: 'Sofia Pro'}}>
                    Email
                </Text>
                <Field placeholder="Email"></Field>
                <Text style={{paddingTop: 20, color: '#252525', fontSize: 14, fontFamily: 'Sofia Pro'}}>
                    Password
                </Text>
                <Field placeholder="Password"></Field>
                <TouchableOpacity onPress={() => props.navigation.navigate('')}>
                        <Text style={{marginTop: 4, paddingLeft: '65%', fontSize: 12, color: '#FF1515', marginBottom: 60}}>
                            Forgot password?
                        </Text>
                </TouchableOpacity>
                <Btn bgColor={'#0C8CE9'} textColor='white' btnLabel='Login' Press={() => props.navigation.navigate('Tabs')} w1='94%'></Btn>
                <View style= {{flex: 1, flexDirection: 'row', paddingTop: 10, marginHorizontal: '20%'}}> 
                    <Text style= {{color: '#858383', fontSize: 12, marginRight: 5}}>
                        Don't have an account? 
                    </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
                        <Text style={{fontSize: 12, color: '#0C8CE9', fontWeight: 'bold'}}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </Background>
    );
}

const styles = StyleSheet.create({})

export default Login;