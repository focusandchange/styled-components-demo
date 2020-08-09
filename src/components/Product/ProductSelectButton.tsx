import React, { useMemo, ChangeEvent } from 'react';
import styled from 'styled-components';

interface VariantFragment {
  id: number;
  title: string;
  option1: string;
  option2: string;
  option3?: any;
  sku: string;
  requires_shipping: boolean;
  taxable: boolean;
  featured_image: Featuredimage;
  available: boolean;
  name: string;
  public_title: string;
  options: string[];
  price: number;
  weight: number;
  compare_at_price: number;
  inventory_management: string;
  barcode?: any;
  featured_media: Featuredmedia;
}

interface ProductVariantSelectProps {
  variants: VariantFragment[],
  value: string,
  onChange: (variantId: string) => void
}

const Select = styled.select`
  padding: 10px;
  height: 40px;
  margin-right: 10px;
`;

export const ProductVariantSelect = ({ variants, onChange, value }: ProductVariantSelectProps) => {
  function handleChangeOption(e: ChangeEvent<HTMLSelectElement>) {
    onChange(e.target.value)
  }

  const Options = useMemo(() => {
    return variants.map((variant: VariantFragment) => {
      let options = [...variant.options].filter(option => option).join('/');
      
      return (
        <option key={ variant.id } value={ variant.id }>
          { options }
        </option>
      )
    })
  }, [variants, value]);

  return (
    <Select onChange={ handleChangeOption }>
      { Options }
    </Select>
  )
};