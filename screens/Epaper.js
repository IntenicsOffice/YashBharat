import { View, Text } from 'react-native'
import React from 'react'
import {Card, Image} from 'react-native-elements';
import CustomHeader from '../navigation/CustomHeader';
import {getNewsByCategory, getNewsCategory} from '../controllers/NewsController';


const Epaper = () => {

    const [newsCategory, setNewsCategory] = useState([]);

    const fetchCategory = async () => {
        const responseTwo = await getNewsByCategory();
        if (responseTwo?.status === 200) {
            setNewsCategory(responseTwo.latest_news);
        } else {
            alert(responseTwo.message);
        }
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    const PeparCard = ({title, description, fullDescription, image}) => (
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

    return (
        <>
        <CustomHeader headerTitle="Epaper" />
            {/* <View>
                <Text>Epaper</Text>
            </View> */}

        <ScrollView contentContainerStyle={styles.container}>
            {newsCategory.map((category, index) => (
            <View key={index}>
                <Text style={styles.categoryTitle}>{category.category}</Text>
                {category.news.map(newsItem => (
                <PeparCard
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

    )
}

export default Epaper