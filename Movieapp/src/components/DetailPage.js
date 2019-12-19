import React, { useState, useEffect } from 'react' 
import { Text, View, Image, Button, ScrollView } from 'react-native'
import { url, api_key, language, imageUrl } from '../../constants'; // The contants used in the program
import { withNavigation } from 'react-navigation'; // to perform Navigation

//it displays the detail page of the movies an Tv series. 
const DetailPage = (props) => {

      // using Use State in hooks , initialize the state
      const [detail, setdetail] = useState(0);

      // data sent during navigation
      const {state} = props.navigation;

      /* In react hooks useEffect is similar to ComponentDidMount. 
         It is the first process to load when the detail Page is rendered.
          -- It cheks whether it's TV or Mobile
          -- if(Tv) =>  fetchs from api /tv/{tv.id}
          -- if(Movie) => fetches from api /movie/{movie.id}
          -- Stores the response in local state (detail)
      */
      useEffect(() => {
        if(state.params.category === 'Tv'){
            fetch(`${url}/tv/${state.params.id}?api_key=${api_key}&language=${language}`)
            .then((response) => response.json())
            .then((jsonResponse) => {
            setdetail(jsonResponse);
        })
        .catch((error) => {
            console.error(error)
        })}
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

      // rendering part in functional component
      /* 
         Details Page is Displayed with
           -- Title : Detail Page
           -- Image : Image of the movie/tv
           -- Overview: A short Description
           -- Rating : Rating for the movie/Tv
           -- Button:  To Play Video
      */
      return(
            <>
            <ScrollView>
             <View>
                <Text style={{color:'black', justifyContent:'center', fontSize:30, textAlign:'center'}}> Details Page </Text>
                <Image
                    style={{width: 300, height: 300, alignSelf: 'center'}}
                    source={{uri:`${imageUrl}/${detail.poster_path}`}}
                /> 
                <Text style={{color:'black', justifyContent:'center', fontSize:30, textAlign: 'center'}}> {detail.title || detail.name} </Text>
                <Text style={{color:'black', justifyContent:'center', fontSize:20, textAlign: 'left'}}> {detail.overview} </Text>
                <Text style={{color:'black', justifyContent:'center', fontSize:25, textAlign: 'left'}}> Rating :</Text>
                <Text style={{color:'black', justifyContent:'center', fontSize:30, textAlign: 'left'}}> {detail.vote_average} </Text>
                <Button
                    title="Play Video"
                    onPress={() =>{
                       props.navigation.navigate('VideoFile');
                    }}
                />
             </View>
            </ScrollView>
            </>
        )
}

// Added withNavigation inorder to enable navigation to Details Page
export default withNavigation(DetailPage)