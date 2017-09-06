import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const RoundButton = ({onPress, children}) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={ onPress } style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle:{
        alignSelf: 'center',
        color: '#fff',
        fontSize: 20,
        //fontWeight: '900',
        //paddingTop: 10,
        //paddingBottom: 10
    },
    buttonStyle: {
        //flex: 1,
        alignSelf: 'flex-end',
        //backgroundColor:'#007aff',
        //borderRadius: 30,
        //borderWidth: 1,
        //borderColor: '#007aff',
        //marginLeft: 5,
        //marginRight: 5,
        //width:55,
        //height: 55
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:55,
        height:55,
        backgroundColor:'#007aff',
        borderRadius:100,
    }
};

export {RoundButton};