import { useEffect, useState } from 'react'
import NavBar from './components/Navbar/Navbar'
import MuiCard from './components/Card/MuiCard'
import axios from 'axios'
import BasicModal from './components/Modal/BasicModal'


function App() {

  const [products, setProducts] = useState([])
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error))
  }, [])

  console.log("pord..", products);

  return (
    <div>
      <NavBar />
      <BasicModal open={open} setOpen={setOpen}/>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: "30px", padding: 30, marginTop: 50 }}>
        {products.map((val, idx) => <MuiCard setOpen={setOpen} product={val} key={idx} />)}
      </div>
    </div>
  )
}

export default App
