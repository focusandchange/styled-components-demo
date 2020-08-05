import React from 'react';
import styled from 'styled-components';

interface LinkProps {
  className?: string,
  children?: any
}

function Demo() {
  const Link = ({ className, children }: LinkProps) => (
    <a className={className}>
      {children}
    </a>
  )

  const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
  `;

  return (
    <div>
      <Link>Unstyled, boring Link</Link>
      <br />
      <StyledLink>Styled, exciting Link</StyledLink>
    </div>
  )
}

export default Demo;