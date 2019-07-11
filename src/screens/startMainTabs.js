import {Navigation} from "react-native-navigation";
import icons from 'react-native-vector-icons/Ionicons';

const startMainTabs = () => {
    Promise.all([
        icons.getImageSource('md-map', 30),
        icons.getImageSource('md-share', 30),
        icons.getImageSource('md-menu', 30)
    ]).then(([mapImage, shareImage, menuImage]) =>
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'sk.akitech.FindPlaceScreen',
                    label: 'Find Place',
                    title: 'Find Place',
                    icon: mapImage,
                    navigatorButtons: {
                        leftButtons: [{
                            icon: menuImage,
                            title: 'Menu',
                            id: 'sideDrawer'
                        }]
                    }
                }, {
                    screen: 'sk.akitech.SharePlaceScreen',
                    label: 'Share Place',
                    title: 'Share Place',
                    icon: shareImage,
                    navigatorButtons: {
                        leftButtons: [{
                            icon: menuImage,
                            title: 'Menu',
                            id: 'sideDrawer'
                        }]
                    }
                }
            ],
            drawer: {
                left: {
                    screen: 'sk.akitech.SideDrawer'
                }
            }
        })
    );
};

export default startMainTabs;