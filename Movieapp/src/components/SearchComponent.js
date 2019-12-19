import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import { url, api_key, language, page, imageUrl } from '../../constants'; // importing all the constants
import { ListItem, Card } from 'react-native-elements';
import { FlatList, Button} from 'react-native';

// Te Seach Component implements Search Functionality
export default class SearchComponent extends Component {

   // A local state for the search String, and data fro api
    state = {
      search: '',
      data:''
    };
  
    // Navigation back to HomePage
    handleButton = () => {
        this.props.navigation.navigate('HomePage')
    }

    /*
      This function set the search String to the state
      It fetches thee API based on the search String, gets the data and stores it in data(local state)
      The API used id '/search/movie' provided with APIkey and search String
    */
    updateSearch = search => {
      this.setState({ search }); // updates the local state
      fetch(`${url}/search/movie?api_key=${api_key}&language=${language}&query=${this.state.search}&page=${page}&include_adult=false`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.setState({
            data: jsonResponse.results, // updates the data i local state
        });
      })
      .catch((error) => {
          console.error(error)
      })
    };

   

    /* rendering of Search Bar and Results
        The result is given as a List with
           -- title 
           -- Image
    */
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
              <Card containerStyle={{padding: 0}} >
                <ListItem onPress={() => this.props.navigation.navigate('DetailPage',{id: `${item.id}`, category: 'Movie'})}                         
                    title={`${item.title}`}                       
                    leftAvatar={{ source: {uri: `${imageUrl}/${item.poster_path}`}, rounded: false }} 
                    containerStyle={{ borderBottomWidth: 0 }} 
                /> 
              </Card>         
              )}                             
            /> 
          </>
          <Button
              title="Go Back To Main Page"
              onPress={() => { this.handleButton() }}
          />
        </>
      );
    }
  }

 

  