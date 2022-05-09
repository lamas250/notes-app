import React from "react";
import { TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "@utils";
import { Home } from "@screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type MainRouteParams = {
  Home: undefined;
};

const { Navigator, Screen, Group } = createNativeStackNavigator();

export const MainStack: React.FC = ({ navigation }) => {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary_900,
        },
        headerTintColor: colors.title,
        headerRight: () => (
          <TouchableOpacity style={{ marginRight: 20 }}>
            <Ionicons
              name="information-circle-outline"
              size={30}
              color={colors.title}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <View style={{ margin: 10 }}>
              <Ionicons
                name="menu-outline"
                color={colors.title}
                size={25}
                // onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
        }}
      />
    </Navigator>
  );
};
