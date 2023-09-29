export interface Banner {
  url: string;
}

export interface Category {
  id: string;
  count: number;
  title: string;
  order: number;
  icon_url: string;
  need_size_tag: number;
  require_size: boolean;
  require_brand: boolean;
  disable_price: boolean;
  disable_quantity: boolean;
  disable_bunpay: boolean;
  disable_inspection: boolean;
  categories?: Array<Category>;
}

export interface User {
  id: number;
  email: string;
  password?: string;
  name: string;
}

export interface Product {
  product_image: string;
  name: string;
  price: string;
  update_time: number;
  pid: string;
  bun_pay_filter_enabled: boolean;
  free_shipping: boolean;
  num_faved: string;
}
