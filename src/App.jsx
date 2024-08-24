
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Industries from './pages/Industries';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Insights from './pages/Insights';
import OurAspiration from './pages/OurAspiration';
import OurHistory from './pages/OurHistory';
import OurLeadership from './pages/OurLeadership';
import AllianceAcquisitions from './pages/AllianceAcquisitions';
import PurposeVisionMission from './pages/PurposeVisionMission';
import Coaching from './pages/Coaching';
import Consulting from './pages/Consulting';
import PublicRoute from './pages/PublicRoute';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import CapabilitiesOverview from './pages/Capabilities';
import TechnicalConsulting from './components/TechnicalConsulting';
import ManpowerPlanning from './components/ManpowerPlanning';
import ProcessFlow from './components/ProcessFlow';
import MaterialFlow from './components/MaterialFlow';
import WarehouseSolutions from './components/WarehouseSolutions';
import CoreServices from './components/CoreServices';
import Impact from './components/Impact';
import AutomationSolutions from './components/AutomationSolutions';
import ProEfficient from './components/ProEfficient';
import DeliveryPerformance from './components/DeliveryPerformance';
import RolRespos from './components/RolRespos';
import KpisKras from './pages/KpisKras';
import PerFormanceEv from './components/PerFormanceEv';
import Insentives from './components/Insentives';
import AnnualAppraisalSystems from './components/AnnualAppraisalSystems';
import HrRecruitmentSystems from './components/HrRecruitmentSystems';
import DreamToSuccess from './components/DreamToSuccess';
import TimeManagementProgram from './components/TimeManagementProgram';
import Login from './pages/Login';
import ConsultingOverViews from './pages/ConsultingOverView';
import AdminRoute from './pages/AdminRoute';
import AdminDashboard from './pages/AdminDashboard';
import AdminBlogs from './pages/AdminBlogs';
import AdminNewPost from './pages/AdminNewPost';
import AdminLogout from './pages/AdminLogout';
import AdminCategories from './pages/AdminCategories';
import AdminSubCategories from './pages/AdminSubCategories';
import AdminTestimonials from './pages/AdminTestimonials';
import AdminEvents from './pages/AdminEvents';
import AdminGallery from './pages/AdminGallery';
import AdminJobs from './pages/AdminJobs';
import DigitalisationAndAutomation from './pages/DigitalisationAndAutomation';
import Project from './pages/Project';
import OperationsAndProductivityImprovement from './pages/OperationsAndProductivityImprovement';
import PeopleAndOrganizationalPerformance from './pages/PeopleAndOrganizationalPerformance';
import GeneralManagementAndStrategy from './pages/GeneralManagementAndStrategy';
import GrowthMarketingAndSales from './pages/GrowthMarketingAndSales';
import FinancialPerformanceAndCashFlowManagement from './pages/FinancialPerformanceAndCashFlowManagement';
import ContactUs from './pages/ContactUs';
import Solutions from './pages/Solutions';
import Advisory from './pages/Advisory';
import Events from './pages/Events';
import BlogContent from './pages/BlogContent';
import Tourisum from './pages/Tourisum';
import RealState from './pages/RealState';
import Construction from './pages/Construction';
import FinancialServices from './pages/FinancialServices';
import TrandingWholesale from './pages/TrandingWholesale';
import Ecommerce from './pages/Ecommerce';
import Manufaturing from './pages/Manufaturing';
import OurPeople from './pages/OurPeople';
import HowWeWork from './components/HowWeWork';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" Component={PublicRoute}>
                    <Route exact path="/" Component={Home} />
                        <Route exact path="/home" Component={Home} />
                        <Route exact path="/about" Component={About} />
                        <Route
                            exact
                            path="/industries"
                            Component={Industries}
                        />
                        <Route exact path="/services" Component={Services} />
                        <Route exact path="/careers" Component={Careers} />
                        <Route exact path="/insights" Component={Insights} />
                        <Route
                            exact
                            path="/aspiration"
                            Component={OurAspiration}
                        />
                        <Route exact path="/history" Component={OurHistory} />
                        <Route
                            exact
                            path="/leadership"
                            Component={OurLeadership}
                        />
                          <Route
                            exact
                            path="/Our-People"
                            Component={OurPeople}
                        />
                        <Route exact path="/coaching" Component={Coaching} />
                        <Route
                            exact
                            path="/consulting"
                            Component={Consulting}
                        />
                        <Route
                            exact
                            path="/purpose-vision"
                            Component={PurposeVisionMission}
                        />
                        <Route
                            exact
                            path="/alliance-acquisition"
                            Component={AllianceAcquisitions}
                        />
                        <Route
                            exact
                            path="/blog"
                            Component={Blog}
                        />
                        <Route
                            exact
                            path="/gallery"
                            Component={Gallery}
                        />
                        <Route
                            exact
                            path="/capabilities"
                            Component={CapabilitiesOverview}
                        />
                        <Route
                            exact
                            path="/consultingoverview"
                            Component={ConsultingOverViews}
                        />
                        <Route
                            exact
                            path="/technicalconsulting"
                            Component={TechnicalConsulting}
                        />
                        <Route
                            exact
                            path="/manpowerplanning"
                            Component={ManpowerPlanning}
                        />
                        <Route
                            exact
                            path="/processflow"
                            Component={ProcessFlow}
                        />
                        <Route
                            exact
                            path="/materialflow"
                            Component={MaterialFlow}
                        />
                        <Route
                            exact
                            path="/warehousesolutions"
                            Component={WarehouseSolutions}
                        />
                        <Route
                            exact
                            path="/core-services"
                            Component={CoreServices}
                        />
                        <Route
                            exact
                            path="/impact"
                            Component={Impact}
                        />
                        <Route
                            exact
                            path="/automation-solutions"
                            Component={AutomationSolutions}
                        />
                        <Route
                            exact
                            path="/pro-efficients"
                            Component={ProEfficient}
                        />
                        <Route
                            exact
                            path="/delivery-performance"
                            Component={DeliveryPerformance}
                        />
                        <Route
                            exact
                            path="/rol-respos"
                            Component={RolRespos}
                        />
                        <Route
                            exact
                            path="/kpi-and-kras"
                            Component={KpisKras}
                        />
                        <Route
                            exact
                            path="/performance-evaluation-system"
                            Component={PerFormanceEv}
                        />
                        <Route
                            exact
                            path="/insentives"
                            Component={Insentives}
                        />
                        <Route
                            exact
                            path="/annual-appraisal-systems"
                            Component={AnnualAppraisalSystems}
                        />
                        <Route
                            exact
                            path="/hr-recruitment-systems"
                            Component={HrRecruitmentSystems}
                        />
                        <Route
                            exact
                            path="/dream-to-success"
                            Component={DreamToSuccess}
                        />
                        <Route
                            exact
                            path="/time-management-program"
                            Component={TimeManagementProgram}
                        />
                        {/* By Karthik */}
                        <Route
                            exact
                            path="/digitalisation-and-automation"
                            Component={DigitalisationAndAutomation}
                        />
                        <Route
                            exact
                            path="/project"
                            Component={Project}
                        />
                        <Route
                            exact
                            path="/operations-and-productivity-improvement"
                            Component={OperationsAndProductivityImprovement}
                        />
                        <Route
                            exact
                            path="/people-and-organizational-performance"
                            Component={PeopleAndOrganizationalPerformance}
                        />
                        <Route
                            exact
                            path="/general-management-and-strategy"
                            Component={GeneralManagementAndStrategy}
                        />
                        <Route
                            exact
                            path="/growth-marketing-and-sales"
                            Component={GrowthMarketingAndSales}
                        />
                        <Route
                            exact
                            path="/financial-performance-and-cash-flow-management"
                            Component={FinancialPerformanceAndCashFlowManagement}
                        />
                        <Route
                            exact
                            path="/contact-us"
                            Component={ContactUs}
                        />
                        <Route
                            exact
                            path="/solutions"
                            Component={Solutions}
                        />
                        <Route
                            exact
                            path="/tourisum"
                            Component={Tourisum}
                        />
                         <Route
                            exact
                            path="/real-state"
                            Component={RealState}
                        />
                          <Route
                            exact
                            path="/construction"
                            Component={Construction}
                        />
                         <Route
                            exact
                            path="/financial-services"
                            Component={FinancialServices}
                        />
                         <Route
                            exact
                            path="/tranding-wholesale"
                            Component={TrandingWholesale}
                        />
                         <Route
                            exact
                            path="/e-commerce"
                            Component={Ecommerce}
                        />
                          <Route
                            exact
                            path="/manufaturing"
                            Component={Manufaturing}
                        />
                            <Route
                            exact
                            path="/how-we-work"
                            Component={HowWeWork}
                        />
                        <Route
                            exact
                            path="/advisory"
                            Component={Advisory}
                        />
                        <Route
                            exact
                            path="/events"
                            Component={Events}
                        />
                        <Route
                            path="/show-blog/:name"
                            Component={BlogContent}
                        />
                    </Route>
                    <Route
                        exact
                        path="/admin/login"
                        Component={Login}
                    />
                    <Route path='/admin' Component={AdminRoute}>
                        <Route path='/admin/dashboard' Component={AdminDashboard} />
                        <Route path='/admin/blogs' Component={AdminBlogs} />
                        <Route path='/admin/newblog' Component={AdminNewPost} />
                        <Route path='/admin/categories' Component={AdminCategories} />
                        <Route path='/admin/sub-categories' Component={AdminSubCategories} />
                        <Route path='/admin/testimonials' Component={AdminTestimonials} />
                        <Route path='/admin/events' Component={AdminEvents} />
                        <Route path='/admin/gallery' Component={AdminGallery} />
                        <Route path='/admin/jobs' Component={AdminJobs} />
                    </Route>
                    <Route path='/admin/logout' Component={AdminLogout} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
