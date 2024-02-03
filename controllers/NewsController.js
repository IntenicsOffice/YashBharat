
import config from '../config'

const getNewsCategory = async () => {
    try {
      const res = await fetch(`${config.API_URL}primary-navigation` , {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
const getNewsByCategory = async () => {
    try {
      const res = await fetch(`${config.API_URL}latest-news` , {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
const getNewsByCategoryId = async (category_id) => {
    try {
      const res = await fetch(`${config.API_URL}news/${category_id}` , {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  export {getNewsCategory,getNewsByCategory,getNewsByCategoryId}