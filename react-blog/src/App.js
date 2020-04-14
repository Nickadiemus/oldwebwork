//main imports
import React, {Component} from 'react';
import FlashMessagesList from './flash/FlashMessagesList'
import './style/App.css';

//secondary imports
import NavigationBar from './components/NavigationBar';
import _ from 'lodash';
import BlogList from './components/Bloglist';

var blogs = [
    {
        author: 'user1',
        title: 'test',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
    }, {
        author: 'user2',
        title: 'test',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
    }
];

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            blogs
        };
    }
    //gets local storage
    getLocal() {
        var temp = localStorage.getItem('blogs');
        return JSON.parse(temp);
    }

    checkInitialized() {
        if (localStorage.getItem('blogs')) {
            console.log(true);
            this.getLocal();
        } else {
            localStorage.setItem('blogs', JSON.stringify(blogs))
        }
    }

    render() {
        return (
            <div className="App">
                <NavigationBar/>
                <FlashMessagesList/>
                <BlogList blogs={this.getLocal()} deleteBlog={this.deleteBlog.bind()} saveEdit={this.saveEdit.bind(this)}/> {this.props.children}
            </div>
        );
    }

    componentDidMount() {
        var temp = localStorage.getItem('blogs');
        temp = JSON.parse(temp);
        this.setState({blogs: temp})
    }

    deleteBlog(blogName) {
        //retrieves localStorage JSON item key "blogs"
        var temp = localStorage.getItem('blogs')
        //converts Local storage JSON into JS object
        temp = JSON.parse(temp);
        //lodash remove
        _.remove(temp, blog => blog.author === blogName);
        //saves new BlogInstance in JSON and then saves list in localbrowswer storage
        localStorage.setItem('blogs', JSON.stringify(temp));
    }

    saveEdit(oldBlog, newBlog) {
        //retrieves localStorage JSON item key "blogs"
        var temp = localStorage.getItem('blogs')
        //converts Local storage JSON into JS object
        temp = JSON.parse(temp);
        //finds blog object
        const foundBlog = _.find(temp, blog => blog.title === oldBlog)
        //make changes to the title and body
        foundBlog.title = newBlog.title;
        foundBlog.body = newBlog.body;
        //saves to local storage
        localStorage.setItem('blogs', JSON.stringify(temp));
        //reloads DOM
        this.setState({blogs: blogs})
    }

}

export default App;
