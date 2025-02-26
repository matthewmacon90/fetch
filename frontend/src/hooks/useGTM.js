import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useGTM = () => {
    const location = useLocation();

    console.log("location", location);
    console.log("location.pathname", location.pathname);
    console.log("location.search", location.search);

    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "pageview",
            page: location.pathname,
            key: location.key
        });
        console.log('window dataLayer', window.dataLayer);
    }, [location]);
};

export default useGTM;
