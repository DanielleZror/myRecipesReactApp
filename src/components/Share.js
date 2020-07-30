import React from 'react';
import '../styles/share.css'
import { FaShareSquare, FaFacebook } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FiLink } from 'react-icons/fi'

const Share = () => {

    let link = `https://wa.me/?text=Look at this recipe by ${JSON.parse(sessionStorage.userData).Name} !!! ${encodeURIComponent(window.location.href)}`
    return (
        <div className="share-div">
            <input type="checkbox" className="checkbox-share" id="share" />
            <label for="share"> <FaShareSquare className="share-icon" title="Share" /></label>
            <div className="social">
                <ul>
                    <li><a target="_blank"
                        href={link}>
                        <IoLogoWhatsapp className="social-icons whatsapp" /></a></li>
                    <li><FaFacebook className="social-icons facebook" /></li>
                    <li><FiLink className="social-icons link" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Share

