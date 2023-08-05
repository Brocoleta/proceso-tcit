import React from "react";
import { Form } from "semantic-ui-react";

const SearchFilter = ({ searchFilter, setSearchFilter }) => {
  const [tempSearchFilter, setTempSearchFilter] = React.useState(searchFilter);
  const handleChange = (e, { value }) => {
    setTempSearchFilter(value);
    clearTimeout(searchFilter);
    setTimeout(() => {
      // Actualizar el estado con el valor del input después del tiempo de debounce
      setSearchFilter(value);
    }, 100);
  };

  return (
    <React.Fragment>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            placeholder="Filter By Name"
            value={tempSearchFilter}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </React.Fragment>
  );
};

export default SearchFilter;
