import { useDispatch } from "react-redux";
import { sortDesc, sortAsc } from ".././actions/index";

const RadioButtons = () => {
  const dispatch = useDispatch();

  const handleOnRadioChange = (event) => {
    if (event.target.value === "Ascending") {
      dispatch(sortAsc());
    }
    if (event.target.value === "Descending") {
      dispatch(sortDesc());
    }
  };

  return (
    <div className="radio-buttons">
      <div onChange={(e) => handleOnRadioChange(e)}>
        <input type="radio" value="Ascending" name="sort" /> Ascending
        <input type="radio" value="Descending" name="sort" /> Descending
      </div>
    </div>
  );
};

export default RadioButtons;
