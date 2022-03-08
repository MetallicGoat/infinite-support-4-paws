import "./footerstyles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
    return (
        <div className="social-container">
            <a href="https://www.facebook.com/Infinite-Support-4Paws-102356961309518/"
               className="facebook social" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="2x"/>
            </a>
            <a href="https://www.instagram.com/infinitesupport4paws/"
               className="instagram social" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
            </a>
        </div>
    );
}