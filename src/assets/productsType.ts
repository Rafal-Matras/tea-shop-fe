import { Category, TypesOfProductsInterface } from '../types';

export const productType: TypesOfProductsInterface[] = [
  {
    id: '123',
    name: 'herbaty',
    category: Category.tea,
    types: ['czarna', 'zielona', 'czerwona', 'biała', 'żułta', 'niebieska', 'specialna', 'earl grey', 'owocowa', 'japońska', 'oolong', 'rooibos', 'yerba mate', 'kwitnąca'],
    icon: 'herbata',
  },
  {
    id: '234',
    name: 'kawy',
    category: Category.coffee,
    types: ['klasyczna', 'smakowa', 'świąteczna', 'naturalna eko'],
    icon: 'kawa',
  },
  {
    id: '345',
    name: 'zioła',
    category: Category.herbs,
    types: ['adaptogeny', 'afrodyzjaki', 'relaks i sen', 'trawienie', 'odchudzanie', 'odporność', 'wzmocnienie', 'zdrowie'],
    icon: 'ziola',
  },
  {
    id: '456',
    name: 'akcesoria',
    category: Category.accessories,
    types: ['kubki', 'filiżanki', 'puszki', 'czajniki', 'zaparzaczei filtry do herbaty', 'zaparzacze i filtry do kawy', 'yerba mate', 'inne'],
    icon: 'akcesoria',
  },
  {id: '567', name: 'na prezent', category: Category.gift, types: [], icon: 'prezenty'},
  {id: '678', name: 'promocje', category: Category.promotion, types: [], icon: 'promocja'},
];