import React from "react"
import { ListCollapse, Menu, NotebookText, Settings, Truck } from "lucide-react-native";
import { IconTabbar } from "./Tabbar"

export const icon: { [ key: string ]: (props: IconTabbar) => JSX.Element } = {
    index: (props: IconTabbar) => <Menu color={props.color} size={20} />,
    reservation: (props: IconTabbar) => <NotebookText color={props.color} size={20} />,
    delivery: (props: IconTabbar) => <Truck color={props.color} size={20} />,
    setting: (props: IconTabbar) => <Settings color={props.color} size={20} />,
    more: (props: IconTabbar) => <ListCollapse color={props.color} size={20} />,
}

export const showRoutes = [ "index", "reservation", "delivery" ];