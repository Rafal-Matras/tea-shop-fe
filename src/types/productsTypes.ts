export interface TypesOfProductsInterface {
  id: string;
  name: string;
  category: Category;
  types: string[];
  icon: string;
}

export interface TeaTypeInterface {
  name: string;
  type: string;
  image: string;
  description: string;
}

export enum Category {
  tea = 'herbata',
  coffee = 'kawa',
  herbs = 'zioła',
  accessories = 'akcesoria',
  gift = 'na prezent',
  promotion = 'promocje',
}

export interface ProductsListInterface {
  id: string;
  category: Category;
  type: string[];
  name: string;
  price: number;
  image: string;
  forGift: 1 | null,
  promo: number | null;
  unit: 'g' | 'szt';
  numberOfUnits: number;
  new: 1 | null;
  state: number;
}

export interface ProductInterface extends ProductsListInterface {
  onHomePage: 1 | null;
  description: string;
  ingredients: string | null;
  countryOrigin: string | null;
  amountBrew: string | null;
  temperatureBrew: string | null;
  timeBrew: string | null;
  numberBrews: string | null;
  wayStore: string | null;
  coffeeSpecies: string | null;
  howToBrew: string | null;
  size: string | null;
}

export interface SliderInterface {
  id: number;
  image: string;
  product: string;
  productType: string | null;
}

export interface AddToBasket {
  id:string;
  userId: string;
  productId: string;
  quantityOfProduct: number;
  packSize: number;
}

export interface BasketInterface extends Omit<ProductsListInterface, 'forGift' |'promo' | 'new'> {}

export interface OrderBasketInterface extends Omit<ProductsListInterface, 'category' | 'forGift' |'promo' | 'new'>{
  quantityOfProduct: number;
  packSize: number;
}