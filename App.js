import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import One from "./screens/Home1"
import Two from "./screens/Home2"
import Three from './screens/Home3'
import Four from './screens/Home4'
import Five from './screens/Home5'
import Six from './screens/Home6'
import Seven from './screens/Home7'
import Eight from './screens/Home8'
import Nine from './screens/Home9'
import Ten from './screens/Home10'
import eleven from './screens/Home11'
import Twelve from './screens/Home12'
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='1' headerMode='none'>
        <Stack.Screen name="One" component={One} />
        <Stack.Screen name="Two" component={Two} />
        <Stack.Screen name="Three" component={Three} />
        <Stack.Screen name='Four' component={Four} />
        <Stack.Screen name='Five' component={Five} />
        <Stack.Screen name='Six' component={Six} />
        <Stack.Screen name='Seven' component={Seven} />
        <Stack.Screen name='Eight' component={Eight} />
        <Stack.Screen name='Nine' component={Nine} />
        <Stack.Screen name='Ten' component={Ten} />
        <Stack.Screen name='eleven' component={eleven} />
        <Stack.Screen name='Twelve' component={Twelve} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

