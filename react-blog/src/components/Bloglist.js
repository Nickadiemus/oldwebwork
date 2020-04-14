//main import(s)
import React, {Component} from 'react';

//secondary import(s)
import _ from 'lodash';
import BlogInstance from './Blogs/BlogInstance';

class BlogList extends Component {
    renderBlogs() {
        const props = _.omit(this.props, 'temp');
        var temp = this.props.blogs;

        return _.map(temp, (temp, i) => <BlogInstance key={i} {...temp} {...props}/>);
    }

    render() {

        return (
            <div>
                {this.renderBlogs()}
            </div>
        )
    }
}

export default BlogList;
