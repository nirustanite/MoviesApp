import React, {Component} from 'react';
import { SearchBar } from 'react-native-elements';
import {searchMulti} from '../actions/movieactions';
import {connect} from 'react-redux'; 


class SearchComponent extends Component {

    state = {
      search: '',
    };
  
    updateSearch = search => {
   
      this.setState({ search });
      this.props.searchMulti(this.state.search)
    };

    render() {
      const { search } = this.state;
  
      return (
        <>
        
        <SearchBar
          searchIcon={{ size: 24 }}
          placeholder="Type Here..."
          onChangeText={(text) => this.updateSearch(text)}
          value={search}
        />

        {this.props.searchResult && <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList          
                data={this.props.searchResult.results}          
                renderItem={({ item }) => ( 
                <ListItem              
                    roundAvatar              
                    title={`${item.title}`}  
                    subtitle={item.email}                           
                    avatar={{ uri: `http://image.tmdb.org/t/p/w342/${item.poster_path}` }}   
                    containerStyle={{ borderBottomWidth: 0 }} 
                />          
                )}          
                keyExtractor={item => item.email}  
                ItemSeparatorComponent={this.renderSeparator} 
                ListHeaderComponent={this.renderHeader}                             
        />            
        </List>}
        </>
      );
    }
  }

  const mapStateToProps = (state) => {
      return{
          searchResult: state.searResult
      }
  }


  export default connect(mapStateToProps,{searchMulti})(SearchComponent)