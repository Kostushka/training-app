import axios from 'axios';

export const getApiResource = async () => {
    try {
        const res = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        );
        return res.data;
    } catch (e) {
        console.log(e);
    }
};
