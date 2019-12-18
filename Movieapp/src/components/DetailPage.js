import React, { useState, useEffect} from 'react'
import {Text,View, Image, Button, ScrollView} from 'react-native'
import {url,api_key,language} from '../../constants';

import { withNavigation } from 'react-navigation';
import VideoFile from './VideoFile';


const DetailPage = (props) => {

      const [detail, setdetail] = useState(0);
      const {state} = props.navigation;
      useEffect(() => {
        
        if(state.params.category === 'Tv'){
            fetch(`${url}/tv/${state.params.id}?api_key=${api_key}&language=${language}`)
            .then((response) => response.json())
            .then((jsonResponse) => {
            setdetail(jsonResponse);
        })
        .catch((error) => {
            console.error(error)
        })
        }
        else{
            fetch(`${url}/movie/${state.params.id}?api_key=${api_key}&language=${language}`)
            .then((response) => response.json())
            .then((jsonResponse) => {
            setdetail(jsonResponse);
        })
        .catch((error) => {
            console.error(error)
        })
       }
        
      });
        return(
            <>
            <ScrollView>
             <View>
                 <View>
                 <Text style={{color:'black', justifyContent:'center', fontSize:30, textAlign:'center'}}> Details Page </Text>
                 <Text style={{color:'black', justifyContent:'center', fontSize:30, textAlign:'center'}}>  </Text>
                 </View>
               <Image
                style={{width: 300, height: 300, alignSelf: 'center'}}
                source={{uri:`http://image.tmdb.org/t/p/w342/${detail.poster_path}`}}
                /> 
                
             <Text style={{color:'black', justifyContent:'center', fontSize:30, textAlign: 'center'}}> {detail.title || detail.name} </Text>
             <Text style={{color:'black', justifyContent:'center', fontSize:20, textAlign:'center'}}>  </Text>
             <Text style={{color:'black', justifyContent:'center', fontSize:20, textAlign: 'left'}}> {detail.overview} </Text>
             
             </View>
             <Button
                    title="Play Video"
                    onPress={() =>{
                       props.navigation.navigate('VideoFile');
                    }}
            />
            </ScrollView>
            </>
           
        )
    
}

export default withNavigation(DetailPage)