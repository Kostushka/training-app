import axios from 'axios';

export const getApiResource = async (limit = 10, page = 1) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
            _limit: limit,
            _page: page,
        },
    });
    return res;
};
export const getPostPage = async (id) => {
    const res = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/' + id
    );
    return res;
};
export const getPostComments = async (id) => {
    const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return res;
};
