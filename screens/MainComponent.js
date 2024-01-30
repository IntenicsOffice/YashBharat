import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Image} from 'react-native-elements';
import CustomHeader from '../navigation/CustomHeader';

const MainComponent = () => {
  const newsData = [
    {id: 1, title: 'News 1', description: 'Description for News 1'},
    {id: 2, title: 'News 2', description: 'Description for News 2'},
    {id: 3, title: 'News 3', description: 'Description for News 3'},
    {id: 4, title: 'News 4', description: 'Description for News 4'},
  ];

  const smallCardsData = [
    {id: 1, title: 'Small Card 1'},
    {id: 2, title: 'Small Card 2'},
    {id: 3, title: 'Small Card 3'},
    {id: 4, title: 'Small Card 4'},
    {id: 5, title: 'Small Card 5'},
    {id: 6, title: 'Small Card 6'},
    {id: 7, title: 'Small Card 7'},
    {id: 8, title: 'Small Card 8'},
    {id: 9, title: 'Small Card 9'},
    {id: 10, title: 'Small Card 10'},
  ];

  const NewsCard = ({title, description}) => (
    <View style={styles.newsCard}>
      <Text style={styles.newsTitle}>{title}</Text>
      {/* <Image
        source={{uri: 'https://www.gstatic.com/webp/gallery3/1.sm.png'}}
        style={styles.image}
      /> */}
       <View
          style={{
            flexDirection: 'row',
            padding: 4,
          }}>
          <Image source={{uri: 'https://www.gstatic.com/webp/gallery3/1.sm.png'}} style={styles.image} />
          <Text
            numberOfLines={4}
            ellipsizeMode="tail"
            style={{flexShrink: 1, marginLeft: 8, fontFamily: 'Abel-Regular'}}>
            hello world this is very nice prod bolard which demands is very high
            and we are not able to provide it so please buy from us high and we
            are not able to provide it so please buy from us
          </Text>
        </View>

      <Text style={styles.newsDescription}>{description}</Text>
    </View>
  );

  const SmallCard = ({title}) => (
    <View style={styles.smallCard}>
      <Image
        source={{uri: 'https://www.gstatic.com/webp/gallery3/1.sm.png'}}
        style={styles.smallImage}
      />
      <Text style={styles.smallTitle}>{title}</Text>
    </View>
  );

  return (
    <>
      <CustomHeader headerTitle="MainComponent" />
      <ScrollView style={styles.container}>
        {newsData.map(newsItem => (
          <NewsCard
            key={newsItem.id}
            title={newsItem.title}
            description={newsItem.description}
          />
        ))}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginBottom: 20}}>
          {smallCardsData.map(smallCard => (
            <SmallCard key={smallCard.id} title={smallCard.title} />
          ))}
        </ScrollView>

        {newsData.map(newsItem => (
          <NewsCard
            key={newsItem.id}
            title={newsItem.title}
            description={newsItem.description}
          />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  newsCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  newsDescription: {
    fontSize: 14,
  },
  smallCard: {
    backgroundColor: '#fff',
    padding: 8,
    marginRight: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  smallTitle: {
    fontSize: 14,
  },
  smallImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: 'contain',
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
});

export default MainComponent;
