import React, {Component} from 'react';

//helper imports
import _ from 'lodash';
import RecipeItem from './RecipeItem';

class RecipeList extends Component {

    //maps through the JSON Recipes and extracts the data into the RecipeItem Component to then render onscreen
    renderRecipeItems() {
        const props = _.omit(this.props, 'temp');
        var temp = this.props.recipe;
        //loops through recipe list -> temp and passes the values into each RecipeItem
        return _.map(temp, (temp, i) =>
          <RecipeItem  key={i} {...temp} {...props}/>
        );
    }

    render() {
        return (
            <div>
                {this.renderRecipeItems()}
            </div>
        );
    }
}

export default RecipeList
