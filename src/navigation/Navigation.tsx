import { Image, ImageSourcePropType, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductScreen } from "../screens/ProductScreen";
import { ProductDetailsScreen } from "../screens/ProductDetailsScreen";
import { BagScreen } from "../screens/BagScreen";
import { ProfileScreen } from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

interface TabBarIconProps {
    focused: boolean;
    size: number;
    source: ImageSourcePropType;
}

export const TabBarIcon: React.FC<TabBarIconProps> = ({ focused, size, source }) => (
    <Image
        source={source}
        style={{
            height: size,
            width: size,
            resizeMode: "contain",
        }}
    />
);

export const MyHomeStack: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="HOME" component={ProductScreen} />
            <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
        </Stack.Navigator>
    );
}

export const Navigation: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="HOME_STACK"
                component={MyHomeStack}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <TabBarIcon
                            focused={focused}
                            size={size}
                            source={
                                focused
                                    ? require("../assets/focused/home.png")
                                    : require("../assets/normal/home.png")
                            }
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="CARD"
                component={BagScreen}
                options={{
                    tabBarIcon: ({ focused, size }) => {
                        const { bagProducts } = useSelector((state: RootState) => state.bag);
                        return (
                            <View style={{ position: "relative" }}>
                                <TabBarIcon
                                    focused={focused}
                                    size={size}
                                    source={
                                        focused
                                            ? require("../assets/focused/shopping_card.png")
                                            : require("../assets/normal/shopping_card.png")
                                    }
                                />
                                <View
                                    style={{
                                        position: "absolute",
                                        right: -3,
                                        bottom: 22,
                                        height: 14,
                                        width: 14,
                                        backgroundColor: focused ? "#E96E6E" : "#C0C0C0",
                                        borderRadius: 7,
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Text style={{ color: "white", fontSize: 10 }}>
                                        {bagProducts.length}
                                    </Text>
                                </View>
                            </View>
                        );
                    },
                }}
            />
            < Tab.Screen
                name="ACCOUNT"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <TabBarIcon
                            focused={focused}
                            size={size}
                            source={
                                focused
                                    ? require("../assets/focused/account.png")
                                    : require("../assets/normal/account.png")
                            }
                        />
                    ),
                }}
            />
        </Tab.Navigator >
    );
};
