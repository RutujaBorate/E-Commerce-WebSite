import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Badge from '@mui/material/Badge';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table'

const Header = () => {

    const getData = useSelector((state)=> state.cartreducer.carts);
    console.log(getData);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3" >Add To Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
                    </Nav>
                    <Badge badgeContent={getData.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>
                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getData.length ? 
                        <div className="card_details" style={{width:"24rem",padding:10}}>
                            <Table>
                                <thead>
                                    <tr>
                                    <tr>Photos</tr>
                                    <th>Restaurant Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getData.map((e)=>{
                                            return(
                                                <>
                                                <tr>
                                                    <td>
                                                        <NavLink to={`/cart/${e.id}`}>
                                                        <img src={e.imgdata} alt=""
                                                        style={{width:"5rem" , height:"5rem"}} />
                                                        </NavLink>
                                                       
                                                    </td>
                                                    <td>
                                                        <p>{e.rname}</p>
                                                        <p>Price :${e.price}</p>
                                                        <p>Quantity : {e.qnty}</p>
                                                        <p style={{color:"red",fontSize:20,cursor:"pointer"}}>
                                                            <i className='fas fa-trash smalltrash'></i>
                                                        </p>
                                                    </td>
                                                    <td className='mt-5' style={{color:"red",fontSize:20,cursor:"pointer"}}>
                                                    <i className='fas fa-trash largtrash'></i>
                                                    </td>
                                                </tr>
                                                </>
                                            )
                                        })
                                    }
                                    <p className='text-center'>Total : $300</p>
                                </tbody>
                            </Table>
                        </div> : 
                        <div className="card_details d-flex justify-content-center align-item-center"
                        style={{width:"20rem",padding:5,position:"relative"}} >
                            <i className='fas fa-close smallclose' style={{position:"absolute",top:2,right:20,fontSize:18,cursor:"pointer"}} 
                            onClick={handleClose}></i>
                            <p style={{fontSize:22}}>Your cart is empty</p>
    
                        </div>
                    }

                    
                </Menu>

            </Navbar>
        </>
    )
}

export default Header;
