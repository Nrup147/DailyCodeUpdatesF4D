import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HistoryScreen = () => {
    return (
        <View style= {{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff'}}>
            <Text>
                History Screen
            </Text>
            <Button title='Click here' onPress={() => alert('Button clicked')}></Button>
        </View>
    );
}

export default HistoryScreen;