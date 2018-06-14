import React from 'react';
import { Toast } from 'native-base';


export default function letToast(toastType, Message) {
    const React = require("react-native");
    const { Dimensions, Platform } = React;
    const deviceHeight = Dimensions.get("window").height;
    Toast.show({
        text: Message,
        type: toastType,
        position: "top",
        style:{ marginTop:  deviceHeight/8, margin: 20, borderRadius: 10 }
    });
}
