import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from './HomePage';
import SearchComponent from './SearchComponent'
import DetailPage from './DetailPage'
import Movie from './Movie'
import Tv from './Tv'
import VideoFile from './VideoFile'

const RootStack = createStackNavigator({ 
    HomePage: {screen: HomePage},
    SearchComponent: {screen: SearchComponent},
    Movie: {screen: Movie},
    Tv: {screen: Tv},
    DetailPage: {screen: DetailPage},
    VideoFile: {screen: VideoFile}
 },{
    initialRouteName: 'HomePage',
    headerMode: 'none'
  });
const AppContainer = createAppContainer(RootStack);

export default AppContainer;