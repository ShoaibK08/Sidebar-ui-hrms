import React, { createContext } from "react";
import Empfunc from './employeedetails';
import EditEmployee from "./EditEmployee";
import PositionDetails from './Position';
import Login from "./login";
import CreatePosition from './CreatePosition';
import Getinterviewdetails from './Getinterview';
import HomePage2 from "./HomePage2";
import TimeSheet from './TimeSheet';
import RegisterUser from './RegisterUser';
import Payslipdetails from './Payslipdetails';
import GetAllAttendance from "./GetAllAttendance";
import CreateExpense from "./CreateExpense";
import EditExpenses from "./EditExpenses";
import CreateInterview from "./CreateInterviewDetails";
import Capex from './Capex';
import ClientInfoTable from "./GetClientInfo";
import Saveclientinfo from "./PostClientInfo";
import EditClient from './EditClient';
import NewpassForm from './NewpassForm';
import ForgotPassword from './Forgotpass';
import SaveClientFormik from './createclientformik';
import Getallexpenses from "./GetAllExpenses";
import AppNavbar from './Navbar2';
import ChangepasswordForm from './ChangePassword';
import CandidateDetails from './GetCandidatedetails';
import InterviewCandidate from './CreateCandidatedetails';
import GetAllEmpAttendance from './GetAllEmpAttendance'
import EditCandidate from './EditCandidate';
import EditInterviewDetails from './EditInterviewDetails';
import LeaveTest from './Leave';
import { Route, Routes } from "react-router-dom";
 import SideBar from './SideBarComponents/SideBar'
import GetAllPrEngagement from "./GetAllPrEngagement";
import EditProjectEngagement from "./EditProjectEngagement";
import EmployeeSalary from "./EmployeeSalary";

export const UserContext = createContext();
const Approuter = () => {
    return (
        <div>
            <AppNavbar></AppNavbar>
              <SideBar>            
              <Routes>
                <Route path="/" element={<HomePage2 />} />
                <Route path="/Leave" element={<LeaveTest />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/empfunc' element={<Empfunc />} />
                <Route path='/positiondetails' element={<PositionDetails />} />
                <Route path='/Createposition' element={<CreatePosition />} />
                <Route path='/getinterviewdetails' element={<Getinterviewdetails />} />
                <Route path="/TimeSheet" element={<TimeSheet />} />
                <Route path="/RegisterUser" element={<RegisterUser />} />
                <Route path="/payslip" element={<Payslipdetails />} />
                <Route path="/GetAllEmpAttendance" element={<GetAllEmpAttendance />} />
                <Route path="/getallempattendence" element={<GetAllAttendance />} />
                <Route path="/createExpense" element={<CreateExpense />} />
                <Route path="/editexpenses/:id" element={<EditExpenses />} />
                <Route path="/EditCandidate/:id" element={<EditCandidate />} />
                <Route path="/EditEmployee/:id" element={<EditEmployee />} />
                <Route path="/EditInterviewDetails/:id/:id2" element={<EditInterviewDetails />} />
                <Route path="/EditClient/:id" element={<EditClient />} />
                <Route path="/createinterview" element={<CreateInterview />} />
                <Route path="/Getclientinfo" element={<ClientInfoTable />} />
                <Route path="/PostClientInfo" element={<Saveclientinfo />} />
                <Route path="/createClientformik" element={<SaveClientFormik />} />
                <Route path="/Capex" element={<Capex />} />
                <Route path="/ForgotPassword" element={<ForgotPassword />} />
                <Route path="/NewpassForm" element={<NewpassForm />} />
                <Route path="/Getallexpenses" element={<Getallexpenses />} />
                <Route path="/ChangepasswordForm" element={<ChangepasswordForm />} />
                <Route path='/getcandidate' element={<CandidateDetails />} />
                <Route path='/createCandidate' element={<InterviewCandidate />} />
                <Route path='/GetAllPrEngagement' element={<GetAllPrEngagement/>} />
                <Route path='/EditProjectEngagement/:projectId' element={<EditProjectEngagement/>} />
                <Route path ='/EmployeeSalary' element={<EmployeeSalary />}></Route>
            </Routes>
              </SideBar>  

        </div>

    )
}
export default Approuter;