import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { SelectedItems } from './MultiSelect';
import ModalItemList from './ModalItemList';

interface Props {
    modalVisible: boolean;
    setModalVisible: (state: boolean) => void;
    fruits: SelectedItems[];
    handleToggleAddItem: (fruit: SelectedItems) => void;
}

const FruitModal = ({
    modalVisible,
    setModalVisible,
    fruits,
    handleToggleAddItem,
}: Props) => {
    return (
        <Modal transparent visible={modalVisible} animationType="fade">
            <View style={styles.modal}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalText}>Select Fruits</Text>
                    <View style={styles.modalList}>
                        {fruits.map(item => (
                            <ModalItemList
                                key={item.id}
                                item={item}
                                handleToggleAddItem={handleToggleAddItem}
                            />
                        ))}
                    </View>

                    <View style={styles.divider} />

                    <TouchableOpacity
                        onPress={() => setModalVisible(false)}
                        style={styles.confirmButton}>
                        <Text style={styles.confirmText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    main: {},
    modal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 15,
        elevation: 20,
        opacity: 1,
    },
    modalText: {
        fontSize: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontWeight: 'bold',
        color: '#212121',
        marginTop: 10,
    },
    modalList: {
        padding: 10,
        marginBottom: 10,
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
    },
    confirmButton: {
        padding: 10,
    },
    confirmText: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#212121',
    },
});

export default FruitModal;
