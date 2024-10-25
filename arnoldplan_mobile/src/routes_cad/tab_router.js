import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons'

import CadAT from '../screens/CadastroAtleta';
import CadNU from '../screens/CadastroNut'

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
  return(
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Atleta"
        component={CadAT}
        options={{
          tabBarIcon: ({color, size}) => <Feather name="users" color={color} size={size} />
        }}
      />

      <Tab.Screen
        name="Nutricionista"
        component={CadNU}
        options={{
          tabBarIcon: ({color, size}) => <Feather name="users" color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  )
}