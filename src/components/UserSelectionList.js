import {useSelector, useDispatch } from 'react-redux'
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { selectUser} from '.././actions/index';

const UserSelectionList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const style={
    width: "200px", 
    margin:"25px"
  }

    const handleOnchange = (event) => {
      const user = users.find(user => {return user.name === event.target.value})
      dispatch(selectUser(user))
    };

      return (
            <FormControl style={style}>
              <InputLabel>
                List of Users
              </InputLabel>
              <Select
                value=""
                onChange={handleOnchange}
                label="List of Users"
              >
              {users.map((item, key) => {
                return <MenuItem key={key} value={item.name}>{item.name}</MenuItem>
              })} 
              </Select>
          </FormControl>
      )
}

export default UserSelectionList;