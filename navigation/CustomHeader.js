import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS, icons} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({headerTitle}) => {
  const navigation = useNavigation();

  return (
    <View>
      {headerTitle !== 'Home' ? (
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 12,
            zIndex: 1000,
            top: 10,
            padding: 5,
          }}
          onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
      ) : null}
      <View style={styles.header}>
        <Image
          source={icons.yb_logo}
          style={{
            height: 60,
            width: 190,
          }}
        />
      </View>
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
  backIcon: {
    color: COLORS.primary,
    fontSize: 24,
    marginRight: 10,
  },
});

export default CustomHeader;
