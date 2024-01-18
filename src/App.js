import React, { Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FallBackComponent from './components/Fallback';
import { useSelector } from "react-redux";


const Home = React.lazy(() => import('./screens/Home'))
const About = React.lazy(() => import('./screens/About'))
const Card = React.lazy(() => import('./screens/Cards'))
const Contact = React.lazy(() => import('./screens/Contact'))
const Faq = React.lazy(() => import('./screens/Faq'))
const Current = React.lazy(() => import('./screens/Current'))
const Savings = React.lazy(() => import('./screens/Savings'))
const Login = React.lazy(() => import('./screens/Login'))
const Signup = React.lazy(() => import('./screens/Signup'))
const EmailVerify = React.lazy(() => import('./screens/EmailVerify'))
const EmailVerifification = React.lazy(() => import('./screens/EmailVerifification'))
const RegisterationPage = React.lazy(() => import("./screens/Registeration"))
const ForgetPassword = React.lazy(() => import("./screens/ForgetPassword"))
const ResetPassword = React.lazy(() => import("./screens/ResetPassword"))
const PhoneSignup = React.lazy(() => import("./screens/PhoneSignup"))
const PhoneVerification = React.lazy(() => import("./screens/PhoneVerification"))
const Sucess = React.lazy(() => import("./screens/Sucess"))
const ProfilePhoto = React.lazy(() => import("./screens/ProfilePhoto"))
const Dashboard = React.lazy(() => import("./screens/Dashboard"))
const Transfer = React.lazy(() => import("./screens/FundTransfer"))
const BillPay = React.lazy(() => import("./screens/BillPay"))
const SendCard = React.lazy(() => import("./screens/SendToCard"))
const SendAccount = React.lazy(() => import("./screens/SendToAccount"))
const Notification =  React.lazy(() => import("./screens/Notifications"))
const TransactionHistory =  React.lazy(() => import("./screens/TransactionHistory"))
const Profile =  React.lazy(() => import("./screens/Profile"))
const Settings =  React.lazy(() => import("./screens/Settings"))

const Privacy =  React.lazy(() => import("./screens/Privacy"))

const Help  =  React.lazy(() => import("./screens/Help"))
const Deposit  =  React.lazy(() => import("./screens/Deposit"))
const Beneficiaries =  React.lazy(() => import("./screens/Beneficiaries"))
const AddBeneficiaries =  React.lazy(() => import("./screens/AddBeneficiaries"))
const Invite =  React.lazy(() => import("./screens/Invite"))
const NewCard =  React.lazy(() => import("./screens/NewCard"))
const CardForm =  React.lazy(() => import("./screens/CardForm"))
//const DashboardHome =  React.lazy(() => import("./screens/DashboardHome"))
const Withdraw =  React.lazy(() => import("./screens/Withdraw"))
const Tax =  React.lazy(() => import("./screens/TaxCode"))
const TAC =  React.lazy(() => import("./screens/TACcode"))
const NRC =  React.lazy(() => import("./screens/NRCcode"))
const IMF =  React.lazy(() => import("./screens/IMFcode"))
const COT =  React.lazy(() => import("./screens/COTcode"))
const BSA =  React.lazy(() => import("./screens/BsaCode"))


const OTP =  React.lazy(() => import("./screens/OneTimePassword"))
const Loan =  React.lazy(() => import("./screens/Loan"))
const CardDetails =  React.lazy(() => import("./screens/CardDetails"))
const NewCardForm =  React.lazy(() => import("./screens/NewCardForm"))


function App() {

  let { userToken} = useSelector(state => state.userAuth)


  return (
    <div className = "App">
      <Suspense fallback={<FallBackComponent />} >
        <Routes>
          {/* General*/}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cards' element={<Card />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/current' element={<Current />} />
          <Route path='/savings' element={<Savings />} />
        
          {/*auth screens*/}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/verify/:id' element={<EmailVerify />} />
          <Route path='/verification/:id' element={<EmailVerifification />} />
          <Route path='/registeration' element={<RegisterationPage />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/resetpassword/:token' element={<ResetPassword />} />
          <Route path='/phonesignup' element={<PhoneSignup />} />
          <Route path='/phoneverification' element={<PhoneVerification />} />
          <Route path='/profilephoto' element={userToken?<ProfilePhoto />:<Login/>} />
          <Route path='/success' element={<Sucess />} />
          <Route path='/dashboard' element={userToken?<Dashboard />:<Login/>} />
          <Route path='/transfer' element={userToken?<SendAccount />:<Login/>} />
          <Route path='/billpay' element={userToken?<BillPay />:<Login/>} />
          <Route path='/send-card' element={userToken?<SendCard />:<Login/>} />
          <Route path='/send-account' element={userToken?<SendAccount />:<Login/>} />
          <Route path='/notifications' element={userToken?<Notification/>:<Login/>} />
          <Route path='/transaction-history' element={userToken?<TransactionHistory/>:<Login/>} />
           <Route path='/profile' element={userToken?<Profile/>:<Login/>} />
           <Route path='/settings' element={userToken?<Settings/>:<Login/>} />
           <Route path='/privacy' element={userToken?<Privacy/>:<Login/>} />
           <Route path='/help' element={userToken?<Help/>:<Login/>} />
           <Route path='/deposit' element={userToken?<Deposit/>:<Login/>} />
           <Route path='/beneficiaries' element={userToken?<Beneficiaries/>:<Login/>} />
           <Route path='/add-beneficiaries' element={userToken?<AddBeneficiaries/>:<Login/>} />
           <Route path='/invite' element={userToken?<Invite/>:<Login/>} />
           <Route path='/new-card' element={userToken?<Dashboard />:<Login/>} />
           <Route path='/card-form' element={userToken?<CardForm/>:<Login/>} />
           <Route path='/home' element={userToken?<Dashboard />:<Login/>} />
           <Route path='/withdraw' element={userToken?<Withdraw/>:<Login/>} />


           <Route path='/tax' element={userToken?<Tax/>:<Login/>} />
           <Route path='/bsa' element={userToken?<BSA/>:<Login/>} />
           <Route path='/tac' element={userToken?<TAC/>:<Login/>} />
           <Route path='/nrc' element={userToken?<NRC/>:<Login/>} />
           <Route path='/imf' element={userToken?<IMF/>:<Login/>} />
           <Route path='/cot' element={userToken?<COT/>:<Login/>} />



           <Route path='/otp' element={userToken?<OTP/>:<Login/>} />
          
           <Route path='/loan' element={userToken?<Loan/>:<Login/>} />
           <Route path='/card' element={userToken?<CardForm/>:<Login/>} />
           <Route path='/new-card-form' element={userToken?<NewCardForm/>:<Login/>} />
           <Route path='/card-details/:id' element={userToken?<CardDetails/>:<Login/>} />


        </Routes>

      </Suspense>
    </div>
  );
}

export default App;

