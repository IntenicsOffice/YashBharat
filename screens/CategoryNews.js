import React, {useState,useEffect} from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, Text} from 'react-native-elements';
import CustomHeader from '../navigation/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import { getNewsByCategory, getNewsByCategoryId, getNewsCategory } from '../controllers/NewsController';
import config from '../config';

const CategoryNews = ({route}) => {
  const navigation = useNavigation();
  const {categoryId, category} = route.params;

  console.log(route);
  // console.log("categoryId",categoryId)
  const [dataNews, setDataNews] = useState([]);
 
  const fetchNewsByCategory = async(id) => {
    const response = await getNewsByCategoryId(id)
    if (response?.status === 200) {
        setDataNews(response.news)
    } else {
      alert(response.message);
    }
  };
  
  useEffect(() => {
    // fetchCategory()
    fetchNewsByCategory(categoryId)
  }, []);

  const renderNewsByCategory = () => {
    return (
      <ScrollView >
        <View style={styles.newsContainer}>
          {dataNews.map((news,index) => (
             <TouchableOpacity key={index} onPress={() => {
                navigation.navigate('DetailNews', {
                  title: news.post_title,
                  fullDescription: news.post_body,
                  imageUrl: news.file_name,
                });
              }}>
            <Card key={news.id} containerStyle={styles.cardContainer}>
              <Card.Title>{news.post_title}</Card.Title>
              <Card.Image source={{uri: `${config.IMAGE_URL}${news.file_name}`}} style={styles.cardImage} />
              <Text style={styles.cardDescription}>
                {news.post_description}
              </Text>
            </Card>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  };

  return (
    <>
      <CustomHeader headerTitle={category} categoryStatus={true}/>
      <ScrollView >
        {dataNews?.length > 0 && renderNewsByCategory()}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 8,
  },
  categoryButton: {
    padding: 5,
    height:30,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
  },
  selectedCategoryButton: {
    backgroundColor: 'green',
  },
  categoryText: {
    fontSize: 16,
    color: 'green',
    fontFamily: 'Abel-Regular',
  },
  categoryTextActive: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Abel-Regular',
  },
  newsContainer: {
  },
  cardContainer: {
    marginBottom: 16,
  },
  cardImage: {
    height: 100,
  },
  cardDescription: {
    marginTop: 8,
  },
});

export default CategoryNews;
