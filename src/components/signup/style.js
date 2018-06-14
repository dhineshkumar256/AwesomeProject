const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
    signupcard: {
        marginTop: deviceHeight / 12,
        marginLeft:15,
        marginRight:15
    },
    signupcardIcon: {
        alignSelf: "center",
        margin: 20,
        fontSize: 80,
        color:"#eb8a33"
    },
    show: {
        color : "#ff7e00"
    }
}
