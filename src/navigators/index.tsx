import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//imported all screen's components which are placed in screens folder
import * as Screens from '../screens';

//defined main navigator's type to check route name and it's params
export type RootStackParamList = {
  Splash: undefined; //doesn't have params
  Characters: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const routes: Array<React.ComponentProps<typeof Stack.Screen>> = [
  {
    name: 'Splash',
    component: Screens.Splash,
  },
  {
    name: 'Characters',
    component: Screens.Characters,
  },
];

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {routes.map(routeConfig => (
          <Stack.Screen key={routeConfig.name} {...routeConfig} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
