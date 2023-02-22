export interface TypesOfProductsInterface {
  id: string;
  name: string;
  types: string[];
  icon: string;
}

export interface TeaTypeInterface {
  name: string;
  type: string;
  image: string;
  description: string;
}

export interface ProductsListInterface {
  id: string;
  name: string;
  price: number;
  image: string;
  promo: number | null;
  unit: 'g' | 'szt';
  numberOfUnits: '1' | '50' | '100';
  state: number;
}

export interface SliderInterface{
  id:number;
  image:string;
  page:string;
  product:string;
  productType:string;
}