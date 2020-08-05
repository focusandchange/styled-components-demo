import React from 'react';
import styled from 'styled-components';

interface  Variants {
  variants: any,
  replaceVariant: (variantId: number) => void
}

const Select = styled.select`
  padding: 10px;
  height: 40px;
  margin-right: 10px;
`;

function SelectButton({ variants, replaceVariant }: Variants) {
  function handleChangeOption(e: any) {
    const id = Number(e.target.value);
    replaceVariant(id)
  }

  return (
    <Select onChange={handleChangeOption}>
      {variants.map((variant: any) => {
        let options = '';
        if (variant.option1) options += variant.option1;
        if (variant.option2) options += '/' + variant.option2;
        if (variant.option3) options += '/' + variant.option3; 

        return (
          <option key={variant.id} value={variant.id}>
            {options}
          </option>
        )
      })}
    </Select>
  )
}

export { SelectButton };
