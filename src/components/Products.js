import React, { useEffect, useState } from "react";
//import axios from "axios";

export default function Products(props){
    const url = 'https://fakestoreapi.com/products';
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    //let content = null;

    const addToCart = (item) => {
        console.log("we on on add to cart now");
        setCart([...cart,item])
       
    }

    /*const getTotalSum = () => {
        return arr.reduce((prevProd,curProd) => prevProd + curProd,0);
    }*/

    const fetchData = () => {
        fetch(url)
        .then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data)
            //let item = data.results
            //console.log(item)
            setProduct(data)
        })
    }
    useEffect(()=>{
        fetchData();
    },[])

    return(
    
        <div className="clearfix">
        <div className="row">
        <header><button type="button" class="button"><span class="button__icon"><ion-icon name="cart-outline"></ion-icon></span><span class="button__text">Go to cart ({cart.length})</span></button></header>
          {product.map(data => (
            <div className="col-md-4 animated fadeIn" key={data.id}>
              <div className="card">
                <div className="card-body">
                  <div className="product-img">
                    <img
                      src={data.image}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {data.title}
                  </h5>
                  <h6>{data.category}</h6>
                  <h5>${data.price}</h5>
                  <div><button type="button" class="btn btn-outline-info" onClick={() => addToCart(data)}>Add to Cart</button></div>
                </div>
              </div>
            </div>
          ))}
        </div>
    
      </div>
    
       
    )



    /*useEffect(() => {
        axios.get(url)
             .then(response => {
                console.log(response);
                setProduct(response.data)
             })
    }, [url])*/
    /*fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })*/

   


}