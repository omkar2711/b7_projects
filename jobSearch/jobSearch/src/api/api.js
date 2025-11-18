import axios from 'axios';

const fetchJob = async (newJob) => {
    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
            query: newJob,
            page: '3',
            num_pages: '3',
            country: 'in',
            date_posted: 'all',
        },
        headers: {
            'x-rapidapi-key': '2aa4739081mshbbb1bcfd9ad5752p18e5b8jsn64479d40b7f6',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export {
    fetchJob
}