import React, {Component} from 'react';
import jwtDecode from 'jwt-decode';

import '../../style/BlogInstance.css';

class BlogInstance extends Component {

    constructor(props) {
        super(props)
        this.state = ({isEditing: false})
    }

    checkAuthor() {
        var check = localStorage.getItem('jwtToken');
        var user = jwtDecode(check);
        //uses jwtToken to verify if user is the correct author of blog post
        if (user.username === this.props.author) {
            this.toggleEdit();
        } else {
            console.log("false");
        }
    }

    toggleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }

    deleteBlog() {
        this.props.deleteBlog(this.props.author);
    }

    saveBlog(e) {
        e.preventDefault();
        const oldBlog = this.props.title
        const newBlog = {
            author: this.props.author,
            title: this.refs.newTitle.value,
            body: this.refs.newBody.value
        }
        this.props.saveEdit(oldBlog, newBlog);
        this.setState({isEditing: false});
    }

    renderButtons() {
        if (this.state.isEditing) {
            return (
                <div>
                    <button className="btn btn-primary" onClick={this.saveBlog.bind(this)}>Save</button>
                    <button className="btn btn-danger" onClick={this.deleteBlog.bind(this)}>Delete</button>
                    <button className="btn btn-primary" onClick={this.toggleEdit.bind(this)}>Cancel</button>
                </div>
            );
        } else {
            return (
                <div className="text-right">
                    <button className="btn btn-primary" onClick={this.checkAuthor.bind(this)}>Edit</button>
                </div>
            )
        }
    }
    renderBlogs() {
        var check = localStorage.getItem('jwtToken');
        if (check === null) {
            return (
                <div className="container">
                    <div className="panel panel-default">
                        <div className="panel-heading text-left">
                            <div className="row">
                                <div className="col-md-9">
                                    <h2 className="panel-title">{this.props.title}</h2>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                        <div className="panel-heading text-left">
                            <strong>Author:</strong>
                            <i>{this.props.author}</i>
                        </div>
                        <div className="panel-body">
                            {this.props.body}
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.isEditing) {
            return (
                <div className="container">
                    <form>
                        <div className="panel panel-default">
                            <div className="panel-heading text-left">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h2 className="text-left">
                                            <input type="text" name="title" placeholder={this.props.title} ref="newTitle"/>
                                        </h2>
                                    </div>
                                    <div className="col-md-3">
                                        {this.renderButtons()}
                                    </div>
                                </div>
                            </div>
                            <div className="panel-body">
                                <input type="text" name="body" placeholder={this.props.body} ref="newBody"/>
                            </div>
                            <div className="panel-heading text-left">
                                <strong>Author:
                                </strong>
                                <i>{this.props.author}</i>
                            </div>
                        </div>
                    </form>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <div className="panel panel-default">
                        <div className="panel-heading text-left">
                            <div className="row">
                                <div className="col-md-9">
                                    <h2 className="text-left">{this.props.title}</h2>
                                </div>
                                <div className="col-md-3">
                                    {this.renderButtons()}
                                </div>
                            </div>
                        </div>
                        <div className="panel-body">
                            {this.props.body}
                        </div>
                        <div className="panel-heading text-left">
                            <strong>Author:
                            </strong>
                            <i>{this.props.author}</i>
                        </div>
                    </div>
                </div>
            );
        }
    }

    render() {
        console.log(this.props);
        return (
            <div>
                {this.renderBlogs()}
            </div>
        )
    }
}

export default BlogInstance;
