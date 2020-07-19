import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";

const Pagination = ({ NextPage, PrevPage }) => {
  return (
    <div>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        {PrevPage ? (
          <Button onClick={PrevPage}>Prev</Button>
        ) : (
          <Button onClick={PrevPage} className="disabled">
            Prev
          </Button>
        )}
        {NextPage ? (
          <Button onClick={NextPage}>Next</Button>
        ) : (
          <Button onClick={NextPage} className="disabled">
            Next
          </Button>
        )}
      </ButtonGroup>
    </div>
  );
};

export default Pagination;
