import React, {Component} from 'react';

import NavigationBar from '../components/NavigationBar';
import BlogItem from '../components/Blogs/BlogItem';

class NewBlog extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <BlogItem/>
            </div>
        )
    }
}

export default NewBlog;
