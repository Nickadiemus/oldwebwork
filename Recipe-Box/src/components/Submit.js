import React, {Component} from 'react';

class Submit extends Component {

    constructor(props){
      super(props)
      this.toggle.bind(this)
      this.state = {
        overlay: false
      }

    }

    toggle(){
      this.setState({
        overlay: !this.state.overlay
      })
    }

    renderOverlayForm(){

      if(this.state.overlay){
        return(
          <div id = "overlay">
            <div className = "boxWrapper">
              <div className = "submitBox">
                <form className = "formBox" onSubmit={this.handleInputs.bind(this)}>
                    <div>
                        <div >
                            <input className="formSection" type="text" placeholder=" Recipe Name" ref="createRecipe"/>
                        </div>
                        <div >
                            <input className="formSection" type="text" placeholder=" Ingrediants" ref="createIngrediants"/>
                        </div>
                    </div>
                    <button>Submit</button>
                    <button onClick={this.toggle.bind(this)}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        );
      }


    }

    render() {
        console.log(this.state.overlay)
        return (

          <div>
            <button className = "addRecipeButton" onClick = {this.toggle.bind(this)}>Add Recipe</button>
            {
              this.renderOverlayForm()
            }
          </div>

        );
    }
    handleInputs(event) {
        event.preventDefault();
        //calls the passed down handleInputs function from App.js to update recipie List
        this.props.createRecipe(this.refs.createRecipe.value, this.refs.createIngrediants.value);
        this.refs.createRecipe.value = '';
        this.refs.createIngrediants.value = '';

    }
}



export default Submit
