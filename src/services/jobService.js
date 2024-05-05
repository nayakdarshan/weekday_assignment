import axios from 'axios';

export const fetchJobListings = async (offset) => {
  const myHeaders = {
    'Content-Type': 'application/json'
  };

  const body = {
    limit: 9,
    offset: offset,
  };

  try {
    const response = await axios.post("https://api.weekday.technology/adhoc/getSampleJdJSON", body, { headers: myHeaders });
    return response.data;
  } catch (error) {
    console.error('Error fetching job listings:', error);
    return [];
  }
};
