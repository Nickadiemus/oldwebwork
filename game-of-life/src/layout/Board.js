//main imports
import React ,{Component} from 'react';

//secondary imports
import _ from 'lodash';
import Cell from '../components/Cell';
import BottomInput from '../components/BottomInput';
import TopInput from '../components/TopInput';

var board = []
var size = 2

class Board extends Component {

  //board State
  constructor(){
    super();
    board = this.populateBoard(size)
    this.state = {
      board: board,
      size: size,
      speed: 150

    }
  }

  // TODO: have the  board render based on input size

  populateBoard(size){
    board = [];
    if(size === 1){
      for(var i = 0; i < 30; i++){
        var cell = Math.abs(Math.floor((Math.random() * 2) - 1 ));
        board.push(cell);
      }
    }
    else if(size === 2){
      for(var i = 0; i < 50; i++){
        var cell = Math.abs(Math.floor((Math.random() * 2) - 1 ));
        board.push(cell);
      }
    }
    else{
      for(var i = 0; i < 70; i++){
        var cell = Math.abs(Math.floor((Math.random() * 2) - 1 ));
        board.push(cell);
      }
    }

    return board

  }

  //50x50 board for now
  renderBoard(){
    return _.map(this.state.board,(board, i) =>
      <Cell key = {i} />
    );
  }

  render()  {
    return(
      <div>
        <div>
          <TopInput setSpeed = {this.setSpeed.bind(this)}/>
        </div>
        <div>
          <table className = "table">
            <tbody>
              {this.componentDidMount()}
            </tbody>
          </table>
        </div>
        <div>
          <BottomInput changeSize = {this.changeSize.bind(this)} changeSpeed = {this.changeSpeed.bind(this)} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("component has rendered");
    console.log(this.state.board);
    return this.renderBoard(this.state.size);
  }

  changeSize(size){
    console.log(size);
    this.setState({
      size: size
    });
    console.log("populating");
    var newBoard = this.populateBoard(size);

    this.setState({
      board: newBoard
    });

  }
  changeSpeed(speed){
    this.setState({
      speed: speed
    });
  }

  setSpeed(){
    console.log((this.state.speed));
    return this.state.speed;
  }

}

export default Board
