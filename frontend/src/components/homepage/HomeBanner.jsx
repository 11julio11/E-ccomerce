import './HomeBanner.scss'
import axios from 'axios'
import Errors from '../Errors'
import banner from '../../assets/alex-unsplash.jpg'
import sidebarImg from '../../assets/Netflix-new-icon.png'
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { TbTruckReturn } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { useState } from 'react';


const HomeBanner = () => {
    const [categories, setCategories] = useState([])
    const [error, setError] = useState('')

    let iconStyles = { color: "#f09116", fontSize: "2.5rem" };

    return (
        <>
            {error ? <Errors type='warning' message={error} /> : ''}

            <div className='bannerDiv container pt-4'>
                <div className="categories card p-1">
                    <div className="card-body">
                        <ul className='list-group'>
                            {categories.map((category, i) => {
                                return (
                                    <li key={i}>
                                        <a href="" className='text-decoration-none text-dark'><FiSmartphone className='me-2' />{category}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="banner">
                    <img src={banner} className='rounded' />
                </div>
                <div className="help-center">
                    <div className='card'>
                        <div className="card-body">
                            <div className="help mb-3 d-flex align-items-center">
                                <AiOutlineQuestionCircle style={iconStyles} />
                                <div className='ms-2'>
                                    <span className='fw-bold'>Help Center</span>
                                    <br />
                                    <small>Guide to customer care</small>
                                </div>
                            </div>
                            <div className="return mb-3 d-flex align-items-center">
                                <TbTruckReturn style={iconStyles} />
                                <div className='ms-2'>
                                    <span className='fw-bold'>Easy Return</span>
                                    <br />
                                    <small>Quick Refund</small>
                                </div>
                            </div>
                            <div className="sell d-flex align-items-center">
                                <GiTakeMyMoney style={iconStyles} />
                                <div className='ms-2'>
                                    <span className='fw-bold'>Sell on Jumia</span>
                                    <br />
                                    <small>Millions of Customers</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar-img mt-4">
                        <img src={sidebarImg} className='rounded' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner