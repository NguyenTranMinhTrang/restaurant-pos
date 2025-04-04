import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { ActivityIndicator, FlatList, Image, ListRenderItem, ListRenderItemInfo, ScrollView, Text, View } from "react-native";
import { COLORS, SPACING, globalStyles, textStyles } from "~/constants/styleGlobal";
import { useImmer } from "use-immer";
import { Button } from "../ui/button";
import category from "../../data/category.json";
import items from "../../data/items.json";
import MenuItem from "./MenuItem";

interface Category {
    id: number;
    name: string;
    numberOfItems: number;
}

export interface Item {
    id: number;
    name: string;
    price: number;
    quantity: number;
    vegOrNonVeg: {
        label: string;
        color: string;
    };
    category: number;
    img: string;
}

interface State {
    loading: boolean;
    categoryList: Category[];
    items: Item[];
    filterItems: Item[];
    activeCategory: number;
}

interface ListMenuProps {

}

export interface ListMenuRef {
    onSearch: (text: string) => void;
}

const ListMenu = forwardRef<ListMenuRef, ListMenuProps>((props, ref) => {
    const [ state, setState ] = useImmer<State>({
        loading: true,
        categoryList: [],
        items: [],
        filterItems: [],
        activeCategory: 0,
    })

    useEffect(() => {
        loadData();
    }, []);

    const onSearch = (text: string) => {
        if (text) {
            const filterItems = state.items.filter(item => {
                if (state.activeCategory === 1) {
                    return item.name.toLowerCase().includes(text.toLowerCase());
                }
                return item.name.toLowerCase().includes(text.toLowerCase()) && item.category === state.activeCategory;
            });

            setState(draft => {
                draft.filterItems = filterItems;
            })
        } else {
            if (state.activeCategory === 1) {
                setState(draft => {
                    draft.filterItems = state.items;
                })
            } else {
                const filterItems = state.items.filter(item => item.category === state.activeCategory);
                setState(draft => {
                    draft.filterItems = filterItems;
                });
            }
        }
    }

    useImperativeHandle(ref, () => ({
        onSearch
    }))

    const loadData = () => {
        const listCategory: Category[] = [ ...category ];
        const listItems: Item[] = [ ...items ];

        const filterItems = listCategory[ 0 ].id == 1 ? listItems : listItems.filter(item => item.category === state.activeCategory);
        setState(draft => {
            draft.categoryList = listCategory;
            draft.loading = false;
            draft.activeCategory = listCategory[ 0 ].id;
            draft.items = listItems;
            draft.filterItems = filterItems;
        })
    }

    const onChangeCategory = (id: number) => () => {
        const filterItems = id == 1 ? state.items : state.items.filter(item => item.category === id);
        setState(draft => {
            draft.activeCategory = id;
            draft.filterItems = filterItems;
        })
    }

    const renderItem = ({ item, index }: ListRenderItemInfo<Item>) => {
        return (
            <MenuItem
                key={`${item.name}-${index}`}
                item={item}
            />
        )
    }

    const renderCategory = () => {
        return (
            <View style={[ { height: 50 }, globalStyles.mb2 ]}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        state.categoryList.map((item, index) => {
                            const isActive = item.id === state.activeCategory;
                            return (
                                <Button
                                    key={index}
                                    variant={"outline"}
                                    style={[
                                        { borderRadius: 25 },
                                        globalStyles.mr2,
                                        isActive && { backgroundColor: '#EFFDF4' }
                                    ]}
                                    onPress={onChangeCategory(item.id)}>
                                    <Text style={isActive && { color: COLORS.primary }}>{item.name} ({item.numberOfItems})</Text>
                                </Button>
                            )
                        })
                    }
                </ScrollView>
            </View>
        );
    }

    const renderList = () => {
        return (
            <FlatList
                data={state.filterItems}
                renderItem={renderItem}
                contentContainerStyle={{ gap: SPACING.small }}
                showsVerticalScrollIndicator={false}
            />
        )
    }

    if (state.loading) {
        return (
            <View style={[ globalStyles.full, globalStyles.center ]}>
                <ActivityIndicator size="large" color={COLORS.primary} />
            </View>
        );
    }

    return (
        <View style={[ globalStyles.full ]}>
            {renderCategory()}
            {renderList()}
        </View>
    );
})

export default ListMenu;