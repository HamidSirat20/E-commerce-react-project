import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import useAppSelector from "../hooks/useAppSelector";
import { fetchAllCategories } from "../redux/reducers/categoryReducer";
import useAppDispatch from "../hooks/useAppDispatch";
import { setCategory } from "../redux/reducers/productsReducer";

const Dropdown = () => {
  const [filter, setFilter] = useState("");

  console.log(filter);
  const [selectedOption, setSelectedOption] = useState("");
  const [open, setOpen] = useState(false); // New state variable
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.catReducer);
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);

  const myEnum = categories.map((item, index) => ({
    name: item,
    value: index + 1,
  }));
  const handleChange = (e: SelectChangeEvent<string>) => {
    setSelectedOption(e.target.value);
    setOpen(false);
  };
  useEffect(() => {

      dispatch(setCategory(filter.toLowerCase()))

  },[filter,dispatch]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <FormControl sx={{ width: "14rem" }}>
      <InputLabel>Filter By Category</InputLabel>
      <Select
        value={selectedOption}
        onChange={handleChange}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        <MenuItem value="" disabled>
          <em>None</em>
        </MenuItem>
        {categories.map((categ) => (
          <MenuItem
            onClick={(e) => setFilter(categ.name)}
            key={categ.id}
            value={filter}
            selected={selectedOption === categ.name}
          >
            {categ.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
