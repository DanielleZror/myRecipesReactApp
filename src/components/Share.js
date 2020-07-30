import React from 'react';
import '../styles/share.css'
import { FaShareSquare, FaFacebook } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FiLink } from 'react-icons/fi'

const Share = () => {

    const copyToClipboard = () => {
        const copyText = document.createElement('textarea');
        copyText.value = window.location.href;
        document.body.appendChild(copyText);
        copyText.select();
        document.execCommand('copy');
        document.body.removeChild(copyText);
        alert(`copy - ${window.location.href}`)
      };

    let linkWhatsapp = `https://wa.me/?text=Look at this recipe by ${JSON.parse(sessionStorage.userData).Name} !!! 
        ${encodeURIComponent(window.location.href)}`

    let linkFacebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)};src=sdkpreparse`

    return (
        <div className="share-div">
            <input type="checkbox" className="checkbox-share" id="share" />
            <label for="share"> <FaShareSquare className="share-icon" title="Share" /></label>
            <div className="social">
                <ul>
                    <li><a target="_blank" href={linkWhatsapp}>
                        <IoLogoWhatsapp className="social-icons whatsapp" /></a></li>
                    <li><a target="_blank" href={linkFacebook}>
                        <FaFacebook className="social-icons facebook" /></a></li>
                    <li><FiLink className="social-icons link" onClick={copyToClipboard}/></li>
                </ul>
            </div>
        </div>
    )
}

export default Share

