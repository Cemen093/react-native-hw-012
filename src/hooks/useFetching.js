import {useState} from "react";

const useFetching = (asyncCallback) => {
    const [isHitsLoading, setIsHitsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchHits = async (...params) => {
        try {
            setIsHitsLoading(true);
            await asyncCallback(...params);
        } catch (error) {
            setErrorMessage(error.message);
            console.error("error" + error)
        } finally {
            setIsHitsLoading(false);
        }
    };

    return [fetchHits, isHitsLoading, errorMessage];
};

export default useFetching
