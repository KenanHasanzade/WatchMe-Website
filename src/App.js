import './App.css';
import { BrowserRouter, Link, Switch, Route, Router } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Blog from './components/Blog/Blog'
import ContactUs from './components/ContactUs/ContactUs'
import AboutUs from './components/AboutUs/AboutUs';
import BestSellers from './components/BestSellers/BestSellers';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import Cart from './components/Cart/Cart';
import Favorite from './components/Favorite/Favorite';
import Checkout from './components/Checkout/Checkout';
import Product from './components/Product/Product';
import Login from './components/Login/Login';
import ScrollToTop from './components/ScrollToTop';
import Discount from './components/Discount/Discount';
import NavBlog from './components/NavBlog/NavBlog';
import Information from './components/Information/Information';
import Shipping from './components/Shipping/Shipping';
import Refund from './components/Refund/Refund';
import Privacy from './components/Privacy/Privacy'
export const Globalcontext = createContext()








function App() {
  const [page, setPage] = useState({ start: 0, finish: 4 })
  const [categorycheck, setcategorycheck] = useState("allitems")
  const [select, setSelect] = useState(null)
  const [featurepage, setFeaturepage] = useState({ start: 4, finish: 8 })
  const [quantity, setQuantity] = useState(1)
  const [constant, setConstant] = useState([])
  const [main, setMain] = useState(null)
  const [products, setProducts] = useState(null)
  const [productsId, setProductsId] = useState([])
  const [favorite,setFavorite]=useState([])
  const [Searchbar, setSearchbar] = useState(false)
  const [SearchbarAnimation, setSearchbarAnimation] = useState("open")
  const[blogs,setBlogs]=useState(null)
  const [cardcount, setCartcount] = useState(constant.filter(item => item.count > 0).reduce((total) =>  total = total + 1 , 0 ))






  const getinfo = async () => {
    let res = [
        {
          "id": "1",
          "caption": "Omega.",
          "description": "Stainless steel case with a stainless steel bracelet.",
          "text": "Stainless steel case with a stainless steel bracelet. Fixed stainless steel bezel. Anthracite dial with silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. Date display at the 3 o'clock position.",
          "price": "349",
          "img1": "./image/watch_1_2.jpg",
          "img2": "./image/watch_1_1.jpg",
          "img3": "./image/watch_1_3.jpg",
          "img4": "./image/watch_1_1.jpg",
          "category": "Men",
          "cod": "100",
          "composition": "Information"
        },
        {
            "id": "2",
            "caption": "Tissot",
            "description": "Luxury Powermatic 80 Anthracite Dial Watch.",
            "text": "Stainless steel case with a stainless steel bracelet. Fixed stainless steel bezel. Anthracite dial with silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. Date display at the 3 o'clock position.",
            "price": "275",
            "img1": "./image/watch_2_2.jpg",
            "img2": "./image/watch_2_1.jpg",
            "img3": "./image/watch_2_3.jpg",
            "img4": "./image/watch_2_1.jpg",
            "category": "Men",
            "cod": "200",
            "composition": "Information"
        },
        {
            "id": "3",
            "caption": "Tissot",
            "description": "Le Locle Automatic COSC Black PVD Men's Watch. ",
            "text": "Rose gold PVD stainless steel case with a black leather strap. Fixed smooth rose gold PVD stainless steel bezel. Black dial with rose gold-tone leaf-style hands and index hour markers. Arabic numerals mark the 3, 6, 9 and 12 o'clock position. ",
            "price": "339",
            "img1": "./image/watch_3_2.jpg",
            "img2": "./image/watch_3_1.jpg",
            "img3": "./image/watch_3_3.jpg",
            "img4": "./image/watch_3_1.jpg",
            "category": "Men",
            "cod": "300",
            "composition": "Information"
        },
        {
            "id": "4",
            "caption": "Orient",
            "text": "2nd Generation Bambino Automatic Men's Watch.",
            "description": "Stainless steel case with a brown leather strap. Fixed stainless steel bezel. Cream dial with blue hands and alternating Roman numeral and index hour markers. Arabic numeral minute markers (at 5 minute intervals). Minute markers around the outer rim.",
            "price": "169",
            "img1": "./image/watch_4_2.jpg",
            "img2": "./image/watch_4_1.jpg",
            "img3": "./image/watch_4_3.jpg",
            "img4": "./image/watch_4_1.jpg",
            "category": "Men",
            "cod": "400",
            "composition": "Information."
        },
        {
            "id": "5",
            "caption": "Seiko",
            "description": "Kinetic Green Dial Brown Leather Men's Watch.",
            "text": "Stainless steel case with a brown leather strap. Fixed stainless steel bezel with a black ion-plated inlay. Green dial with luminous yellow gold-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog.",
            "price": "159",
            "img1": "./image/watch_5_2.jpg",
            "img2": "./image/watch_5_1.jpg",
            "img3": "./image/watch_5_3.jpg",
            "img4": "./image/watch_5_1.jpg",
            "category": "Men",
            "cod": "500",
            "composition": "Information"
        },
        {
            "id": "6",
            "caption": "Hamilton ",
            "text": "Khaki Automatic Men's Watch.SPRING SALE.",
            "description": "Silver-tone stainless steel case with a brown leather strap. Fixed silver-tone stainless steel bezel. Beige dial with luminous hands and Arabic numeral hour markers. Minute markers around the outer rim, 24 hour (GMT) scale around an inner ring.",
            "price": "435",
            "img1": "./image/watch_6_2.jpg",
            "img2": "./image/watch_6_1.jpg",
            "img3": "./image/watch_6_3.jpg",
            "img4": "./image/watch_6_1.jpg",
            "category": "Men",
            "cod": "600",
            "composition": "Information."
        },
        {
            "id": "7",
            "caption": "Tissot",
            "text": "Chemin Des Tourelles Automatic Men's Watch.",
            "description": "Stainless steel case with a black leather strap. Fixed stainless steel bezel. Black dial with silver-tone alpha-style shape hands and index hour markers. Arabic numerals mark the 6 and 12 o'clock positions. Minute markers around the outer rim. ",
            "price": "292",
            "img1": "./image/watch_7_2.jpg",
            "img2": "./image/watch_7_1.jpg",
            "img3": "./image/watch_7_3.jpg",
            "img4": "./image/watch_7_1.jpg",
            "category": "Tissot",
            "cod": "700",
            "composition": "Information"
        },
        {
            "id": "8",
            "caption": "Orient",
            "description": "Kamasu Automatic Green Dial Men's Watch.",
            "price": "194",
            "text": "Silver-tone stainless steel case and bracelet. Uni-directional rotating stainless steel with a green ring bezel. Green dial with luminous silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. ",
            "img1": "./image/watch_8_2.jpg",
            "img2": "./image/watch_8_1.jpg",
            "img3": "./image/watch_8_3.jpg",
            "img4": "./image/watch_8_1.jpg",
            "category": "Kids",
            "cod": "800",
            "composition": "Information."
        },
        {
            "id": "9",
            "caption": "Omega",
            "description": "Speedmaster Chronograph Automatic Watch. ",
            "price": "3295",
            "text": "Silver-tone stainless steel case and bracelet. Uni-directional rotating stainless steel with a green ring bezel. Green dial with luminous silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. ",
            "img1": "./image/watch_9_2.jpg",
            "img2": "./image/watch_9_1.jpg",
            "img3": "./image/watch_9_3.jpg",
            "img4": "./image/watch_9_1.jpg",
            "category": "Kids",
            "cod": "800",
            "composition": "Information." },
        {
            "id": "10",
            "caption": "Longines",
            "description": "Kamasu Automatic Green Dial Men's Watch.",
            "price": "2430",
            "text": "Silver-tone stainless steel case and bracelet. Uni-directional rotating stainless steel with a green ring bezel. Green dial with luminous silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. ",
            "img1": "./image/watch_10_2.jpg",
            "img2": "./image/watch_10_1.jpg",
            "img3": "./image/watch_10_3.jpg",
            "img4": "./image/watch_10_1.jpg",
            "category": "Kids",
            "cod": "800",
            "composition": "Information."   },
        {
            "id": "11",
            "caption": "Tissot",
            "description": "Kamasu Automatic Green Dial Men's Watch.",
            "price": "525",
            "text": "Silver-tone stainless steel case and bracelet. Uni-directional rotating stainless steel with a green ring bezel. Green dial with luminous silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. ",
            "img1": "./image/watch_11_2.jpg",
            "img2": "./image/watch_11_1.jpg",
            "img3": "./image/watch_11_3.jpg",
            "img4": "./image/watch_11_1.jpg",
            "category": "Kids",
            "cod": "800",
            "composition": "Information."   },
        {
            "id": "12",
            "caption": "Tissot",
            "description": "Kamasu Automatic Green Dial Men's Watch.",
            "price": "319",
            "text": "Silver-tone stainless steel case and bracelet. Uni-directional rotating stainless steel with a green ring bezel. Green dial with luminous silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. ",
            "img1": "./image/watch_12_2.jpg",
            "img2": "./image/watch_12_1.jpg",
            "img3": "./image/watch_12_3.jpg",
            "img4": "./image/watch_12_1.jpg",
            "category": "Kids",
            "cod": "800",
            "composition": "Information."    },
        {
          "caption": "Tissot",
          "description": "Kamasu Automatic Green Dial Men's Watch.",
          "price": "459",
          "text": "Silver-tone stainless steel case and bracelet. Uni-directional rotating stainless steel with a green ring bezel. Green dial with luminous silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. ",
          "img1": "./image/watch_13_2.jpg",
          "img2": "./image/watch_13_1.jpg",
          "img3": "./image/watch_13_3.jpg",
          "img4": "./image/watch_13_1.jpg",
          "category": "Kids",
          "cod": "800",
          "composition": "Information."     },
        {
            "id": "14",
            "caption": "Tissot",
            "description": "Kamasu Automatic Green Dial Men's Watch.",
            "price": "255",
            "text": "Silver-tone stainless steel case and bracelet. Uni-directional rotating stainless steel with a green ring bezel. Green dial with luminous silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. ",
            "img1": "./image/watch_14_2.jpg",
            "img2": "./image/watch_14_1.jpg",
            "img3": "./image/watch_14_3.jpg",
            "img4": "./image/watch_14_1.jpg",
            "category": "Women",
            "cod": "800",
            "composition": "Information."    },
        {
            "id": "15",
            "caption": "Certina",
            "description": "Kamasu Automatic Green Dial Men's Watch.",
            "price": "268",
            "text": "Silver-tone stainless steel case and bracelet. Uni-directional rotating stainless steel with a green ring bezel. Green dial with luminous silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. ",
            "img1": "./image/watch_15_2.jpg",
            "img2": "./image/watch_15_1.jpg",
            "img3": "./image/watch_15_3.jpg",
            "img4": "./image/watch_15_1.jpg",
            "category": "Women",
            "cod": "800",
            "composition": "Information."    },
        {
            "id": "16",
            "caption": "Seiko",
            "description": "Kamasu Automatic Green Dial Men's Watch.",
            "price": "139",
            "text": "Silver-tone stainless steel case and bracelet. Uni-directional rotating stainless steel with a green ring bezel. Green dial with luminous silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. ",
            "img1": "./image/watch_16_2.jpg",
            "img2": "./image/watch_16_1.jpg",
            "img3": "./image/watch_16_3.jpg",
            "img4": "./image/watch_16_1.jpg",
            "category": "Women",
            "cod": "800",
            "composition": "Information."   },
        {
            "id": "17",
            "caption": "Tissot",
            "description": "Kamasu Automatic Green Dial Men's Watch.",
            "price": "281",
            "text": "Silver-tone stainless steel case and bracelet. Uni-directional rotating stainless steel with a green ring bezel. Green dial with luminous silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. ",
            "img1": "./image/watch_17_2.jpg",
            "img2": "./image/watch_17_1.jpg",
            "img3": "./image/watch_17_3.jpg",
            "img4": "./image/watch_17_1.jpg",
            "category": "Women",
            "cod": "800",
            "composition": "Information."    },
        {
            "id": "18",
            "caption": "Orient",
            "description": "Kamasu Automatic Green Dial Men's Watch.",
            "price": "209",
            "text": "Silver-tone stainless steel case and bracelet. Uni-directional rotating stainless steel with a green ring bezel. Green dial with luminous silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. ",
            "img1": "./image/watch_18_2.jpg",
            "img2": "./image/watch_18_1.jpg",
            "img3": "./image/watch_18_3.jpg",
            "img4": "./image/watch_18_1.jpg",
            "category": "Women",
            "cod": "800",
            "composition": "Information."    },
        {
            "id": "19",
            "caption": "Seiko",
            "description": "Kamasu Automatic Green Dial Men's Watch.",
            "price": "137",
            "text": "Silver-tone stainless steel case and bracelet. Uni-directional rotating stainless steel with a green ring bezel. Green dial with luminous silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. ",
            "img1": "./image/watch_19_2.jpg",
            "img2": "./image/watch_19_1.jpg",
            "img3": "./image/watch_19_3.jpg",
            "img4": "./image/watch_19_1.jpg",
            "category": "Women",
            "cod": "800",
            "composition": "Information."       },
        {
            "id": "20",
            "caption": "Tissot",
            "description": "Kamasu Automatic Green Dial Men's Watch.",
            "price": "799",
            "text": "Silver-tone stainless steel case and bracelet. Uni-directional rotating stainless steel with a green ring bezel. Green dial with luminous silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. ",
            "img1": "./image/watch_20_2.jpg",
            "img2": "./image/watch_20_1.jpg",
            "img3": "./image/watch_20_3.jpg",
            "img4": "./image/watch_20_1.jpg",
            "category": "Women",
            "cod": "800",
            "composition": "Information."       },
            {
                "id": "21",
                "caption": "Longines",
                "description": "Kamasu Automatic Green Dial Men's Watch.",
                "price": "693",
                "text": "Silver-tone stainless steel case and bracelet. Uni-directional rotating stainless steel with a green ring bezel. Green dial with luminous silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. ",
                "img1": "./image/watch_21_2.jpg",
                "img2": "./image/watch_21_1.jpg",
                "img3": "./image/watch_21_3.jpg",
                "img4": "./image/watch_21_1.jpg",
                "category": "Women",
                "cod": "800",
                "composition": "Information."       },
                {
                    "id": "22",
                    "caption": "Omega",
                    "description": "Kamasu Automatic Green Dial Men's Watch.",
                    "price": "4995",
                    "text": "Silver-tone stainless steel case and bracelet. Uni-directional rotating stainless steel with a green ring bezel. Green dial with luminous silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. ",
                    "img1": "./image/watch_22_2.jpg",
                    "img2": "./image/watch_22_1.jpg",
                    "img3": "./image/watch_22_3.jpg",
                    "img4": "./image/watch_22_1.jpg",
                    "category": "Women",
                    "cod": "800",
                    "composition": "Information."       },
                    {
                        "id": "23",
                        "caption": "Certina",
                        "description": "Kamasu Automatic Green Dial Men's Watch.",
                        "price": "278",
                        "text": "Silver-tone stainless steel case and bracelet. Uni-directional rotating stainless steel with a green ring bezel. Green dial with luminous silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. ",
                        "img1": "./image/watch_23_2.jpg",
                        "img2": "./image/watch_23_1.jpg",
                        "img3": "./image/watch_23_3.jpg",
                        "img4": "./image/watch_23_1.jpg",
                        "category": "Women",
                        "cod": "800",
                        "composition": "Information."       },
                        {
                            "id": "24",
                            "caption": "Seiko",
                            "description": "Kamasu Automatic Green Dial Men's Watch.",
                            "price": "999",
                            "text": "Silver-tone stainless steel case and bracelet. Uni-directional rotating stainless steel with a green ring bezel. Green dial with luminous silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. ",
                            "img1": "./image/watch_24_2.jpg",
                            "img2": "./image/watch_24_1.jpg",
                            "img3": "./image/watch_24_3.jpg",
                            "img4": "./image/watch_24_1.jpg",
                            "category": "Women",
                            "cod": "800",
                            "composition": "Information."       },
                            {
                                "id": "25",
                                "caption": "Frederique Constant",
                                "description": "Kamasu Automatic Green Dial Men's Watch.",
                                "price": "379",
                                "text": "Silver-tone stainless steel case and bracelet. Uni-directional rotating stainless steel with a green ring bezel. Green dial with luminous silver-tone hands and index hour markers. Minute markers around the outer rim. Dial Type: Analog. ",
                                "img1": "./image/watch_24_2.jpg",
                                "img2": "./image/watch_24_1.jpg",
                                "img3": "./image/watch_24_3.jpg",
                                "img4": "./image/watch_24_1.jpg",
                                "category": "Women",
                                "cod": "800",
                                "composition": "Information."       }
          
          
          
          
          ]
    let resp = [
      {
          "id":"1",
          "caption":"Top 5 Rolex Submariner references that could be a good investment",
          "description":"The Rolex Submariner is one of the most iconic timepieces of all time. Often praised as the most famous watch in the world, Rolex’s diver is an absolute industry icon. Nevertheless, prices for the Submariner have followed wider market trends and come down over the last couple of months.",
          "context":"This is particularly true for the newer generation of watches. While this does make them relatively more affordable again, the big question is obviously how prices will develop over time. With that in mind, it’s a much safer bet to turn to vintage Submariners if you’re looking for a long-term investment opportunity. In addition to their incredible charm and history, limited numbers make them more collectible over time. So, let’s take a look at five different references that are by no means cheap, but have the potential to appreciate over time.",
          "imgtitle":"https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=1.0/2023/02/ONP-262-Top-Sub-2-1.jpg",
          "date":"aprel 1,2023",
          "author":"Jorg Weppelink"
      },
      {
          "id":"2",
          "caption":"The Top 10 Watch Brands of All Time in the World",
          "description":"The Rolex Submariner is one of the most iconic timepieces of all time. Often praised as the most famous watch in the world, Rolex’s diver is an absolute industry icon. Nevertheless, prices for the Submariner have followed wider market trends and come down over the last couple of months.",
          "context":"This is particularly true for the newer generation of watches. While this does make them relatively more affordable again, the big question is obviously how prices will develop over time. With that in mind, it’s a much safer bet to turn to vintage Submariners if you’re looking for a long-term investment opportunity. In addition to their incredible charm and history, limited numbers make them more collectible over time. So, let’s take a look at five different references that are by no means cheap, but have the potential to appreciate over time.",
          "imgtitle":"https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=1.0/2023/01/Omega-2-1-1.jpg",
          "date":"aprel 1,2023",
          "author":"Donato Andrioli"
      },
      {
          "id":"3",
          "caption":"3 Classic Watches With Good Value Retention to Look at in 2023",
          "description":"The Rolex Submariner is one of the most iconic timepieces of all time. Often praised as the most famous watch in the world, Rolex’s diver is an absolute industry icon. Nevertheless, prices for the Submariner have followed wider market trends and come down over the last couple of months.",
          "context":"This is particularly true for the newer generation of watches. While this does make them relatively more affordable again, the big question is obviously how prices will develop over time. With that in mind, it’s a much safer bet to turn to vintage Submariners if you’re looking for a long-term investment opportunity. In addition to their incredible charm and history, limited numbers make them more collectible over time. So, let’s take a look at five different references that are by no means cheap, but have the potential to appreciate over time.",
          "imgtitle":"https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=1.0/2022/12/ONP-194-Magazin-2-1.jpg",
          "date":"aprel 1,2023",
          "author":"Hyla Bauer"
      },
      {
          "id":"4",
          "caption":"5 of the Most Expensive Watches Sold on WacthMe website",
          "description":"The Rolex Submariner is one of the most iconic timepieces of all time. Often praised as the most famous watch in the world, Rolex’s diver is an absolute industry icon. Nevertheless, prices for the Submariner have followed wider market trends and come down over the last couple of months.",
          "context":"This is particularly true for the newer generation of watches. While this does make them relatively more affordable again, the big question is obviously how prices will develop over time. With that in mind, it’s a much safer bet to turn to vintage Submariners if you’re looking for a long-term investment opportunity. In addition to their incredible charm and history, limited numbers make them more collectible over time. So, let’s take a look at five different references that are by no means cheap, but have the potential to appreciate over time.",
          "imgtitle":"https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65,w=782/2023/04/Vacheron-Constantin-Ref.4300V-120G-B946_Headergrafik.jpg",
          "date":"aprel 1,2023",
          "author":"Donato Andrioli"
      },
      {
          "id":"5",
          "caption":"Rolex Submariner vs. Blancpain Fifty Fathoms: The Ultimate Comparison",
          "description":"The Rolex Submariner is one of the most iconic timepieces of all time. Often praised as the most famous watch in the world, Rolex’s diver is an absolute industry icon. Nevertheless, prices for the Submariner have followed wider market trends and come down over the last couple of months.",
          "context":"This is particularly true for the newer generation of watches. While this does make them relatively more affordable again, the big question is obviously how prices will develop over time. With that in mind, it’s a much safer bet to turn to vintage Submariners if you’re looking for a long-term investment opportunity. In addition to their incredible charm and history, limited numbers make them more collectible over time. So, let’s take a look at five different references that are by no means cheap, but have the potential to appreciate over time.",
          "imgtitle":"https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65,w=782/2022/08/aws-original-image-2022-08-24T125411.987-scaled.jpeg",
          "date":"aprel 1,2023",
          "author":"Donato Andrioli"
      },
      {
          "id":"6",
          "caption":"The Best From the House of Tudor: The Tudor Black Bay Ceramic Ref. ",
          "description":"The Rolex Submariner is one of the most iconic timepieces of all time. Often praised as the most famous watch in the world, Rolex’s diver is an absolute industry icon. Nevertheless, prices for the Submariner have followed wider market trends and come down over the last couple of months.",
          "context":"This is particularly true for the newer generation of watches. While this does make them relatively more affordable again, the big question is obviously how prices will develop over time. With that in mind, it’s a much safer bet to turn to vintage Submariners if you’re looking for a long-term investment opportunity. In addition to their incredible charm and history, limited numbers make them more collectible over time. So, let’s take a look at five different references that are by no means cheap, but have the potential to appreciate over time.",
          "imgtitle":"https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65,w=782/2023/05/Tudor-Black-Bay-Ceramic-Set-scaled.jpeg",
          "date":"aprel 1,2023",
          "author":"Jorg Willeroy"
      },
      {
          "id":"7",
          "caption":"Top 5 Rolex Submariner references that could be a good investment",
          "description":"The Rolex Submariner is one of the most iconic timepieces of all time. Often praised as the most famous watch in the world, Rolex’s diver is an absolute industry icon. Nevertheless, prices for the Submariner have followed wider market trends and come down over the last couple of months.",
          "context":"This is particularly true for the newer generation of watches. While this does make them relatively more affordable again, the big question is obviously how prices will develop over time. With that in mind, it’s a much safer bet to turn to vintage Submariners if you’re looking for a long-term investment opportunity. In addition to their incredible charm and history, limited numbers make them more collectible over time. So, let’s take a look at five different references that are by no means cheap, but have the potential to appreciate over time.",
          "imgtitle":"https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=1.0/2023/01/Maurice-Lacroix-Aikon-2-1.jpg",
          "date":"aprel 1,2023",
          "author":"Balazs Ferenczi"
      },
      {
          "id":"8",
          "caption":"Everything You Need To Know About Panda Dial Watches",
          "description":"The Rolex Submariner is one of the most iconic timepieces of all time. Often praised as the most famous watch in the world, Rolex’s diver is an absolute industry icon. Nevertheless, prices for the Submariner have followed wider market trends and come down over the last couple of months.",
          "context":"This is particularly true for the newer generation of watches. While this does make them relatively more affordable again, the big question is obviously how prices will develop over time. With that in mind, it’s a much safer bet to turn to vintage Submariners if you’re looking for a long-term investment opportunity. In addition to their incredible charm and history, limited numbers make them more collectible over time. So, let’s take a look at five different references that are by no means cheap, but have the potential to appreciate over time.",
          "imgtitle":"https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=1.0/2022/11/Panda-Dials-2-1.jpg",
          "date":"aprel 1,2023",
          "author":"Ellie Marley"
      }

  ]
    setMain(res)
    setProducts(res)
    setConstant(res)
    setBlogs(resp)

  }


  useEffect(() => {
    getinfo()
  }, [])

  // const basket = (id) => {

  //   products && products.map((num) => {
    
  //     if (num.id === id) {
  //       if (num.count) { num.count++
  //         console.log(num.count);      
  //        }
  //       else {

  //         num.count = 1
  //         setProductsId(productsId.concat(num))
  //         // console.log(productsId);

  //       }
  //     }
  //   })
  //   setCart(constant.filter(item => item.count > 0))
  //   setCartcount(constant.filter(item => item.count > 0).reduce((total) =>  total = total + 1 , 0 ))
  // }
  
  const basket = (id) => {
    products && products.map((number) => {
       if (number.id === id) {
         if (number.count && number.count<99) { number.count++ }
         else if (number.count==99){}
         else {
           number.count = 1
         }
       }
       setProductsId(constant.filter(item => item.count > 0))
       setCartcount(constant.filter(item => item.count > 0).reduce((total) => total = total + 1, 0))
       console.log(productsId);
     })
   }
   const basketminus = (id) => {
    products && products.map((number) => {
       if (number.id === id) {
         if (number.count>1) { number.count--}
       }
       setProductsId(constant.filter(item => item.count > 0))
       setCartcount(constant.filter(item => item.count > 0).reduce((total) => total = total + 1, 0))
     })
   }
   const basketremove = (id) => {
    products && products.map((number) => {
      if (number.id === id) {
        number.count = false
      }
      setProductsId(constant.filter(item => item.count > 0))
      setCartcount(constant.filter(item => item.count > 0).reduce((total) => total = total + 1, 0))
    })
  }
  function changesort(e) {
    setSelect(e)
    window.scrollTo(0,0)
  }
   const pageChange = (e) => {
    var first = page.start
    var second = page.finish
    console.log(e.target.className)
    if (e.target.className == "fa-solid fa-chevron-left") {
      console.log(first)
      if (first == 0) {
      }
      else if(second==products.length) { setPage({ start: first - 4, finish:first }) }
      else { setPage({ start: first - 4, finish: second - 4 }) }
    }
    else if (e.target.className == "fa-solid fa-chevron-right") {
      if (second + 4 < products.length) {
        setPage({ start: first + 4, finish: second + 4 })
      }
      else if (first + 4 >= products.length) { }
      else if (second + 4 >= products.length) {
        setPage({ start: first + 4, finish: products.length })
      }
    }
   console.log(page);
  }
  function changelist(e) {
    setProducts(e.concat("nese"))
    setTimeout(()=>{
      setProducts(e)
    },10)
  }
  const catalogchange = (e) => {
    SearchbarClose()
    var arr = []
    constant && constant.map((number) => {
      console.log(e.target.id)
      if (e.target.id !== "all" ){
        if (number.category == e.target.id) { arr.push(number); console.log(e.target.id);}
      }
    })
    setcategorycheck(e.target.id)
    if (select==="AtoZ"){changelist(arr.sort((a, b) => a.caption.toLowerCase() > b.caption.toLowerCase() ? 1 : -1))}
     else if (select==="ZtoA"){changelist(arr.sort((a, b) => a.caption.toLowerCase() > b.caption.toLowerCase() ? -1 : 1))}
    else  if (select==="low"){changelist(arr.sort((a, b) => Number(a.price) > Number(b.price) ? 1 : -1))}
    else if (select==="high"){changelist(arr.sort((a, b) => Number(a.price) > Number(b.price) ? -1 : 1));}
    else {changelist(arr)};
    // setlist(arr)
    // changelist(arr)
    setMain(arr)
    // if (8 <= arr.length || e.target.id == "all") { setPage({ start: 0, finish: 8 }) }
    // else if (8 > arr.length) { setPage({ start: 0, finish: arr.length }) }
    if (e.target.id == "allitems" || e.target.id == "") {
      console.log(e.target.id)
      // changelist(constant)
      setMain(constant);
      if (select==="AtoZ"){changelist(constant.sort((a, b) => a.caption.toLowerCase() > b.caption.toLowerCase() ? 1 : -1))}
      else if (select==="ZtoA"){changelist(constant.sort((a, b) => a.caption.toLowerCase() > b.caption.toLowerCase() ? -1 : 1))}
      else if (select==="low"){changelist(constant.sort((a, b) => Number(a.price) > Number(b.price) ? 1 : -1))}
      else if (select==="high"){changelist(constant.sort((a, b) => Number(a.price) > Number(b.price) ? -1 : 1));}
      else {changelist(constant)};
    }
    window.scrollTo(0,0)
  }
  const pageFeatureChange = (e) => {
    var first = featurepage.start
    var second = featurepage.finish
    console.log(e.target.className)
    if (e.target.className == "fa-solid fa-chevron-left") {
      console.log(first)
      if (first == 0) {
      }
      else if(second==products.length) { setFeaturepage({ start: first - 4, finish:first }) }
      else { setFeaturepage({ start: first - 4, finish: second - 4 }) }
    }
    else if (e.target.className == "fa-solid fa-chevron-right") {
      if (second + 4 < products.length) {
        setFeaturepage({ start: first + 4, finish: second + 4 })
      }
      else if (first + 4 >= products.length) { }
      else if (second + 4 >= products.length) {
        setFeaturepage({ start: first + 4, finish: products.length })
      }
    }
   console.log(page);
  }

  
  const favoritebutton = (id) => {
    main && main.map((number) => {    
      if (number.id === id) {
        if (number.fave) {
          number.fave = false
        }
        else {
          number.fave = true
        }
      }
      setFavorite(constant.filter(item => item.fave == true))
    })
  }
  function inputvalue(e) {
    console.log(e.target.value)
    var arr = []
    main && main.map((number) => {
      var tester = number.caption
      if (tester.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) {
        arr.push(number)
      }
      else {
        setProducts([])
      }
    })
    setProducts(arr)
    if (e.target.value === "") { setProducts(main) }
 
  }
  const SearchbarOpen = () => {
    setSearchbar(true)
    setSearchbarAnimation("open")
  }
  const SearchbarClose = () => {
    setSearchbarAnimation("close")
    setTimeout(function () { setSearchbar(false) }
      , 700
    )
  }
  const quantitychange = (e) => {
    if (e.target.value>99 ){}
    else {setQuantity(e.target.value) }
   }
   const basketproductchange = (id) => {
    main && main.map((number) => {
       if (number.id === id) {
         number.count=quantity
       }
       setProductsId(constant.filter(item => item.count > 0))
       setCartcount(constant.filter(item => item.count > 0).reduce((total) => total = total + 1, 0))
     })
     setQuantity(1)
   }
  

 


  return (
    <Globalcontext.Provider value={{products,blogs,main,basket,productsId,favorite,favoritebutton,cardcount,SearchbarOpen,SearchbarClose,Searchbar,SearchbarAnimation,inputvalue,basketminus,quantity,quantitychange,
    basketproductchange,page,pageChange,basketremove,pageFeatureChange,featurepage,catalogchange,changelist,changesort}}>
    <BrowserRouter>
      <div className='container' >
        <Navigation />
        <ScrollToTop/>

        <Switch>
        <Route path='/' exact>
            <Home />
            <BestSellers/>
            <FeaturedProducts/>
            <Blog/>
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/home'>
            <Home />
            <BestSellers/>
            <FeaturedProducts/>
            <Blog/>
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/shop' exact>
            <Shop />
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/navblog' exact>
           <NavBlog/>
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/aboutus'>
            <AboutUs/>
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/contactus'>
            <ContactUs />
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/cart'>
            <Cart/>
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/favorite'>
            <Favorite/>
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/checkout'>
            <Checkout/>
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/shipping'>
            <Shipping/>
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/refund'>
            <Refund/>
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/privacy'>
            <Privacy/>
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/navblog/:id'>
            <Information/>
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/shop/:id'>
            <Product/>
            <Discount/>
            <Footer/>
          </Route>
          <Route path='/login'>
            <Login/>
            <Discount/>
            <Footer/>
          </Route>
        </Switch>

        

      </div>
    </BrowserRouter>
    </Globalcontext.Provider>
  );
}

export default App;
