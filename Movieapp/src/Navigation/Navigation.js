import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from '../components/HomePage';
import SearchComponent from '../components/SearchComponent';
import DetailPage from '../components/DetailPage';
import Movie from '../components/Movie';
import Tv from '../components/Tv';
import VideoFile from '../components/VideoFile';


//Creating Stack Navigator which helps for Navigation. Manages all the screens
const RootStack = createStackNavigator({ 
    HomePage: {screen: HomePage},
    SearchComponent: {screen: SearchComponent},
    Movie: {screen: Movie},
    Tv: {screen: Tv},
    DetailPage: {screen: DetailPage},
    VideoFile: {screen: VideoFile}
 },{
    initialRouteName: 'HomePage', //initial Display Page is HomePage
    headerMode: 'none' 
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;