import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import CustomHeader from '../navigation/CustomHeader';
import HTML from 'react-native-render-html';
import config from '../config';

const DetailNews = ({route}) => {
  const {title, description, fullDescription, imageUrl} = route.params;
 
  const {width} = useWindowDimensions();

  return (
    <>
      <CustomHeader headerTitle="DetailNews" />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Image
            source={{uri: `${config.IMAGE_URL}${imageUrl}`}}
            style={styles.image}
          />
          <HTML source={{html: fullDescription}} contentWidth={width} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  image: {
    height: 200,
    width: '100%',
    marginBottom: 16,
  },
  fullDescription: {
    fontSize: 16,
  },
});

export default DetailNews;
