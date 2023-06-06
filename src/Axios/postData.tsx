import axios from 'axios';
import React from 'react';
const newPost = {
    userId: 1,
    title: 'A new post',
    body: 'This is the body of the new post'
};

const PostData = async () => {
    try {
        const resp = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

export default PostData;