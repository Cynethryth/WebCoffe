import React, { useState } from 'react'
import './Css/style.css'
import logo from './Images/logo.png'
import cartitem1 from './Images/cart-item-1.png'
import cartitem2 from './Images/cart-item-2.png'


export default function Page1() {
    const [navState, setNavState] = useState(true)
    const [searchState, setSearchState] = useState(true)
    const [cartItemState, setCartItemState] = useState(true)



  return (
    <div>
        <header className="header">

<a href="#" className="logo">
    <img src={logo} alt=""/>
</a>

<nav className={navState? "navbar":"navbar active"}>
    <a href="#home">home</a>
    <a href="#about">about</a>
    <a href="#menu">menu</a>
    <a href="#products">products</a>
    <a href="#review">review</a>
    <a href="#contact">contact</a>
    <a href="#blogs">blogs</a>
</nav>

<div className="icons">
    <div className="fas fa-search"          onClick={()=>{
        setNavState(true)
        setSearchState(!searchState)
        setCartItemState(true)
    }}></div>
    <div className="fas fa-shopping-cart"   onClick={()=>{
        setNavState(true)
        setSearchState(true)
        setCartItemState(!cartItemState)
    }}></div>
    <div className="fas fa-solid fa-bars" id='menu-btn'   onClick={()=>{
        setNavState(!navState)
        setSearchState(true)
        setCartItemState(true)
    }}></div>
</div>

<div className={searchState? "search-form":"search-form active"}>
    <input type="search" id="search-box" placeholder="search here..."/>
</div>

<div className={cartItemState?"cart-items-container":"cart-items-container active"}>
    <div className="cart-item">
        <span className="fas fa-times"></span>
        <img src={cartitem1} alt=""/>
        <div className="content">
            <h3>cart item 01</h3>
            <div className="price">$15.99/-</div>
        </div>
    </div>
    <div className="cart-item">
        <span className="fas fa-times"></span>
        <img src={cartitem2} alt=""/>
        <div className="content">
            <h3>cart item 02</h3>
            <div className="price">$15.99/-</div>
        </div>
    </div>
    <div className="cart-item">
        <span className="fas fa-times"></span>
        <img src={"./Images/cart-item-3.png"} alt=""/>
        <div className="content">
            <h3>cart item 03</h3>
            <div className="price">$15.99/-</div>
        </div>
    </div>
    <div className="cart-item">
        <span className="fas fa-times"></span>
        <img src="./Images/cart-item-4.png" alt=""/>
        <div className="content">
            <h3>cart item 04</h3>
            <div className="price">$15.99/-</div>
        </div>
    </div>
    <a href="#" className="btn">checkout now</a>
</div>

</header>



<section className="home" id="home">

<div className="content">
    <h3>fresh coffee in the morning</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat labore, sint cupiditate distinctio tempora reiciendis.</p>
    <a href="#" className="btn">get yours now</a>
</div>

</section>



<section className="about" id="about">

<h1 className="heading"> <span>about</span> us </h1>

<div className="row">

    <div className="image">
        <img src={require("./Images/about-img.jpeg")} alt=""/>
    </div>

    <div className="content">
        <h3>what makes our coffee special?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae ratione a officiis id temporibus autem? Quod nemo facilis cupiditate. Ex, vel?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet enim quod veritatis, nihil voluptas culpa! Neque consectetur obcaecati sapiente?</p>
        <a href="#" className="btn">learn more</a>
    </div>

</div>

</section>



<section className="menu" id="menu">

<h1 className="heading"> our <span>menu</span> </h1>

<div className="box-container">

    <div className="box">
        <img src={require('./Images/menu-1.png')} alt=""/>
        <h3>tasty and healty</h3>
        <div className="price">$15.99 <span>20.99</span></div>
        <a href="#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <img src={require("./Images/menu-2.png")}alt=""/>
        <h3>tasty and healty</h3>
        <div className="price">$15.99 <span>20.99</span></div>
        <a href="#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <img src={require("./Images/menu-3.png")} alt=""/>
        <h3>tasty and healty</h3>
        <div className="price">$15.99 <span>20.99</span></div>
        <a href="#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <img src={require("./Images/menu-4.png")} alt=""/>
        <h3>tasty and healty</h3>
        <div className="price">$15.99 <span>20.99</span></div>
        <a href="#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <img src={require("./Images/menu-5.png")} alt=""/>
        <h3>tasty and healty</h3>
        <div className="price">$15.99 <span>20.99</span></div>
        <a href="#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <img src={require("./Images/menu-6.png")} alt=""/>
        <h3>tasty and healty</h3>
        <div className="price">$15.99 <span>20.99</span></div>
        <a href="#" className="btn">add to cart</a>
    </div>

</div>

</section>


<section className="products" id="products">

<h1 className="heading"> our <span>products</span> </h1>

<div className="box-container">

    <div className="box">
        <div className="icons">
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
        </div>
        <div className="image">
            <img src={require("./Images/product-1.png")} alt=""/>
        </div>
        <div className="content">
            <h3>fresh coffee</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <div className="price">$15.99 <span>$20.99</span></div>
        </div>
    </div>

    <div className="box">
        <div className="icons">
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
        </div>
        <div className="image">
            <img src={require("./Images/product-2.png")} alt=""/>
        </div>
        <div className="content">
            <h3>fresh coffee</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <div className="price">$15.99 <span>$20.99</span></div>
        </div>
    </div>

    <div className="box">
        <div className="icons">
            <a href="#" className="fas fa-shopping-cart"></a>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
        </div>
        <div className="image">
            <img src={require("./Images/product-3.png")} alt=""/>
        </div>
        <div className="content">
            <h3>fresh coffee</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <div className="price">$15.99 <span>$20.99</span></div>
        </div>
    </div>

</div>

</section>


<section className="review" id="review">

<h1 className="heading"> customer's <span>review</span> </h1>

<div className="box-container">

    <div className="box">
        <img src={require("./Images/quote-img.png")} alt="" className="quote"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
        <img src={require("./Images/pic1.png")} className="user" alt=""/>
        <h3>john deo</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
    </div>

    <div className="box">
        <img src={require("./Images/quote-img.png")} alt="" className="quote"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
        <img src={require("./Images/pic2.png")} className="user" alt=""/>
        <h3>john deo</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
    </div>
    
    <div className="box">
        <img src={require("./Images/quote-img.png")} alt="" className="quote"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
        <img src={require("./Images/pic3.png")} className="user" alt=""/>
        <h3>john deo</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
    </div>

</div>

</section>

<section className="contact" id="contact">

<h1 className="heading"> <span>contact</span> us </h1>

<div className="row">

    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1629452077891!5m2!1sen!2sin" allowFullScreen="" loading="lazy"></iframe>

    <form action="">
        <h3>get in touch</h3>
        <div className="inputBox">
            <span className="fas fa-user"></span>
            <input type="text" placeholder="name"/>
        </div>
        <div className="inputBox">
            <span className="fas fa-envelope"></span>
            <input type="email" placeholder="email"/>
        </div>
        <div className="inputBox">
            <span className="fas fa-phone"></span>
            <input type="number" placeholder="number"/>
        </div>
        <input type="submit" value="contact now" className="btn"/>
    </form>

</div>

</section>


<section className="blogs" id="blogs">

<h1 className="heading"> our <span>blogs</span> </h1>

<div className="box-container">

    <div className="box">
        <div className="image">
            <img src={require("./Images/blog-1.jpeg")} alt=""/>
        </div>
        <div className="content">
            <a href="#" className="title">tasty and refreshing coffee</a>
            <span>by admin / 21st may, 2021</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
            <a href="#" className="btn">read more</a>
        </div>
    </div>

    <div className="box">
        <div className="image">
            <img src={require("./Images/blog-2.jpeg")} alt=""/>
        </div>
        <div className="content">
            <a href="#" className="title">tasty and refreshing coffee</a>
            <span>by admin / 21st may, 2021</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
            <a href="#" className="btn">read more</a>
        </div>
    </div>

    <div className="box">
        <div className="image">
            <img src={require("./Images/blog-3.jpeg")} alt=""/>
        </div>
        <div className="content">
            <a href="#" className="title">tasty and refreshing coffee</a>
            <span>by admin / 21st may, 2021</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
            <a href="#" className="btn">read more</a>
        </div>
    </div>

</div>

</section>



<section className="footer">

<div className="share">
    <a href="#" className="fab fa-facebook-f"></a>
    <a href="#" className="fab fa-twitter"></a>
    <a href="#" className="fab fa-instagram"></a>
    <a href="#" className="fab fa-linkedin"></a>
    <a href="#" className="fab fa-pinterest"></a>
</div>

<div className="links">
    <a href="#">home</a>
    <a href="#">about</a>
    <a href="#">menu</a>
    <a href="#">products</a>
    <a href="#">review</a>
    <a href="#">contact</a>
    <a href="#">blogs</a>
</div>

</section>

    </div>
  )
}
