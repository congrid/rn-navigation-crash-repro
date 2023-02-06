/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Modal from 'react-native-modal';

function HomeScreen({navigation}: {navigation: any}) {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
      <Button
        title="Open"
        onPress={() => {
          setModalVisible(true);
        }}
      />
      <Modal isVisible={modalVisible} useNativeDriver>
        <View style={{marginTop: '50%'}}>
          <Button
            title="Close"
            onPress={() => {
              // Will crash even if the modal is not closed
              setModalVisible(false);
              // This will crash the app
              navigation.dispatch(StackActions.replace('Home'));
            }}
          />
        </View>
      </Modal>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
