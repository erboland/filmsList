import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FavoriteFilms from '../components/FavoriteFilms';

class App extends Component {
  constructor() {
    super()
    this.state = {
  films: [],
  searchField: ''
    }
}
  
  componentDidMount() {
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(film=> {
        const filmList = [];
        for (var i=0; i<=24; i++){
          filmList.push(film[i]);
        }
        this.setState({films: filmList});
      });
      
  }
  
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value})
  }
  
  render() {
    const {searchField, films} = this.state
    const filteredFilms = films.filter(film => {
      return film.name.toLowerCase().includes(searchField.toLowerCase());
    }); 
    var favFilms = filteredFilms.filter(film=>film.fav===true);
    return !films.length ? <h1>Loading...</h1>
      : (
        <Router>
        <div className="tc">
          <Link to="/"><h1 className='f2'>Top Movies</h1></Link>
        <SearchBox searchChange = {this.onSearchChange}/>
        <Link to="/favorite"><h3 className='f2'>Favorites</h3></Link>
        <Scroll>
          
            <Route exact path='/' component={props=><CardList {...props} films = {filteredFilms}/>}/>
            <Route path='/favorite' component={props=><FavoriteFilms {...props} films={favFilms}/>}/>
       
        </Scroll> 
        </div>
        </Router>
   
    
  );
      
     
  }
 
}
export default App;