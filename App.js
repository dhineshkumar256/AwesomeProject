import React from 'react';
import { Root, Container, StyleProvider } from "native-base";
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';
import { Font, AppLoading } from "expo";
import RootStack from './src/route/route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
        <Root>
            <StyleProvider style={getTheme(platform)}>
                <Container style={{marginTop: 24}}>
                    <RootStack />
                </Container>
            </StyleProvider>
        </Root>
    );
  }
}
