//main import(s)
import React, {Component} from 'react';

//secondary import(s)
import jwtDecode from 'jwt-decode';
import '../../style/BlogItem.css';
class BlogItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            title: '',
            body: '',
            errors: {},
            isLoading: false

        }

    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        var user = localStorage.getItem('jwtToken');
        user = jwtDecode(user);
        var temp = localStorage.getItem('blogs');
        if (temp === null) {
            var newBlog = [
                {
                    author: user.username,
                    title: this.state.title,
                    body: this.state.body
                }
            ];

            localStorage.setItem('blogs', JSON.stringify(newBlog));
            this.context.router.history.push('/');
        } else {
            temp = JSON.parse(temp);
            var newBlog = {
                author: user.username,
                title: this.state.title,
                body: this.state.body
            }
            temp.push(newBlog);

            console.log(temp);
            localStorage.removeItem('blogs');

            localStorage.setItem('blogs', JSON.stringify(temp));

            this.context.router.history.push('/');
        }
    }

    render() {
        const {title, body, errors, isLoading} = this.state;
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="container jumbotron">
                    <h1 className="text-center header">Create Post</h1>
                    <div className="form-group row">
                        <div className="col-md-3 text-right">
                            <label className="control-label">
                                <h4>Title</h4>
                            </label>
                        </div>
                        <div className="col-md-4">
                            <input type="text" name="title" label="Title" value={this.state.title} onChange={this.onChange.bind(this)} className="form-control" placeholder="Title"/>
                        </div>
                    </div>
                    <div>
                        <br/>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-3 text-right">
                            <label className="control-label">
                                <h4>Body</h4>
                            </label>
                        </div>
                        <div className="col-md-6">
                            <textarea type="text" name="body" label="Blog" value={this.state.body} onChange={this.onChange.bind(this)} className="form-control" placeholder="Body"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-3 text-left">
                            <button className="btn btn-primary">Create</button>
                        </div>
                    </div>

                </div>
            </form>
        )
    }
}

BlogItem.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default BlogItem
