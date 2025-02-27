import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useQuery from "./useQuery";

const useGTM = () => {
    const location = useLocation();
    const query = useQuery();

    useEffect(() => {
        const handleGtmLoaded = () => {
            const key = query.get("key");
            const value = query.get("value");

            window.dataLayer.push({
                event: "pageview",
                page: location.pathname,
            });

            // console.log('window.dataLayer', window.dataLayer);
            // let filtered = window.dataLayer.filter(item => item.event !== 'gtm')
            // console.log('filter', filtered);

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
            window.addEventListener("gtm.js", handleGtmLoaded);
        }

        return () => {
            window.removeEventListener("gtm.js", handleGtmLoaded);
        };
    }, [location, query]);
};

export default useGTM;
