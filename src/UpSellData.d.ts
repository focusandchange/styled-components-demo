interface Variant {
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

interface Featuredmedia {
  alt?: any;
  id: number;
  position: number;
  preview_image: Previewimage;
}

interface Previewimage {
  aspect_ratio: number;
  height: number;
  width: number;
  src: string;
}

interface Featuredimage {
  id: number;
  product_id: number;
  position: number;
  created_at: string;
  updated_at: string;
  alt?: any;
  width: number;
  height: number;
  src: string;
  variant_ids: number[];
}

interface UpSellDataProps {
  id: number;
  title: string;
  price: number;
  price_min: number;
  price_max: number;
  variants: Variant[];
  images: string[];
}  