import React from 'react';

export interface TypesOfProductsInterface {
  name: string;
  types: string[];
  icon: string;
}

export interface TeaTypeInterface {
  name: string;
  type: string;
  image: string;
  description: string;
  fullDescription: React.ReactNode;
}

export enum Category {
  tea = 'herbaty',
  coffee = 'kawy',
  herbs = 'zioła',
  accessories = 'akcesoria',
}

export enum NumberOfUnits {
  one = 1,
  three = 3,
  twentyFifth = 25,
  fifty = 50,
  hundredth = 100,
}

export enum PromoEnum {
  no = 0,
  fifth = .05,
  then = .10,
  fifteen = .15,
  twenty = .20,
  twentyFifth = .25,
  thirty = .30
}

export interface ProductsListInterface {
  id: string;
  category: Category;
  type: string[];
  name: string;
  price: number;
  image: string;
  forGift: 1 | 0;
  promo: PromoEnum;
  unit: 'g' | 'szt';
  numberOfUnits: NumberOfUnits;
  new: 1 | 0;
  onHomePage: 1 | 0;
  state: number;
}

export interface ProductInterface extends ProductsListInterface {
  description: string;
  ingredients: string | null;
  countryOrigin: string | null;
  amountBrew: string | null;
  temperatureBrew: string | null;
  timeBrew: string | null;
  numberBrews: string | null;
  storageMethod: string | null;
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

export enum PackSize {
  one = 1,
  fifth = 5,
  ten = 10
}

export interface BasketInterface {
  id: string;
  count: number;
  packSize: PackSize;
  product: ProductsListInterface;
}

export interface BasketOneProductInterface extends Omit<ProductsListInterface, 'forGift' | 'new' | 'onHomePage'> {
}

export interface OrderBasketInterface extends Omit<ProductsListInterface, 'category' | 'forGift' | 'promo' | 'new'> {
  quantityOfProduct: number;
  packSize: number;
}

export interface HistoryOrdersInterface {
  id: string;
  orderNumber: string;
  createdAd: string;
  price: number;
  status: Status;
  formOfDelivery: string | null;
  deliveryCost:number;
  trackingNumber: string | null;
  details: Details;
}

export enum Status {
  new = 'nowe',
  implemented = 'w realizacji',
  sent = 'wysłane',
  done = 'zakończone'
}

export enum DocumentType {
  receipt = 'Paragon',
  invoice = 'Faktura VAT',
}

export interface Details {
  id: string;
  orderList: string;
  documentType: DocumentType;
  email:string;
  name: string;
  surName: string;
  companyName: string | null;
  nip: string | null;
  street: string;
  flatNumber: string;
  postCode: string;
  city: string;
  phone: string;
  otherDeliveryAddress: 1 | 0;
  deliveryName?: string | null;
  deliverySurName?: string | null;
  deliveryCompanyName?: string | null;
  deliveryStreet?: string | null;
  deliveryFlatNumber?: string | null;
  deliveryPostCode?: string | null;
  deliveryCity?: string | null;
}

export interface OrderDetailsInterface {
  productId: string;
  image: string;
  name: string;
  amount: string;
  price: string;
}

export interface OrderListDetails {
  id:string;
  image: string;
  category:string,
  name: string;
  type: string[];
  count: number;
  unit: string;
  price: number;
}

export type ActivePageType = 'data' | 'changePassword' | 'history' | 'details';

export interface SendOrderInterface extends Omit<Details, 'id'> {
  userId: string | null;
  price: number;
  formOfDelivery: string;
  deliveryCost:number;
}