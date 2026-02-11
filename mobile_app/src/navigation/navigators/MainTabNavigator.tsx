import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainRoutes } from '../Routes';
import HomeScreen from '../../screen/HomeScreen';
import StoreScreen from '../../screen/StoreScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1e88e5',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={MainRoutes.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={26} color={color} solid />
          ),
        }}
      />

      <Tab.Screen
        name={MainRoutes.Store}
        component={StoreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="shopping-cart" size={26} color={color} solid />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;