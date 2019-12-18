import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from './HomePage';
import SearchComponent from './SearchComponent'

const RootStack = createStackNavigator({ 
    HomePage: {screen: HomePage},
    SearchComponent: {screen: SearchComponent}
 },{
    initialRouteName: 'HomePage',
    headerMode: 'none'
  });
const AppContainer = createAppContainer(RootStack);

export default AppContainer;