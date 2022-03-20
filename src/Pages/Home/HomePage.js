import "./HomeStyles/allcomp.css"
import TeamComp from "./HomeComponents/TeamComp";
import EventsComp, {BuildEvent} from "./HomeComponents/EventsComp";
import MissionStatementComp from "./HomeComponents/MissionStatementComp";
import ContactComp from "./HomeComponents/ContactComp";

/**
 * HomePage Page
 *
 * Why were we founded?
 * Link to StoriesPage?
 * Images?
 * Donate?
 * Link to Contact?
 *
 **/

export default function HomePage() {
    return (
        <div className="page">
            <MissionStatementComp/>
            <EventsComp/>
            <ContactComp/>
            <TeamComp/>
        </div>
    );
}