import { HistoryOrdersInterface, OrderStatusEnum } from '../types';

export const orderListDefault: HistoryOrdersInterface[] = [
  {
    orderNumber: '1234', data: '14/03/2023', price: '41,92', deliveryPrice: '9.99', provider: 'DHL',
    trackingNumber: '23456345323', dataToAccount: {
      accountType: 'Paragon',
      name: 'Rafał',
      surName: 'Matraś',
      companyName: '',
      nip: '',
      street: 'Nowodworska 29b',
      homeNumber: '103',
      postCode: '03-140',
      city: 'Warszawa',
      phone: '606 455 202',
    }, status: OrderStatusEnum.new, order: [{
      productId: '123',
      image: 'eargreyrainbow.webp',
      name: 'Ear Grey Rainbow',
      amount: '50 g',
      price: '10,78',
    }, {
      productId: '133',
      image: 'irishwhisky.webp',
      name: 'Irisch Whisky',
      amount: '100 g',
      price: '19,82',
    }],
  }, {
    orderNumber: '5345', data: '11/02/2023', price: '53,04', deliveryPrice: '9.99', provider: 'DHL',
    trackingNumber: '23456345323', dataToAccount: {
      accountType: 'Paragon',
      name: 'Rafał',
      surName: 'Matraś',
      companyName: '',
      nip: '',
      street: 'Nowodworska 29b',
      homeNumber: '103',
      postCode: '03-140',
      city: 'Warszawa',
      phone: '606 455 202',
    }, status: OrderStatusEnum.done, order: [{
      productId: '234',
      image: 'duchporanka.webp',
      name: 'Duch Poranka',
      amount: '100 g',
      price: '22,50',
    }],
  },
];