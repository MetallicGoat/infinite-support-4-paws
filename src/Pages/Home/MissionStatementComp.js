import "./Styles/mission.css"
import collage from "../../Images/Collage1.jpg"

export default function MissionStatementComp(){
    return(
        <div className="mission-statement">

            <div className="mission-image">
                <img src={collage} alt="Mission"/>
            </div>

            <div className="mission-text">
                <h2>Mission Statement</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid.</p>
            </div>
        </div>
    );
}