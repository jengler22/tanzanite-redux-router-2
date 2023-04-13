import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


function ActivityList () {
const dispatch = useDispatch();

    useEffect(() => {
        fetchActivityList
    }, []);

    const fetchActivityList = () => {
        axios.get('/activity').then(response => {
            dispatch({ type: 'SET_ACTIVITY_LIST', payload: response.date});

        }).catch(error => {
            alert('something went wrong')
        });
    }

    return(
        <>
        <h3>List</h3>
        </>
    )
}

export default ActivityList;