export default class GoodsService {

    goods = [
        {
            id: 1,
            name: 'Samsung galaxy x5',
            description: 'Tovar 1 description',
            price: 1000,
            image: 'https://www.cnet.com/a/img/9L5Wn9yYjddACNCSaSAqiMx5njk=/2020/10/30/067bd108-d594-41a2-a390-2a73f9f1ad41/apple-iphone-12-confetti-9923.jpg',
            kategoriya: 'andrPhone'
        },
        {
            id: 2,
            name: 'iPhone 13 XS Max Pro Super XL',
            description: 'Tovar 2 description',
            price: 2000,
            image: 'https://www.cnet.com/a/img/9L5Wn9yYjddACNCSaSAqiMx5njk=/2020/10/30/067bd108-d594-41a2-a390-2a73f9f1ad41/apple-iphone-12-confetti-9923.jpg',
            kategoriya: 'iOSPhone'
        },
        {
            id: 3,
            name: 'Randomnaya Shtuka',
            description: 'Tovar 3 description',
            price: 3000,
            image: 'https://www.cnet.com/a/img/9L5Wn9yYjddACNCSaSAqiMx5njk=/2020/10/30/067bd108-d594-41a2-a390-2a73f9f1ad41/apple-iphone-12-confetti-9923.jpg',
            kategoriya: 'other'
        },
        {
            id: 4,
            name: 'iphone 3',
            description: 'Tovar 4 description',
            price: 123,
            image: 'https://www.cnet.com/a/img/9L5Wn9yYjddACNCSaSAqiMx5njk=/2020/10/30/067bd108-d594-41a2-a390-2a73f9f1ad41/apple-iphone-12-confetti-9923.jpg',
            kategoriya: 'iOSPhone'
        },
        {
            id: 5,
            name: 'samsung noname',
            description: 'Tovar 5 description',
            price: 23,
            image: 'https://www.cnet.com/a/img/9L5Wn9yYjddACNCSaSAqiMx5njk=/2020/10/30/067bd108-d594-41a2-a390-2a73f9f1ad41/apple-iphone-12-confetti-9923.jpg',
            kategoriya: 'andrPhone'
        },
        {
            id: 6,
            name: 'Randomnaya Shtuka 2',
            description: 'Tovar 6 description',
            price: 1,
            image: 'https://www.cnet.com/a/img/9L5Wn9yYjddACNCSaSAqiMx5njk=/2020/10/30/067bd108-d594-41a2-a390-2a73f9f1ad41/apple-iphone-12-confetti-9923.jpg',
            kategoriya: 'other'
        },
        {
            id: 7,
            name: 'samsung 222',
            description: 'Tovar 7 description',
            price: 234,
            image: 'https://www.cnet.com/a/img/9L5Wn9yYjddACNCSaSAqiMx5njk=/2020/10/30/067bd108-d594-41a2-a390-2a73f9f1ad41/apple-iphone-12-confetti-9923.jpg',
            kategoriya: 'andrPhone'
        },
        {
            id: 8,
            name: 'iphone new',
            description: 'Tovar 8 description',
            price: 111,
            image: 'https://www.cnet.com/a/img/9L5Wn9yYjddACNCSaSAqiMx5njk=/2020/10/30/067bd108-d594-41a2-a390-2a73f9f1ad41/apple-iphone-12-confetti-9923.jpg',
            kategoriya: 'iOSPhone'
        },
    ]

   getAllGoods(){
        return new Promise((resolve) => {
            setTimeout(()=> {
                resolve(this.goods)
            }, 1000)
        })

    }

    getSelectedGood(name){
        return new Promise((resolve) => {
            setTimeout(()=> {
                resolve(this.goods.filter(el => el.name === name))
            }, 1000)
        })

    }

}