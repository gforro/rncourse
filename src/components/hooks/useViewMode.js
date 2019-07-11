import React from "react";
import {Dimensions} from "react-native";

const useViewMode = () => {
    const [viewMode, setViewMode] = React.useState('portrait');

    React.useEffect(() => {
        console.log('effect start');
        const updateStyles = (dims) => {
            setViewMode(dims.window.height > 500 ? "portrait" : "landscape");
        }
        Dimensions.addEventListener("change", updateStyles);
        return () => {
            console.log('effect end');
            Dimensions.removeEventListener("change", updateStyles);
        }
    }, []);

    return viewMode;
};

export default useViewMode;