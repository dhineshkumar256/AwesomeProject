const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
    logincard: {
        marginTop: deviceHeight / 8,
        marginLeft:15,
        marginRight:15
    },
    logincardIcon: {
        alignSelf: "center",
        margin: 20,
        fontSize: 80,
        color:"#eb8a33"
    },
    show: {
        color : "#ff7e00"
    }
}
