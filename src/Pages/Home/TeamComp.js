import "./Styles/allcomp.css"
import "./Styles/team.css"
import headPlaceholder from "../../Images/head-placeholder.png";

export default function TeamComp() {
    return (

        <div className="comp our-team">

            <h2>Our Team</h2>

            <div className="people">
                <div className="person">
                    <img src={headPlaceholder} alt="Name1"/>
                    <h3>Name1</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                </div>

                <div className="person">
                    <img src={headPlaceholder} alt="Name2"/>
                    <h3>Name2</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                </div>

                <div className="person">
                    <img src={headPlaceholder} alt="Name3"/>
                    <h3>Name3</h3>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    );
}