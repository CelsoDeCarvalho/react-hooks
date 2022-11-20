import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useFetchUser = () => {
    //We are creating a hook to fetch user
    //and return data,error and loading

    const [user, setUser] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [refetching,setRefetching] = useState(false);

    //We are fetching api of random user here
    const fetchUserData = async () => {
        setLoading(true)
        await axios.get("https://randomuser.me/api")
            .then(response => {
                setUser(response.data.results[0])
            }).catch(error => {
                setError(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    const refetch = () => setRefetching(!refetching);

    useEffect(() => {
        fetchUserData()
    }, [refetching])

    return { user,refetch, loading, error }

}

export { useFetchUser }