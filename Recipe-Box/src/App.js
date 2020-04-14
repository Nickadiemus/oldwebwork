//main imports
import React, {Component} from 'react';

//helper imports
import _ from 'lodash';
import Footer from './components/Footer';
import RecipeList from './components/RecipeList';
import Submit from './components/Submit';
import './App.css';

// TODO: Style the webpage to be more UI Friendly

var recipes = [
    {
        recipeName: 'Hamburger',
        ingrediants: 'ground meat, seasoning'
    }
];


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes
        };
    }

    getLocal(){
      var temp = localStorage.getItem('recipe');
      console.log("this is the getLocal() " + JSON.parse(temp));
      return JSON.parse(temp);
    }

    render() {

        return (
          <div>
            <div className="App">
                <div className="container">
                    <h2>Recipe Box</h2>
                    <div>
                        <RecipeList recipe={this.getLocal()} saveEdit={this.saveEdit.bind(this)} deleteRecipe ={this.deleteRecipe.bind(this)}/>
                    </div>
                </div>
                <div className="AddRecipe"></div>
            </div>
            <div>
                <Submit createRecipe={this.addRecipe.bind(this)}/>
            </div>
            <div>
              <Footer />
            </div>
          </div>
        );
    }
    //pushes the inputs from the two inputs in Submit Components
    addRecipe(r, i) {
        //retrieves localStorage JSON item key "recipe"
        var temp = localStorage.getItem('recipe');
        //converts Local storage JSON into JS object
        temp = JSON.parse(temp);
        //pushes user input
        temp.push({recipeName: r, ingrediants: i});
        //saves new recipe JSON list in localbrowswer storage
        localStorage.setItem('recipe',JSON.stringify(temp));
        this.state.recipes.push({recipeName: r, ingrediants: i});
        this.setState({recipes: this.state.recipes});
    }

    deleteRecipe(deleteRecipe) {
        //retrieves localStorage JSON item key "recipe"
        var temp = localStorage.getItem('recipe')
        //converts Local storage JSON into JS object
        temp = JSON.parse(temp);
        //lodash remove
        _.remove(temp, recipe => recipe.recipeName === deleteRecipe);
        //saves new recipe JSON list in localbrowswer storage
        localStorage.setItem('recipe',JSON.stringify(temp));
        this.setState({recipes: this.state.recipes});
    }

    saveEdit(oldRecipe, newRecipe) {
        //retrieves localStorage JSON item key "recipe"
        var temp = localStorage.getItem('recipe');
        //converts Local storage JSON into JS object
        temp = JSON.parse(temp);
        //Lodash finds JS object
        const foundRecipe = _.find(temp, recipe => recipe.recipeName === oldRecipe);
        foundRecipe.recipeName = newRecipe.recipeName;
        foundRecipe.ingrediants = newRecipe.ingrediants;
        //saves new recipe JSON list in localbrowswer storage
        localStorage.setItem('recipe',JSON.stringify(temp));
        this.setState({recipes: this.state.recipes});
    }

}

export default App;
