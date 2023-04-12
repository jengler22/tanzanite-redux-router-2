import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

function StepFour() {
    // allows us to send to redux
    const dispatch = useDispatch();
    // allow us to go to next page
    const history = useHistory();
   // data from redux
    const miles = useSelector(store => store.miles);
    // on input change, send new data to redux
    const handleChange = (event) => {
        const action = { type: 'SET_ACTIVITY_MILES', payload: event.target.value }
         dispatch(action);
    }

    const nextPage = (event) => {
        event.preventDefault();
        if ( miles > 0) {
            history.push('/review');
        } else {
            alert (' Enter value greater than 0');
        }
    }

    return(
        <>
        <h3>Step Four</h3>
        <form onSubmit={nextPage}>
            <label htmlFor="miles">Miles:</label> <br />
            <input value={miles} onChange={handleChange} type="number" />
            <input type="submit" value="Next" />
        </form>
        </>
    )
}

export default StepFour;