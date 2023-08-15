import React  from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import RootStack from './src/RootStack';
import { Provider } from 'react-redux';
import configureStore from "./src/store/configurStore";
import { MenuProvider } from 'react-native-popup-menu';
const store = configureStore();
import pusherOnGo, {channel} from './src/components/pusher/pusher';
import 'react-native-gesture-handler';
import {loadedPersisterFast, loadpersist} from "./src/store/actions/authentication";
import FlashMessage from "react-native-flash-message";
import SplashScreen from "react-native-splash-screen";
class App extends React.Component{
    constructor(props) {
        super(props);
        console.log(store);


    }
    state = {
        isLoaded:false
    }
componentDidMount() {
    store.dispatch(loadedPersisterFast()).then((response) =>{
        this.setState({
            isLoaded:true
        })
    });
    // persistStore(store, {}, () => {
    //
    // });
}

    render()
  {
      if(!__DEV__) {
          console.log = () => {};
          console.error = () => {};
      }

      if (Text.defaultProps == null) Text.defaultProps = {};
      Text.defaultProps.allowFontScaling = false;
      if (TextInput.defaultProps == null) TextInput.defaultProps = {};
      TextInput.defaultProps.allowFontScaling = false;

      if(this.state.isLoaded){

          pusherOnGo(store);
          return(
              <MenuProvider>
              <Provider store={store}>
                  <RootStack store={store} />
                  <FlashMessage position="top" autoHide={false} animated={true} />
              </Provider>
              </MenuProvider>
          )
      }else{

          return(
              <>
              </>
          )
      }

  }
}
export default App;
