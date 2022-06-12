import React, { useEffect, useState } from "react";
//import axios from "axios";

export default function Products(props){
    const url = 'https://fakestoreapi.com/products';
    const [product, setProduct] = useState([]);
    //let content = null;

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
                  <p className="card-text">
                    <br />
                  </p>
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