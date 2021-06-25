import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://secret-coast-88373.herokuapp.com/api/posts/')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 py-10 pt-24 h-auto">
                {
                    posts?.map(post => <Card key={post._id} post={post} />)
                }
            </div>
            <Footer />
        </>
    );
};

export default Home;