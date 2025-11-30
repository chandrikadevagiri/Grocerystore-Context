 import organic_vegetable_image from '../assets/organic_vegetable_image.png';
 import fresh_fruit_image from '../assets/fresh_fruit_image.png';
 import cold_drinks_image from '../assets/cold_drinks_image.png';
 import instant_food_image from '../assets/instant_food_image.png';
 import dairy_products_image from '../assets/dairy_products_image.png';
 import carrot from '../assets/carrot.png';
 import brocoli from '../assets/brocoli.png'
 import spinach from '../assets/spinach.png'
 import potato from '../assets/potato.png'
 import tomato from '../assets/tomato.png'
 import apple from '../assets/apple.png'
 import banana from '../assets/banana.png'
 import strawberry from '../assets/strawberry.png'
 import orange from '../assets/orange.png'
 import blueberry from '../assets/blueberry.png'
 import cocacola from '../assets/coca-cola.png'
 import fanta from '../assets/fanta.png'
 import pepsi from '../assets/pepsi.png'
 import sprite from '../assets/sprite.png'
 import sevenup from '../assets/sevenup.png'
 import burger from '../assets/burger.png'
 import frenchfries from '../assets/frenchfries.png'
 import milk from '../assets/milk.png'
 import cream from '../assets/cream.png'
 import eggs from '../assets/eggs.png'
 import cheese from '../assets/cheese.png'
  export const categories=[
    {
       text:'Organic veggies',
       path:'vegetables',
       image:organic_vegetable_image,
       bgColor:'#FEF6DA'
    },
    {
       text:'Fresh Fruits',
       path:'fruits',
       image:fresh_fruit_image,
       bgColor:'#FEE0E0'
    },
    {
       text:'Cold Drinks',
       path:'cooldrinks',
       image:cold_drinks_image,
       bgColor:'#FEF6DA'
    },
    {
       text:'Instant Food',
       path:'instant food',
       image:instant_food_image,
       bgColor:'#FEF6DA'
    },
    {
       text:'Dairy Products',
       path:'dairy products',
       image:dairy_products_image,
       bgColor:'#FEF6DA'
    },
]


export const dummyproducts=[
  {
    "id": 1,
    "name": "Carrot",
    "category": "Vegetables",
    "price": 2.5,
    "offerPrice":1,
    "unit": "lb",
    "stock": 120,
    "rating":4.1,
    "description":[ "Fresh organic carrots, perfect for salads and cooking."],
    "image": [carrot]

  },
  {
    "id": 2,
    "name": "Broccoli",
    "category": "Vegetables",
    "price": 2.0,
     "offerPrice":1,
    "unit": "lb",
    "stock": 80,
      "rating":2.1,
    "description":[ "Green and healthy broccoli, rich in vitamins."],
    "image": [brocoli]
  },
  {
    "id": 3,
    "name": "Spinach",
    "category": "Vegetables",
    "price": 1.2,
     "offerPrice":1,
    "unit": "bunch",
    "stock": 150,
      "rating":3.5,
    "description": ["Fresh spinach leaves, ideal for smoothies and salads."],
    "image": [spinach]
  },
  {
    "id": 4,
    "name": "Potato",
    "category": "Vegetables",
    "price": 0.8,
     "offerPrice":0.5,
    "unit": "lb",
    "stock": 200,
      "rating":4.5,
    "description": ["Versatile potatoes, great for frying, baking, or mashing."],
    "image": [potato]
  },
  {
    "id": 5,
    "name": "Tomato",
    "category": "Vegetables",
    "price": 1.0,
     "offerPrice":0.5,
    "unit": "lb",
    "stock": 100,
      "rating":5,
    "description": ["Juicy red tomatoes, perfect for sauces and salads."],
    "image": [tomato]
  },
   {
    "id": 6,
    "name": "Apple",
    "category": "Fruits",
    "price": 2.0,
    "offerPrice":1,
    "unit": "lb",
    "stock": 120,
      "rating":1.1,
    "description": ["Fresh organic apples"],
    "image": [apple]
  },
   {
    "id": 7,
    "name": "Banana",
    "category": "Fruits",
    "price": 2.5,
    "offerPrice":1,
    "unit": "lb",
    "stock": 100,
      "rating":3.1,
    "description": ["Fresh organic bananas."],
    "image": [banana]
  },
   {
    "id": 8,
    "name": "Orange",
    "category": "Fruits",
    "price": 3.0,
    "offerPrice":2.0,
    "unit": "lb",
    "stock": 150,
      "rating":4.1,
    "description": ["Fresh organic oranges"],
    "image": [orange]
  },
   {
    "id": 9,
    "name": "Starawbeery",
    "category": "Fruits",
    "price": 1.5,
    "offerPrice":1,
    "unit": "lb",
    "stock": 120,
      "rating":2.1,
    "description": ["Fresh organic strawberries."],
    "image": [strawberry]
  },
   {
    "id": 10,
    "name": "blueberry",
    "category": "fruits",
    "price": 3.5,
    "offerPrice":3,
    "unit": "lb",
    "stock": 180,
      "rating":4.8,
    "description": ["Fresh organic blueberries."],
    "image": [blueberry]
  },
  {
    "id": 11,
    "name": "Coca-Cola",
    "category": "cooldrinks",
    "price": 10,
    "offerPrice":8,
    "unit": "1.5L",
    "stock": 180,
      "rating":2.1,
    "description": ["Tasty and Refreshment"],
    "image": [cocacola]
  },
  {
    "id": 12,
    "name": "sprite",
    "category": "cooldrinks",
    "price": 12,
    "offerPrice":10,
    "unit": "1.5L",
    "stock": 150,
      "rating":4.5,
    "description": ["Tasty and Refreshment."],
    "image": [sprite]
  },
  {
    "id": 13,
    "name": "pepsi",
    "category": "cooldrinks",
    "price": 15,
    "offerPrice":10,
    "unit": "1.5L",
    "stock": 100,
      "rating":5,
    "description": ["Tasty and Refreshment."],
    "image": [pepsi]
  },
  {
    "id": 14,
    "name": "Fanta",
    "category": "cooldrinks",
    "price": 10,
    "offerPrice":8,
    "unit": "1.5L",
    "stock": 120,
      "rating":3.5,
    "description": ["Tasty and Refreshment."],
    "image": [fanta]
  },
  {
    "id": 15,
    "name": "7 up",
    "category": "cooldrinks",
    "price": 10,
    "offerPrice":5,
    "unit": "1.5L",
    "stock": 100,
      "rating":4,
    "description": ["Tasty."],
    "image": [sevenup]
  },
   {
    "id": 16,
    "name": "french fries",
    "category": "instant food",
    "price": 5,
    "offerPrice":'',
    "unit": "",
    "stock": 100,
      "rating":3,
    "description": ["Tasty."],
    "image": [frenchfries]
  },

   {
    "id": 17,
    "name": "Burger",
    "category": "instant food",
    "price": 7,
    "offerPrice":'',
    "unit": "",
    "stock": 100,
      "rating":3.5,
    "description": ["Tasty."],
    "image": [burger]
  },
   {
    "id": 18,
    "name": "milk",
    "category": "dairy products",
    "price": 3,
    "offerPrice":'2',
    "unit": "1.5L",
    "stock": 100,
      "rating":5,
    "description": ["Healthy"],
    "image": [milk]
  },

   {
    "id": 19,
    "name": "eggs",
    "category": "dairy products",
    "price": 10,
    "offerPrice":'8',
    "unit": "1pack",
    "stock": 100,
      "rating":2.1,
    "description": ["Healthy."],
    "image": [eggs]
  },
 {
    "id": 20,
    "name": "cheese",
    "category": "dairy products",
    "price": 10,
    "offerPrice":'',
    "unit": "",
    "stock": 100,
      "rating":4.5,
    "description": ["Healthy."],
    "image": [cheese]
  },
   {
    "id": 21,
    "name": "cream",
    "category": "dairy products",
    "price": 10,
    "offerPrice":'',
    "unit": "",
    "stock": 100,
      "rating":3.1,
    "description": ["Healthy."],
    "image": [cream]
  },


]
export const dummyaddress=[
  {
  "street": "123  Street",
  "city": "Spring",
  "state": "IL",
  "zipCode": "62704",
  "country": "United States"
}
]