import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  
  {
    _id:uuid(),
    name:"DJI FPV 140 kmph max",
    price:50000,
    initialPrice:60000,
    ratingNo:4.9,
    categoryName:"FPV-RACING",
    stock:true,
    imageUrl:"https://images.fonearena.com/blog/wp-content/uploads/2021/03/DJI-FPV-drone-1.jpg",
    imageUrl1:"https://petapixel.com/assets/uploads/2021/03/DJI-Launches-the-FPV-A-First-Person-Racing-Drone-with-a-4K-Camera-800x420.jpg",
    reviews:4,
    newProduct:true
  },

  {
    _id:uuid(),
    name:"DJI Mavic Air 2",
    price:50000,
    initialPrice:70000,
    ratingNo:5,
    categoryName:"FILM-MAKING",
    stock:true,
    imageUrl:"https://stormsend1.djicdn.com/tpc/uploads/carousel/image/7f1d12f3055537e6ffb852a442aa3f38@ultra.jpg",
    reviews:4,
    newProduct:true
  },
  {
    _id:uuid(),
    name:"DJI Mavic Pro",
    price:50000,
    initialPrice:80000,
    ratingNo:5,
    categoryName:"FILM-MAKING",
    stock:true,
    imageUrl:"https://wallpapercave.com/wp/wp3607010.jpg",
    reviews:2,
    newProduct:true
  },
  {
    _id:uuid(),
    name:"DJI Mini",
    price:40000,
    initialPrice:50000,
    ratingNo:4.3,
    categoryName:"FILM-MAKING",
    stock:true,
    imageUrl:"https://wallpapercave.com/wp/wp9061329.png",
    reviews:3,
    newProduct:false
  },
  {
    _id:uuid(),
    name:"DJI Air 2S",
    price:38000,
    initialPrice:45000,
    ratingNo:4.4,
    categoryName:"FILM-MAKING",
    stock:true,
    imageUrl:"https://i0.wp.com/www.photoxels.com/photography/wp-content/uploads/2021/04/dji-air2s-feature.jpg?w=990&ssl=1",
    reviews:3,
    newProduct:false
  },
  {
    _id:uuid(),
    name:"Zenmuse X7 DJI",
    price:45000,
    initialPrice:50000,
    ratingNo:4.4,
    categoryName:"FILM-MAKING",
    stock:true,
    imageUrl:"https://www2.djicdn.com/assets/uploads/19938c71cb8e47136b39b17f144edfa1.png",
    reviews:2,
    newProduct:false
  },
  {
    _id:uuid(),
    name:"Flywoo Explorer LR 4 V2",
    price:33000,
    initialPrice:35000,
    ratingNo:4.4,
    categoryName:"FPV-RACING",
    stock:true,
    imageUrl:"https://cdn.shopify.com/s/files/1/0010/7410/2324/products/5_78c75e29-f83f-4ccb-aa44-198605cea615_400x400.jpg?v=1619271660",
    imageUrl1:"https://rcmumbai.com/pub/media/catalog/product/cache/9d08971813a040f8f96067a40f75c615/2/_/2_43eacd0c-9df3-40a7-a468-9ff72ad1bb6c_1000x.jpg",
    reviews:4,
    newProduct:true
  },
  {
    _id:uuid(),
    name:"iFlight Evoque Analog",
    price:25875,
    initialPrice:27000,
    ratingNo:4.2,
    categoryName:"FPV-RACING",
    stock:true,
    imageUrl:"https://i0.wp.com/www.drkstore.in/wp-content/uploads/2021/12/Nazgul-Evoque-analog-1000x1000-1.jpg?fit=1000%2C1000&ssl=1",
    reviews:4,
    newProduct:false
  },
  {
    _id:uuid(),
    name:"HOLY STONE 200",
    price:7425,
    initialPrice:9000,
    ratingNo:4.1,
    categoryName:"FPV-RACING",
    stock:true,
    imageUrl:"https://www.droneybee.com/wp-content/uploads/2017/10/Featured-Image.jpg",
    reviews:5,
    newProduct:false
  },
  {
    _id:uuid(),
    name:"DJI Mini 2 Combo",
    price:44175,
    initialPrice:44175,
    ratingNo:4.5,
    categoryName:"FPV-RACING",
    stock:true,
    imageUrl:"https://images.unsplash.com/photo-1588434013438-e1dd134eda16",
    reviews:5,
    newProduct:true
  },
  {
    _id:uuid(),
    name:"Mini-MD90-90mm",
    price:33000,
    initialPrice:38000,
    ratingNo:3.1,
    categoryName:"FPV-RACING",
    stock:false,
    imageUrl:"https://robu.in/wp-content/uploads/2021/06/Mini-MD90-90mm-Racing-Drone-with-Mini-Flytower-F3-3.jpg",
    reviews:2,
    newProduct:false
  },
  {
    _id:uuid(),
    name:"iFlight ProTek35",
    price:35625,
    initialPrice:36000,
    ratingNo:4.5,
    categoryName:"FPV-RACING",
    stock:true,
    imageUrl:"https://m.media-amazon.com/images/I/51KgNHUgXrL._AC_SX466_.jpg",
    reviews:2,
    newProduct:true
  },
  {
    _id:uuid(),
    name:"iFlight Nazgul5 V2/HD",
    price:14294,
    initialPrice:16000,
    ratingNo:5,
    categoryName:"FPV-RACING",
    stock:false,
    imageUrl:"https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/76/38/d2819872-3a09-4322-8f2c-9222ba774992.jpg.webp",
    reviews:2,
    newProduct:false
  },
  {
    _id:uuid(),
    name:"Walkera F210 3D 2.4GHz",
    price:26925,
    initialPrice:28000,
    ratingNo:4.5,
    categoryName:"FPV-RACING",
    stock:true,
    imageUrl:"https://m.media-amazon.com/images/I/61JrHCZ-PbL._AC_SX466_.jpg",
    reviews:5,
    newProduct:false
  },
  {
    _id:uuid(),
    name:"Walkera-Furious-215",
    price:32625,
    initialPrice:35000,
    ratingNo:3.9,
    categoryName:"FPV-RACING",
    stock:true,
    imageUrl:"https://dronerush.com/wp-content/uploads/2019/04/Walkera-Furious-215-racing-drone.jpg",
    reviews:4,
    newProduct:false
  },
  {
    _id:uuid(),
    name:"Wizard-X220S",
    price:17175,
    initialPrice:22000,
    ratingNo:4.4,
    categoryName:"FPV-RACING",
    stock:true,
    imageUrl:"https://www.aniwaa.com/wp-content/uploads/2018/11/drone-racing-fpv-Eachine-Wizard-X220S-front.jpg.webp",
    reviews:5,
    newProduct:false
  },
  {
    _id:uuid(),
    name:"HAWK-5",
    price:18675,
    initialPrice:20000,
    ratingNo:4.2,
    categoryName:"FPV-RACING",
    stock:false,
    imageUrl:"https://www.aniwaa.com/wp-content/uploads/2018/12/drone-racing-FPV-EMAX-HAWK-5-front.jpg.webp",
    reviews:4,
    newProduct:false
  },
  {
    _id:uuid(),
    name:"FPV-FuriBee-X215-PRO",
    price:17100,
    initialPrice:18000,
    ratingNo:4.3,
    categoryName:"FPV-RACING",
    stock:true,
    imageUrl:"https://www.aniwaa.com/wp-content/uploads/2019/01/drones-racing-FPV-FuriBee-X215-PRO-front.jpg.webp",
    reviews:3,
    newProduct:false
  },
  {
    _id:uuid(),
    name:"VUSION 250",
    price:20925,
    initialPrice:30000,
    ratingNo:4.3,
    categoryName:"FPV-RACING",
    stock:true,
    imageUrl:"https://www.aniwaa.com/wp-content/uploads/2018/10/drone-racing-rise-vusion-250-front.jpg.webp",
    reviews:5,
    newProduct:false
  },
  
];
