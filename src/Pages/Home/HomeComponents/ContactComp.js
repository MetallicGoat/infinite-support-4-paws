import "../HomeStyles/allcomp.css"
import "../HomeStyles/contact.css"
import business from "../../../Images/Business.png";

export default function ContactComp() {
    return(
        <div className="comp contact">
            <div className="contact-info">
                <h2>Contact Info</h2>
                <ul>
                    <li>Phone: 905-537-9646</li>
                    <li>Email: is4paws2020@gmail.com</li>
                    <li>Facebook: Infinite Support 4 Paws</li>
                    <li>Instagram: infinitesupport4paws</li>
                </ul>
            </div>

            <div className="business-image">
                <img src={business} alt="Business Card"/>
            </div>
        </div>
    );
}