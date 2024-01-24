import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS, icons } from '../constants';

const CustomHeader = () => {
  return (
    <View style={styles.header}>
      {/* <Text style={styles.headerText}>{title} Yash Bharat</Text> */}
      <Image
          source={icons.yb_logo}
          style={{
            height: 60,
            width: 190,
            // tintColor: COLORS.rose_600,
          }}
        />

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
