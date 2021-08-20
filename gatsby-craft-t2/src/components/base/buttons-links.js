import React from 'react';
import { Link } from 'gatsby';

export const LinkOne = ({
  children,
  href = '',
  to = '',
  ...rest
}) => {
  return href !== '' ? (
    <a {...rest} href={href}>
      {children}
    </a>
  ) : (
    <Link {...rest} to={to}>
      {children}
    </Link>
  );
};

export const LinkTwo = ({
  children,
  href = '',
  to = '',
  ...rest
}) => {
  return href !== '' ? (
    <a {...rest} href={href}>
      {children}
    </a>
  ) : (
    <Link {...rest} to={to}>
      {children}
    </Link>
  );
};
