import { useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";


function Review () {
    const dispatch = useDispatch();
    const history = useHistory();
    const personName = useSelector(store => store.personName);
    const activityType = useSelector(store => store.activityType);
    const minutes = useSelector(store => store.minutes);
    const miles = useSelector(store => store.miles);

    const sendToServer = () => {
        axios.post('/activity', {
            name: personName,
            type: activityType,
            minutes: minutes,
            miles: miles,
        }).then(Response => {
            dispatch({ type: 'CLEAR_FORM'});
            history.push('/activity-list');

        }).catch(error => {
            alert('something went wrong');
            console.log(error);
        });
       
        

    }

       


    return(
        <>
        <h3>Review</h3>
        <div>Name: {personName}</div>
        <div>Type: {activityType}</div>
        <div>Time in Minutes: {minutes}</div>
        <div>Distance in miles: {miles}</div>
        <button onClick={sendToServer}>Submit</button>
        </>
    )
}

export default Review;