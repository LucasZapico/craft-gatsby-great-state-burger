import React from 'react';
import { generate } from 'shortid';

export default function DefaultTemplate({ pageContext }) {
  const { title } = pageContext;

  return (
    <>
      <h1>{title}</h1>
    </>
  );
}
