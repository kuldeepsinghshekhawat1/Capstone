import React from 'react';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ExploreIcon from '@material-ui/icons/Explore';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';import PhoneIcon from '@material-ui/icons/Phone';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            {/* Logo is here*/}
            <img 
            className="header__logo" 
            src = "data:image/jpeg;base64,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" 
            />
  {/*   
  <div className = "header__fill">
                <h1><span>THIS IS FILLER TEXTTHIS IS FILLER TEXTTHIS  </span></h1>
            </div>
    */}
     
        <div className="header__nav">
        
        <div className="user__icon">
               <EmojiPeopleIcon/>    
            </div>

            <div className="header__option">
                <span
                className="option1">
                    Hello  
                </span>
                <span
                className="option2">
                   Sign in 
                </span>
            </div>

            <div className="user__icon">
               <MonetizationOnIcon/>    
            </div> 
            
            <div className="header__option">
            <span
                className="option1">
                    Donate 
                </span>
                <span
                className="option2">
                   or Volunteer 
                </span>
            </div>   

     
            
           <div className="user__icon">
               <ExploreIcon/>    
            </div>

            <div className="header__option">
            <span
                className="option1">
                   Locate nearby
                </span>
                <span
                className="option2">
                   Donation centers 
                </span>
                
           </div>


           <div className="user__icon">
               <ShoppingBasketIcon/> 
               <span className="header__basketCount">0</span> 
            </div>

           <div className="header__option">
            <span
                className="option1">
                   Buy merch 
                </span>
                <span
                className="option2">
                 & support us
                </span>
                
           </div>
                       

           <div className="user__icon">
               <MenuBookIcon/>    
            </div>

                        
           <div className="header__option">
            <span
                className="option1">
                   Newsletter  
                </span>
                <span
                className="option2">
                   &  updates
                </span>
            </div>

            <div className="user__icon">
               <PhoneIcon/>    
            </div>
            
            <div className="header__option">
            <span
                className="option1">
                   Know more/  
                </span>
            <span className="option2">
                Contact Us
            </span>
            </div>
            

            
        </div>

        </div>
    )
};

export default Header;
