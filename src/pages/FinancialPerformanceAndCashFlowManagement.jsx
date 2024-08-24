import MonthlyProfit from '../components/MonthlyProfit';
import MonthlyBalanceSheet from '../components/MonthlyBalanceSheet';
import CashflowForecasting from '../components/CashflowForecasting';
import BreakevenAnalysis from '../components/BreakevenAnalysis.jsx';
import ReceivablesPayablesSystem from '../components/ReceivablesPayablesSystem.jsx';
import ProfitMarginperOrder from '../components/ProfitMarginperOrder.jsx';
import KpiDashboard from '../components/KpiDashboard.jsx';
import AboutNavbar from '../components/AboutNavbar.jsx';
import Footer from '../components/Footer.jsx';

export default function FinancialPerformanceAndCashFlowManagement() {
    return (
        <>
            <AboutNavbar />
            <MonthlyProfit />
            <MonthlyBalanceSheet />
            <CashflowForecasting />
            <BreakevenAnalysis />
            <ReceivablesPayablesSystem />

            <ProfitMarginperOrder />

           
            <KpiDashboard />
            <Footer />
        </>
    );
}
