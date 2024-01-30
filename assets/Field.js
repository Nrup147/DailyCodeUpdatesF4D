import React from 'react';
import {TextInput} from 'react-native';
// import {darkGreen} from './Constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 12, borderWidth: 1, borderColor:'#CFDEE5', paddingHorizontal: 15, width: '94%', marginVertical: 4, height: 50, alignItems: 'center'}}
      placeholderTextColor='#858383'></TextInput>
  );
};

export default Field;