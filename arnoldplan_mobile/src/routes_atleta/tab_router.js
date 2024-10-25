import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons'

import Inicio from '../screens/screensAtleta/Inicio';
import Plano from '../screens/screensAtleta/plano'
import Consumo from '../screens/screensAtleta/Consumo'
import Historico from '../screens/screensAtleta/Historico'
import Logout from '../screens/screensAtleta/Logout'

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
        name="Plano"
        component={Plano}
        options={{
          tabBarIcon: ({color, size}) => <Feather name="check-square" color={color} size={size} />
        }}
      />

      <Tab.Screen
        name="Consumo"
        component={Consumo}
        options={{
          tabBarIcon: ({color, size}) => <Feather name="edit" color={color} size={size} />
        }}
      />

      <Tab.Screen
        name="Histórico"
        component={Historico}
        options={{
          tabBarIcon: ({color, size}) => <Feather name="calendar" color={color} size={size} />
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