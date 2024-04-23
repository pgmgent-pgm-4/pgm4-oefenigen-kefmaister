import React from "react";
import styled from "styled-components";

const articleDefault = styled.article`
  border: 12px solid gold;
`;

export default function Beer({ beer }) {
  return (
    <articleDefault>
      <h3>
        {beer.title} - {beer.alchool}
      </h3>
      <p>{beer.description}</p>
    </articleDefault>
  );
}
