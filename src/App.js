import React, {Component} from 'react';
import {HashRouter as Router, Switch, Route, Navigate} from 'react-router-dom';
import Pathfinder from "./pathfinderComponents/pathfinder";
import Home from "./homecomponents/home";
import Seive from "./primeComponents/seive";
import Sort from "./sortComponents/sort";
import Queenb from "./queenComponents/queen";
import ConvexHull from "./convexHullComponents/convexHull";
import BinarySearch from "./binarySearchComponent/binarySearch";
import RecursiveSort from "./recursiveSortComponents/recursiveSort";
import Queue from './quecomponents/que'
import Sudoku from './sudokucomponents/sudoku'
import {BrowserRouter} from 'react-router-dom';




class App extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        console.log(window.innerHeight,"  ",window.innerWidth);
    }

    render() {
        return (

            // <Home/>
            
            <Router basename='/'>
              <Switch>
                    <Route path='/pathfinder'  component={Pathfinder}/>
                    <Route path='/prime' component={Seive}/> 
                    <Route path='/sort' component={Sort}/>
                    <Route path='/nqueen' component={Queenb}/>
                    <Route path='/convexhull' component={ConvexHull}/>
                    <Route path='/binarysearch' component={BinarySearch}/>
                    <Route path='/recursivesort' component={RecursiveSort}/>
                    <Route path='/queue' component={Queue}/>
                    <Route path='/sudoku' component={Sudoku}/>
                    <Route path='/' component={Home}/>
                </Switch> 
            </Router>
        );
    }
}

export default App;
