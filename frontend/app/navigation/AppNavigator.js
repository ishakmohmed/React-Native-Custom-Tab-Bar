import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import OrderScreen from "../screens/OrderScreen";
import QueueScreen from "../screens/QueueScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Queue"
        component={QueueScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
