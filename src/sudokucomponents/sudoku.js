import React, { Component } from 'react';
import './style.css';
import Header from './navbar';
import MainWindow from './MainWindow';
import RightBox from './RightBox';
import CalculateOptions from './CalculateOptions';
import CalculateUniqueOptions from './CalculateUniqueOptions';
import IsSolutionCorrect from './IsSolutionCorrect';
import BruteSolver from './BruteSolver';
import { grid_templates } from './grid_templates';

class App extends Component {

  constructor() {
    super();
    this.newGrid = this.newGrid.bind(this);
    this.updateGrid = this.updateGrid.bind(this);
    this.calcOptions = this.calcOptions.bind(this);
    this.calcUniqueOptions = this.calcUniqueOptions.bind(this);
    this.checkSolution = this.checkSolution.bind(this);
    this.bruteSolve = this.bruteSolve.bind(this);

    this.bruteSolver = new BruteSolver();
    this.isSolutionCorrect = new IsSolutionCorrect();
    //get initial state
    this.state = {
      grid: grid_templates.grid_empty,
      gridOptions: [],
      uniqueOptions: [],
      solved: null
    };
  }

  // clones 81 len array from grid_templates file
  newGrid(grid_id = 'grid_empty') {
    
    const grid = [...grid_templates[grid_id]];

    let solved;

    this.setState({ grid });
    this.setState({ solved });
  }

  updateGrid(vert, horiz, value) {
    const grid = [...this.state.grid];
    if (value === "") grid[vert*9 + horiz] = value;
    else grid[vert*9 + horiz] = 1 * value;

    let solved;

    this.setState({ grid });
    this.setState({ solved });
  }

  calcOptions() {
    const gridOptions = CalculateOptions(this.state.grid);
    this.setState({ gridOptions });
    console.table(gridOptions);
  }

  calcUniqueOptions() {
    const gridOptions = CalculateOptions(this.state.grid);
    const uniqueOptions = CalculateUniqueOptions(gridOptions);
    this.setState({ uniqueOptions });
    console.table(uniqueOptions);
  }

  bruteSolve() {
    const { grid } = this.bruteSolver.solve(this.state.grid);
    this.setState({ grid });
  }

  checkSolution() {
    let solved = false;
    if (this.isSolutionCorrect.checkGrid(this.state.grid)) {
      console.log("The solution is correct!")
      solved = true;
    } else {
      console.log("This is not the correct solution!")
    }
    this.setState({ solved });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="sudokubody">
          <MainWindow
            grid={this.state.grid}
            solved={this.state.solved}
            updateGrid={this.updateGrid}
            newGrid={this.newGrid}
            checkSolution={this.checkSolution}
            
          />
          <RightBox
            calcOptions={this.calcOptions}
            calcUniqueOptions={this.calcUniqueOptions}
            bruteSolve={this.bruteSolve}
          />
        </div>
      </div>
    );
  }
}

export default App;
