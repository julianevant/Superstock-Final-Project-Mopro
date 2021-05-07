import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const splash = () => {
    return (
        <View style={styles.page}>
            <Logo/>
        </View>
    );
};

export default splash;

const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: '#6A4206',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });
  