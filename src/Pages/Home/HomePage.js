import "./Styles/allcomp.css"
import TeamComp from "./TeamComp";
import EventsComp, {BuildEvent} from "./EventsComp";
import MissionStatementComp from "./MissionStatementComp";
import ContactComp from "./ContactComp";

/**
 * HomePage Page
 *
 * Why were we founded?
 * Mission?
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