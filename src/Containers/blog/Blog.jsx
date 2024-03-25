import React from 'react'; 
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';
import { Article } from '../../Components';

const Blog = () => (
    <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading">
            <h1 className="gradient__text">Much is unfolding, <br /> We're documenting it on our blog.</h1>
        </div>
        <div className="gpt3__blog-container">
            <div className="gpt3__blog-container_groupA">
                <Article imgUrl={blog01} date="Sep 26, 2021" text="Artificial Intelligence shape the future. Let's explore the wonders it holds." />
            </div>
            <div className="gpt3__blog-container_groupB">
                <Article imgUrl={blog02} date="Sep 26, 2021" text="Artificial Intelligence shape the future. Let's explore the wonders it holds." />
                <Article imgUrl={blog03} date="Sep 26, 2021" text="Artificial Intelligence shape the future. Let's explore the wonders it holds." />
                <Article imgUrl={blog04} date="Sep 26, 2021" text="Artificial Intelligence shape the future. Let's explore the wonders it holds." />
                <Article imgUrl={blog05} date="Sep 26, 2021" text="Artificial Intelligence shape the future. Let's explore the wonders it holds." />
            </div>
        </div>
    </div>
);

export default Blog;