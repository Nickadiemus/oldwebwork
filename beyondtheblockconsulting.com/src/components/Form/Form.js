/** main import(s)                                                      */
import React, { Component } from 'react';

/** helper import(s)                                                    */

/** component import(s)                                                 */

/** style import(s)                                                     */
import './Form.scss';

/*/
 *  Component: Form
 *  @props {?}
 *  @EventHandler(s): Submit
 *  @Description: This form will allow the user to submit information
 *  to
/*/
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      company: '',
      subject: '',
      phone: '',
      comments: '',
    };
  };

  _handleChangeEvent = (val) => {
    this.setState({
      [val.target.name]: val.target.value,
    });
  };

  render() {
    return (
      <form className = "form-contact" action = "https://formspree.io/nicholasgsladic@gmail.com" method = "POST">
          <div className="form-row">
            <div className = "form-group col-md-6">
              <label forhtml="fname">First Name</label>
              <input
                type="text"
                name = "fname"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="First Name"
                onChange = {this._handleChangeEvent}
                value = {this.state.fname}
                required
              />
            </div>
            <div className = "form-group col-md-6">
              <label forhtml="lname">Last Name</label>
              <input type="text"
                name = "lname"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Last Name"
                onChange = {this._handleChangeEvent}
                value = {this.state.lname}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className = "form-group col-md-4" >
              <label forhtml="exampleInputEmail">Email Address</label>
              <input
                type="email"
                name = "email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Email"
                onChange = {this._handleChangeEvent}
                value = {this.state.email}
                required
              />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className = "form-group col-md-4" >
              <label forhtml="exampleInputEmail">Phone</label>
              <input
                type="phone"
                name = "phone"
                className="form-control"
                aria-describedby="phonehelp"
                placeholder="Phone Number"
                onChange = {this._handleChangeEvent}
                value = {this.state.phone}
                required
              />
            </div>
            <div className = "form-group col-md-4" >
              <label forhtml="exampleInputEmail">Company</label>
              <input
                type="text"
                name = "company"
                className="form-control"
                aria-describedby="phonehelp"
                placeholder="Company Name"
                onChange = {this._handleChangeEvent}
                value = {this.state.company}
                required
              />
            </div>
          </div>
          <div className = "form-row">
            <div className = "form-group col">
              <label forhtml="exampleInputEmail">Subject</label>
              <input
                type="text"
                name = "subject"
                className="form-control"
                aria-describedby="phonehelp"
                placeholder="Subject"
                onChange = {this._handleChangeEvent}
                value = {this.state.subject}
                style = {{zIndex: '2'}}
              />
            </div>
          </div>
          <div className="form-row">
            <div className = "form-group col" >
              <label for="exampleTextarea">Comments</label>
              <textarea
                name = "comments"
                className="form-control"
                rows="5"
                onChange = {this._handleChangeEvent}
                value = {this.state.comments}
                style = {{zIndex: '2'}}
                required
                >
              </textarea>
            </div>
          </div>

          <div className="form-check form-group">
            <input
              type="checkbox"
              name = "checkbox"
              className="form-check-input"
              onChange = {this._handleChangeEvent}
              checked

            />
            <label
              className="form-check-label"
              forhtml="exampleCheck1" >
              Recieve Content from us
            </label>
          </div>
          <button type="submit" className="btn-custom btn form-group" >Submit</button>
        </form>
    );
  }
}

export default Form;
