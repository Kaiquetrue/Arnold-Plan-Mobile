import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons'

import Inicio from '../screens/screensNutric/Inicio';
import Atletas from '../screens/screensNutric/Atletas'
import Logout from '../screens/screensNutric/Logout'

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
  return(
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Perfil"
        component={Inicio}
        options={{
          tabBarIcon: ({color, size}) => <Feather name="user" color={color} size={size} />
        }}
      />

      <Tab.Screen
        name="Atletas"
        component={Atletas}
        options={{
          tabBarIcon: ({color, size}) => <Feather name="users" color={color} size={size} />
        }}
      />

      <Tab.Screen
        name="Sair"
        component={Logout}
        options={{
          tabBarIcon: ({color, size}) => <Feather name="log-out" color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  )
}