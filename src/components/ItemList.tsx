import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { SelectedItems } from './MultiSelect';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
    item: SelectedItems;
    handleRemoveItem: (item: SelectedItems) => void;
}

const ItemList = ({ item, handleRemoveItem }: Props) => {
    return (
        <View key={item.id} style={[styles.item]}>
            <Text style={styles.itemText}>{item.name}</Text>
            <TouchableOpacity onPress={() => handleRemoveItem(item)}>
                <Ionicons name={'close'} size={17} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#eeeeee',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 3,
    },
    itemText: {
        marginEnd: 5,
        color: '#212121',
    },
});

export default ItemList;
