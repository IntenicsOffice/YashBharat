import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, Text, Image} from 'react-native-elements';
import CustomHeader from '../navigation/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import config from '../config';
import {getNewsByCategory, getNewsCategory} from '../controller/NewsController';

const Home = () => {
  const [newsCategory, setNewsCategory] = useState([]);
  const [newsCategories, setNewsCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const navigation = useNavigation();

  // const newsCategories = [
  //   {
  //     category: 'Technology',
  //     news: [
  //       {
  //         id: 1,
  //         title: 'Tech News 1',
  //         description: 'Description for tech news 1.',
  //         image: 'https://www.gstatic.com/webp/gallery3/1.sm.png',
  //       },
  //       {
  //         id: 2,
  //         title: 'Tech News 2',
  //         description: 'Description for tech news 2.',
  //         image: 'https://www.gstatic.com/webp/gallery3/1.sm.png',
  //       },
  //       {
  //         id: 3,
  //         title: 'Tech News 3',
  //         description: 'Description for tech news 3.',
  //         image: 'https://www.gstatic.com/webp/gallery3/1.sm.png',
  //       },
  //       {
  //         id: 4,
  //         title: 'Tech News 4',
  //         description: 'Description for tech news 4.',
  //         image: 'https://via.placeholder.com/150',
  //       },
  //       {
  //         id: 5,
  //         title: 'Tech News 5',
  //         description: 'Description for tech news 5.',
  //         image: 'https://www.gstatic.com/webp/gallery3/1.sm.png',
  //       },
  //     ],
  //   },
  //   {
  //     category: 'Sports',
  //     news: [
  //       {
  //         id: 6,
  //         title: 'Sports News 1',
  //         description: 'Description for sports news 1.',
  //         image: 'https://www.gstatic.com/webp/gallery3/1.sm.png',
  //       },
  //       {
  //         id: 7,
  //         title: 'Sports News 2',
  //         description: 'Description for sports news 2.',
  //         image: 'https://www.gstatic.com/webp/gallery3/1.sm.png',
  //       },
  //       {
  //         id: 8,
  //         title: 'Sports News 3',
  //         description: 'Description for sports news 3.',
  //         image: 'https://www.gstatic.com/webp/gallery3/1.sm.png',
  //       },
  //       {
  //         id: 9,
  //         title: 'Sports News 4',
  //         description: 'Description for sports news 4.',
  //         image: 'https://via.placeholder.com/150',
  //       },
  //       {
  //         id: 10,
  //         title: 'Sports News 5',
  //         description: 'Description for sports news 5.',
  //         image: 'https://www.gstatic.com/webp/gallery3/1.sm.png',
  //       },
  //     ],
  //   },
  // ];

  const fetchCategory = async () => {
    const responseTwo = await getNewsByCategory();
    if (responseTwo?.status === 200) {
      setNewsCategory(responseTwo.latest_news);
    } else {
      alert(responseTwo.message);
    }
  };

  const fetchCategories = async () => {
    const response = await getNewsCategory();
    if (response?.status === 200) {
      setNewsCategories(response.primary_navigation);
    } else {
      alert(response.message);
    }
  };

  const NewsCard = ({title, description, fullDescription, image}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailNews', {
          title: title,
          fullDescription: fullDescription,
          description: description,
          imageUrl: image,
        });
      }}>
      <Card containerStyle={styles.card}>
        <Text style={{fontFamily: 'Roboto-Light'}}>{title}</Text>
        <Card.Divider />
        <View
          style={{
            flexDirection: 'row',
            padding: 4,
          }}>
          <Image
            source={{uri: `${config.IMAGE_URL}${image}`}}
            style={styles.image}
          />
          <Text
            numberOfLines={4}
            ellipsizeMode="tail"
            style={{flexShrink: 1, marginLeft: 8, fontFamily: 'Abel-Regular'}}>
            {description}
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );

  useEffect(() => {
    fetchCategory();
    fetchCategories();
  }, []);

  return (
    <>
      <CustomHeader headerTitle="Home" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 8, marginLeft: 12, height: 40}}>
        {newsCategories?.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,
              index === selectedCategory && styles.selectedCategoryButton,
            ]}
            onPress={() => {
              setSelectedCategory(index);
              navigation.navigate('Epaper', {
                categoryId: category.category_id,
              });
            }}>
            <Text
              style={
                index === selectedCategory
                  ? styles.categoryTextActive
                  : styles.categoryText
              }>
              {category.category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView contentContainerStyle={styles.container}>
        {newsCategory.map((category, index) => (
          <View key={index}>
            <Text style={styles.categoryTitle}>{category.category}</Text>
            {category.news.map(newsItem => (
              <NewsCard
                key={newsItem.id}
                title={newsItem.post_title}
                description={newsItem.post_description}
                fullDescription={newsItem.post_body}
                image={newsItem.file_name}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  categoryTitle: {
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    marginLeft: 8,
    marginTop: 10,
  },
  card: {
    paddingRight: 18,
    marginHorizontal: 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
  },
  image: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    borderRadius: 8,
    marginBottom: 8,
    borderColor: 'green',
    borderWidth: 1,
  },
  description: {
    marginBottom: 10,
    fontFamily: 'Roboto-Medium',
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
  categoryButton: {
    padding: 5,
    height: 30,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
  },
});

export default Home;
