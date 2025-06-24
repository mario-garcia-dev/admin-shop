import type { Product } from '../interfaces/product.interface';

export const fakeProductList: Product[] = [
    {
        id: '00001',
        title: 'Chamarra de Piel',
        description: 'Chamarra de piel color negro con botones de oro.',
        price: 1200,
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        stock: 100,
    },
    {
        id: '00002',
        title: 'Cinturon Tejido',
        description: 'Cinturon tejido con fibra de maguey',
        price: 1000,
        sizes: ['S', 'M', 'L'],
        stock: 150,
    },
    {
        id: '00003',
        title: 'Playera Hawuaiana',
        description: 'Playera Hawuaiana Verde',
        price: 500,
        sizes: ['S', 'M', 'L', 'XL'],
        stock: 80,
    },
];
