import CoreServices from '../components/CoreServices';
import Impact from '../components/Impact';
import AutomationSolutions from '../components/AutomationSolutions';
import AboutNavbar from '../components/AboutNavbar.jsx';
import vid1 from '/assets/images/vid2.mp4';
import AboutVideo from '../components/AboutVideo.jsx';
import Footer from '../components/Footer.jsx';

export default function DigitalisationAndAutomation() {
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <AboutNavbar />
            <AboutVideo
                vid1={vid1}
                title={'Capabilities'}
                des={'Core Capabilities and Strategic Advantages'}
            />
            <CoreServices />
            <Impact />
            <AutomationSolutions />
            <Footer />
        </div>
    )
}
