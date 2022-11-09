import {useEffect} from "react";
import { useDispatch } from 'react-redux'
import {getData} from '.././actions/index';
import CardList from "./CardList";
import RadioButtons from "./RadioButtons";
import UserSelectionList from "./UserSelectionList";

const DataFetch = () => {
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getData())
    }, [dispatch])

      return (
        <div className="App">
            <UserSelectionList />
            <RadioButtons/>
          <div className="card-list">
            <CardList/>
          </div>
        </div>
      );
}

export default DataFetch;