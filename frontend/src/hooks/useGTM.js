import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useQuery from "./useQuery";

const useGTM = () => {
    const location = useLocation();
    const query = useQuery();

    console.log("location", location);
    console.log("location.pathname", location.pathname);
    console.log("location.search", location.search);

    useEffect(() => {
        const handleGtmLoaded = () => {
            const key = query.get("key");
            const value = query.get("value");
            console.log("key", key);
            console.log("value", value);

            window.dataLayer.push({
                event: "pageview",
                page: location.pathname,
            });

            window.dataLayer.push({
                event: "queryParamsEvent",
                key: key || 'key',
                value: value || 'value',
            });

            if (key && value) {
                window.dataLayer.push({
                    event: "queryParamsEvent",
                    key: key,
                    value: value,
                });
            }
        };

        console.log('window.dataLayer', window.dataLayer);

        if (window.dataLayer) {
            handleGtmLoaded();
        } else {
            // Listen for GTM initialization
            window.addEventListener("gtm.js", handleGtmLoaded);
        }

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener("gtm.js", handleGtmLoaded);
        };
    }, [location, query]);
};

export default useGTM;
