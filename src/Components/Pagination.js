import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

const Pagination = ({ NextPage, PrevPage }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Pagination;
