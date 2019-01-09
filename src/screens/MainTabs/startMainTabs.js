import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = async () => {
  const personIcon = await Icon.getImageSource("md-person", 30);
  const groupIcon = await Icon.getImageSource("md-people", 30);
  const globalIcon = await Icon.getImageSource("md-globe", 30);


  Navigation.startTabBasedApp({
    tabs: [
      {
        icon: personIcon,
        screen: "Birth.FirstScreen",
      },
      {
        icon: groupIcon,
        screen: "Birth.SecondScreen"
      },
      {
        icon: globalIcon,
        screen: "Birth.ThirdScreen"
      }
    ],
    appStyle: {
      navBarHidden: true
    }
  });
};

export default startTabs;