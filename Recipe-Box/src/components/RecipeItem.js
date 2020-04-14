//main import(s)
import React, {Component} from 'react';
//helper import(s)
import {Collapse, Button, CardBlock, Card} from 'reactstrap';



class RecipeItem extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false,
            isEditing: false
        };
    }
    //togles collapse motion
    toggle() {
        this.setState({
            collapse: !this.state.collapse
        });
    }
    //renders the state of the buttons between editing
    renderState() {

        if (this.state.isEditing) {
            return (
                <div>
                    <Button onClick={this.onSave.bind(this)}>Save Changes</Button>
                    <Button onClick={this.onDelete.bind(this)}>Delete</Button>
                    <Button onClick={this.toggleEdit.bind(this)}>Cancel</Button>
                </div>
            );
        }
        return (
            <div>
                <Button onClick={this.toggleEdit.bind(this)}>Edit</Button>
                <Button onClick={this.onDelete.bind(this)}>Delete</Button>
            </div>
        )
    }

    renderRecipe() {
        if (!this.state.isEditing) {
            return (
                <div className = "recipeBackground">
                    <Button onClick={this.toggle} style={{
                        marginBottom: '1rem'
                    }}>
                        <h4>{this.props.recipeName}</h4>
                    </Button>
                    <Collapse className = "RecipeBoxWrapper" isOpen={this.state.collapse}>
                        <Card className="RecipeBox">
                            <CardBlock>
                                <h2>Ingrediants</h2>
                                <p className="ingrediantsSection">{this.props.ingrediants}</p>
                            </CardBlock>
                            {this.renderState()}
                        </Card>
                    </Collapse>
                </div>
            );
        }
        return (
          <div className = "recipeBackground">
            <form onSubmit={this.onSave.bind(this)}>
                <input className="formSection" type="text" placeholder=" Recipe Name" ref="newRecipe"/>
                <Collapse isOpen={this.state.collapse}>
                    <Card className="RecipeBox">
                        <CardBlock>
                            <h2>Ingrediants</h2>
                            <input className="formSection" type="text" placeholder=" Recipe Ingrediants" ref="newIngrediant"/>
                        </CardBlock>
                        {this.renderState()}
                    </Card>
                </Collapse>
            </form>
          </div>

        );
    }

    render() {
        console.log(this.props.recipe);
        return (
            <div>
                {this.renderRecipe()}
            </div>
        )
    }

    //toggles editing state
    toggleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        });
    }
    onSave(event) {
        event.preventDefault();
        const oldRecipe = this.props.recipeName;
        const newRecipe = {
            recipeName: this.refs.newRecipe.value,
            ingrediants: this.refs.newIngrediant.value
        };
        this.props.saveEdit(oldRecipe, newRecipe);
        this.setState({isEditing: false})
    }

    onDelete(event) {
        event.preventDefault();
        this.props.deleteRecipe(this.props.recipeName);
    }
}

export default RecipeItem
