import React, {Component} from 'react';
import { SearchBar } from 'react-native-elements';
import {searchMulti} from '../actions/movieactions';
import {connect} from 'react-redux'; 
//import SearchDisplay from './SearchDisplay';
import {url,api_key,language,page} from '../../constants';
import { List, ListItem } from 'react-native-elements';
import {FlatList, Button} from 'react-native';


export default class SearchComponent extends Component {


    state = {
      search: '',
      data:''
    };
  
    handleButton = () => {
        this.props.navigation.navigate('HomePage')
    }

    updateSearch = search => {
      console.log("Search STring ", search)
      this.setState({ search });
      fetch(`${url}/search/movie?api_key=${api_key}&language=${language}&query=${this.state.search}&page=${page}&include_adult=false`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.setState({
            data: jsonResponse.results,
        });
      })
      .catch((error) => {
          console.error(error)
      })
    };

   

    render() {
      return (
        <>
        <SearchBar
          searchIcon={{ size: 24 }}
          text={this.state.search}
          placeholder="Type Here..."
          onChange={e => console.log(e.nativeEvent)}
          onChangeText={(text) => this.updateSearch(text)}
          value={this.state.search}
        />

         <>
         <FlatList          
                data={this.state.data}          
                renderItem={({ item }) => ( 
                <ListItem                            
                    title={`${item.title}`}                          
                     leftAvatar={{ source: {uri: `http://image.tmdb.org/t/p/w342/${item.poster_path}`} }} 
                    containerStyle={{ borderBottomWidth: 0 }} 
                />          
                )}                             
                /> 
            
            </>


            <Button
                    title="Go Back To Main Page"
                    onPress={() =>{
                        this.handleButton()
                    }}
            />
        </>
      );
    }
  }

  

  