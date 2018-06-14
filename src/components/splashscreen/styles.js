const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30
  },
  logo: {
    position: "absolute",
    left: Platform.OS === "android" ? 40 : 50,
    top: Platform.OS === "android" ? 35 : 60,
    width: 280,
    height: 100
  },
  text: {
    color: "#ff7e00",
    bottom: 6,
    marginTop: 5,
    alignSelf: "center",
    fontSize: 50
  },
  logoicon: {
      alignSelf: "center",
      margin: 20,
      fontSize: 80,
      color:"#eb8a33"
  }
};
