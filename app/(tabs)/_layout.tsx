import { Tabs } from "expo-router";
import React from "react";
import TabBar from "~/components/tabbar/Tabbar";

const TabLayout = () => {
    return (
        <Tabs tabBar={(props) => <TabBar {...props} />}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Menu",
                    headerShown: false,
                }}
            />

            <Tabs.Screen
                name="table-service"
                options={{
                    title: "Table",
                    headerShown: false,
                }}
            />

            <Tabs.Screen
                name="reservation"
                options={{
                    title: "Reservation",
                    headerShown: false,
                }}
            />

            <Tabs.Screen
                name="delivery"
                options={{
                    title: "Delivery",
                    headerShown: false,
                }}
            />

            <Tabs.Screen
                name="setting"
                options={{
                    title: "Setting",
                    headerShown: false,
                }}
            />

        </Tabs>
    );
}

export default TabLayout;