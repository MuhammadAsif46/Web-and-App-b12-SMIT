import { useEffect, useState } from 'react'
import NavBar from './components/Navbar/Navbar'
import MuiCard from './components/Card/MuiCard'
import axios from 'axios'
import BasicModal from './components/Modal/BasicModal'
import CartContext from './Context/cart'
import { useSearchParams } from 'react-router-dom';
import Profile from './components/Profile/Profile'

function App() {

  const [products, setProducts] = useState([])
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState({});
  const [cart, setCart] = useState(0)
  let [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category")
  // console.log("category", category);


  useEffect(() => {
    if (!category || category === "all") {
      axios.get("https://fakestoreapi.com/products")
        .then((res) => setProducts(res.data))
        .catch((error) => console.log(error))
    }
  }, [searchParams])

  useEffect(() => {
    if (category && category !== "all") {
      axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => setProducts(res.data))
        .catch((error) => console.log(error))
    }
  }, [searchParams])


  const viewDetails = (id) => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setDetail(res.data)
        setOpen(true)
      })
      .catch((error) => console.log(error))

  }

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || []
    setCart(cartData.length)
  }, [])


  return (
    <div>
      <CartContext.Provider value={{ cart, setCart }}>
        <NavBar />
        <BasicModal open={open} setOpen={setOpen} detail={detail} />
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "30px", padding: 30, marginTop: 50 }}>
          {products.map((val, idx) => <MuiCard viewDetails={viewDetails} product={val} key={idx} />)}
        </div>
        {/*<Profile/>*/}
      </CartContext.Provider>
    </div>
  )
}

export default App
