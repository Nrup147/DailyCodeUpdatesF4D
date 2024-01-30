import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn({bgColor, btnLabel, textColor, Press, w1}) {
    return (
        <TouchableOpacity 
        onPress={Press}
        style={{
            backgroundColor: bgColor,
            height: 50,
            borderRadius: 12,
            alignItems: 'center',
            width: w1,
            paddingVertical: 5,
            justifyContent: 'center',
            marginTop: 10
            }}>
            <Text style={{color: textColor, fontSize: 22, fontWeight: 'bold'}}>{btnLabel}</Text>
        </TouchableOpacity>
    );
}