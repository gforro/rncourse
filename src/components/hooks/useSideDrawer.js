import React from "react";

const useSideDrawer = (navigator) => {
    React.useEffect(() => {
        navigator.setOnNavigatorEvent((event) => {
            if (event.id === 'sideDrawer') {
                navigator.toggleDrawer({});
            }
        })
    }, []);
};

export default useSideDrawer;