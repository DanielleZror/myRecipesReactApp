import React from 'react';
import '../styles/share.css'
import { FaShareSquare, FaFacebook } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FiLink, FiMail } from 'react-icons/fi'

const Share = (props) => {
    let title = `Look at this recipe- ${props.recipeName}`
    let body = encodeURIComponent(window.location.href)

    const copyToClipboard = () => {
        const copyText = document.createElement('textarea');
        copyText.value = window.location.href;
        document.body.appendChild(copyText);
        copyText.select();
        document.execCommand('copy');
        document.body.removeChild(copyText);
        alert(`copy - ${window.location.href}`)
      };

    let linkWhatsapp = `https://wa.me/?text=${title} !!! ${body}`

    let linkFacebook = `https://www.facebook.com/share.php?u=${body}`

    let linkMail = `mailto:?subject=${title}&body=${body}`

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
                    <li><a target="_blank" href={linkMail}>
                        <FiMail className="social-icons mail" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Share

