import TeamComp from "./TeamComp";
import EventsComp, {BuildEvent} from "./EventsComp";

/**
 * AboutUsPage Page
 *
 * Why were we founded?
 * Mission?
 * Link to Stories?
 * Images?
 * Donate?
 * Link to Contact?
 *
 **/

export default function AboutUsPage() {
    return (
        <div className="page">
            <EventsComp/>
            <TeamComp/>
        </div>
    );
}