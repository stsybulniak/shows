import React, { FC } from 'react';

interface IErrorProps {
  message: string;
}

const Error: FC<IErrorProps> = ({ message }) => {
  return <h3>{message}</h3>;
};

export default Error;
