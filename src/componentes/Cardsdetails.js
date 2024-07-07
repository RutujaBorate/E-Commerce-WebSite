import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Cardsdetails = () => {

    const [data,setData] = useState([]);

    const {id} = useParams();

    const getData = useSelector((state)=> state.cartreducer.carts);
    // console.log(getData);

    const compare =()=>{
      let comparedata = getData.filter((e)=>{
        return e.id == id
      })
      setData(comparedata);
    }

    useEffect(()=>{
    compare()
    },[id]);

  return (
    <div>
      <div className="container mt-2">
        <h2 className='text-center'>Item Details Page</h2>

        <section className='container mt-3'>
          <div className="iteamsdetails">
            {
              data.map((ele)=>{
                return(
                  <>
                   <div className="items_img">
              <img src={ele.imgdata} alt="" />
            </div>
            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p><strong>Restaurant</strong> : {ele.rname}</p>
                    <p><strong>Price</strong> : {ele.price}</p>
                    <p><strong>Dishes</strong> :{ele.address}</p>
                    <p><strong>Total</strong> :$ 300</p>
                  </td>
                  <td>
                    <tr>
                      <p><strong>Rating :</strong> <span style={{background:"green" , borderRadius:"5px" , color:"#fff" , 
                        padding:"2px 5px"
                      }}>3.5🌟</span></p>
                       <p><strong>Order Review :</strong> <span>{ele.somedata}</span></p>
                       <p><strong>Rating :</strong> <span><i className='fas fa-trash' style={{color:"red" , fontSize:20,cursor:"pointer"}}></i></span></p>
                    </tr>
                  </td>
                </tr>
              </Table>
            </div>
          
                  </>
                )
              })
            }
           </div>
        </section>
      </div>
    </div>
  )
}

export default Cardsdetails
