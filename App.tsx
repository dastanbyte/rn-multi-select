import React, { useState } from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MultiSelect, { SelectedItems } from './src/components/MultiSelect';

const App = () => {
    const [commitedItems, setCommitedItems] = useState<SelectedItems[]>([]);

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />

            <View style={styles.main}>
                <Text style={styles.title}>Multiple Select</Text>
                <Text style={styles.subTitle}>
                    A React Native simple multiple select example.
                </Text>
                <MultiSelect commitedItems={setCommitedItems} />

                {commitedItems.length > 0 && (
                    <View style={styles.itemsDisplayed}>
                        <View style={styles.items}>
                            {commitedItems.map(item => (
                                <Text
                                    style={styles.displayedText}
                                    key={item.id}>
                                    {item.name}
                                </Text>
                            ))}
                        </View>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fafafa',
        padding: 10,
    },
    title: {
        fontSize: 26,
        color: '#212121',
        marginTop: 20,
        fontWeight: '500',
    },
    subTitle: {
        fontSize: 16,
        color: '#616161',
        marginTop: 5,
        marginBottom: 15,
    },
    itemsDisplayed: {
        flexDirection: 'row',
    },
    items: {
        backgroundColor: '#eeeeee',
        padding: 8,
        width: '40%',
        borderRadius: 5,
    },
    displayedText: {
        marginVertical: 2,
    },
});

export default App;
