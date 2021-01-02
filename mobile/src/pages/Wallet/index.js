import React from 'react';
import { View,Text } from 'react-native';

import styles from './styles';

export default function Wallet(){
    return (
        <View style={styles.container}>
            <View styles={styles.header}>
                <Text style={styles.description}>wallet</Text>
            </View>
        </View>
    )
}