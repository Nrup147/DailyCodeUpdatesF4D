import React from 'react';
import {ScrollView, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Background from '../assets/Background';
import Field from '../assets/Field';
import Btn from '../assets/Btn';

const Signup= (props) => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style= {{flex:1}}>
            <Background>
            <View style= {{alignItems:'center', width: 375, backgroundColor: '#0C8CE9'}}>
            <View style={{backgroundColor: 'white', flex:1,height: 700, width: 375, top: 80, borderTopLeftRadius: 60, borderTopRightRadius: 60, paddingLeft: 18, alignItems: 'left'}}>
                <Text style={{paddingTop: 140, color: 'black', fontSize: 30, fontWeight: 'bold', marginBottom: 5}}>
                    Register
                </Text>

                <Text style={{paddingTop: 10, color: '#252525', fontSize: 14, fontFamily: 'Sofia Pro'}}>
                    Firstname
                </Text>
                <Field placeholder="Enter your firstname"></Field>

                <Text style={{paddingTop: 10, color: '#252525', fontSize: 14, fontFamily: 'Sofia Pro'}}>
                    Lastname
                </Text>
                <Field placeholder="Enter your lastname"></Field>

                <Text style={{paddingTop: 10, color: '#252525', fontSize: 14, fontFamily: 'Sofia Pro'}}>
                    Email
                </Text>
                <Field placeholder="Enter your email"></Field>

                <Text style={{paddingTop: 10, color: '#252525', fontSize: 14, fontFamily: 'Sofia Pro'}}>
                    Password
                </Text>
                <Field placeholder="Enter your password"></Field>

                <Text style={{paddingTop: 10, color: '#252525', fontSize: 14, fontFamily: 'Sofia Pro'}}>
                    Re-enter Password
                </Text>
                <Field placeholder="Re-enter your password"></Field>
                <View style={{margin: 40}}></View>
                <Btn bgColor={'#0C8CE9'} textColor='white' btnLabel='Signup' Press={() => props.navigation.navigate('Login')} w1='94%'></Btn>
                <View style= {{flex: 1, flexDirection: 'row', paddingTop: 10}}> 
                    <Text style= {{color: 'black', fontSize: 12, marginRight: 5}}>
                        Already have an account? 
                    </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                        <Text style={{fontSize: 12, color: 'blue', fontWeight: 'bold'}}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </Background>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Signup;