import React, { useEffect,useState } from "react"
import { useRouter } from "next/router";

const Home = (props) => {
  let route = useRouter()

  const [email, setEmail] = useState("");

  useEffect(() => {
    route.push('/login')
  },[])
  return (
    <div>
      
    </div>
  )
};

export default Home;
