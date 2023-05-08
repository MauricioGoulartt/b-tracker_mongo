import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { NativeBaseProvider } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NativeBaseProvider>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={() => ({ headerShown: false })}
      >
        <Stack.Screen name="forgot-password" component={ForgotPassword} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="tab" component={TabNavigation} />
      </Stack.Navigator>
    </NativeBaseProvider>
  );
}

function TabNavigation() {
  return (
    <NativeBaseProvider>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={() => ({
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarActiveBackgroundColor: "#7155D9",
        })}
      >
        <Tab.Screen
          name="Perfil"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="face-man-profile" color={color} size={size} />
            ),
          }}
        />
         <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
         <Tab.Screen
          name="Pesquisar"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="card-search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favoritos"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bookmark" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NativeBaseProvider>
  );
}