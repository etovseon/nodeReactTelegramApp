import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from '../components/hooks/useTelegram';
import React, {useCallback, useEffect, useState} from 'react';

const products = [
    {id: '1', title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые'},
    {id: '2', title: 'Куртка', price: 12000, description: 'Зеленого цвета, теплая'},
    {id: '3', title: 'Джинсы 2', price: 5000, description: 'Синего цвета, прямые'},
    {id: '4', title: 'Куртка 8', price: 122, description: 'Зеленого цвета, теплая'},
    {id: '5', title: 'Джинсы 3', price: 5000, description: 'Синего цвета, прямые'},
    {id: '6', title: 'Куртка 7', price: 600, description: 'Зеленого цвета, теплая'},
    {id: '7', title: 'Джинсы 4', price: 5500, description: 'Синего цвета, прямые'},
    {id: '8', title: 'Куртка 5', price: 12000, description: 'Зеленого цвета, теплая'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}


const token = '5224001267:AAHOgjCGvZimLApKPmid-Y13Jsxh8mUrO3I';


const webAppUrl = 'https://ornate-selkie-c27577.netlify.app';

function myf() {

    const data = {
        "id": "4",
        "title": "Куртка 8",
        "price": 122,
        "description": "Зеленого цвета, теплая"
    }
        const res = fetch("https://api.telegram.org/bot5224001267:AAHOgjCGvZimLApKPmid-Y13Jsxh8mUrO3I/sendMessage?chat_id=614284412&text="+JSON.stringify(data))
        const res2 = fetch('http://188.247.115.178:30020/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    return res;
}
const data2 = {
    "id": "1",
    "title": "Куртка 8",
    "price": 12222,
    "description": "Зеленого цвета, теплая"
}
// const retres = myf();
function myf2() {
const data2 = {
    "id": "1",
    "title": "Куртка 8",
    "price": 12222,
    "description": "Зеленого цвета, теплая"
}
const res = fetch("https://api.telegram.org/bot5224001267:AAHOgjCGvZimLApKPmid-Y13Jsxh8mUrO3I/sendMessage?chat_id=614284412&text=sadasdasd")
const test1 = fetch('http://188.247.115.178:30020/web-data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data2)
})

}
const test_push = myf2()
const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();
    const send_url = fetch("https://api.telegram.org/bot5224001267:AAHOgjCGvZimLApKPmid-Y13Jsxh8mUrO3I/sendMessage?chat_id=614284412&text="+JSON.stringify(data2))

    const onSendData = useCallback(() => {
        // res.then(console.log)
        // const data = {
        //     products: addedItems,
        //     totalPrice: getTotalPrice(addedItems),
        //     queryId,
        // }

        // const data2 = {
        //     "id": "1",
        //     "title": "Куртка 8",
        //     "price": 12222,
        //     "description": "Зеленого цвета, теплая"
        // }

        fetch('http://188.247.115.178:30020/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data2)
        })
    }, [addedItems,queryId])
    console.log(addedItems)
    
    useEffect(() => {
        tg.onEvent('mainButtonClicked', send_url)
        return () => {
            tg.offEvent('mainButtonClicked', send_url)
        }
    }, [onSendData])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;