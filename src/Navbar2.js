import { useState } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import logoImg from './Images/logo.png'
import './Hrmscss/navabr2.css'
import axios from 'axios';
import { toast } from 'react-toastify';

function AppNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const token = localStorage.getItem("response-token");
  const empId = localStorage.getItem("EmpID")

  function checkStatus() {
    axios.post(`/payroll/timeSheet/checkStatus/${empId}`, {},
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    ).then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err)
    })
  }

  const navigate = useNavigate();
  function handleLogin() {
    navigate('/login');
  }

  const handleLogout = () => {
    axios.post(`/api/user/logout`, {
      "deviceInfo": {
        "deviceId": "D1",
        "deviceType": "DEVICE_TYPE_ANDROID",
        "notificationToken": null
      }
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(res => {
      localStorage.clear();
      console.log(res.data);
      toast.success('Logout-Successfull.', { position: "top-center", theme: "colored" });

    }).catch(error => {
      localStorage.clear();
      toast.error('server error Cannot Logout.', { position: "top-center", theme: "colored" });
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    })
    navigate('/login');
  }
  const handleDropdownOpen = (id) => {
    setDropdownOpen(id);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(null);
  };

  return (
    <div className='main'>
      <Navbar expand="lg" className="navbar navbar-light bg-light">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={logoImg}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav"  className='d-flex justify-content-end'>
           
            <Nav className="ml-auto">
              <Button onClick={handleLogin} variant="outline-success" className="mx-2">Login</Button>
              <Button onClick={handleLogout} variant="outline-danger" className="mx-2">Logout</Button>
            </Nav>
          </Navbar.Collapse> 
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavbar;




























// import { useState } from 'react';
// import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
// import { FaUserCircle } from 'react-icons/fa';
// import { MdExitToApp } from 'react-icons/md';
// import { NavLink, useNavigate, Link } from 'react-router-dom';
// import logoImg from './Images/logo.png';
// import './Hrmscss/navabr2.css';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// function AppNavbar() {
//   const [hovered, setHovered] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const token = localStorage.getItem('response-token');
//   const empId = localStorage.getItem('EmpID');

//   function checkStatus() {
//     axios
//       .post(`/payroll/timeSheet/checkStatus/${empId}`, {}, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then(res => {
//         console.log(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   const navigate = useNavigate();

//   function handleLogin() {
//     navigate('/login');
//   }

//   const handleLogout = () => {
//     axios
//       .post(
//         `/api/user/logout`,
//         {
//           deviceInfo: {
//             deviceId: 'D1',
//             deviceType: 'DEVICE_TYPE_ANDROID',
//             notificationToken: null,
//           },
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       .then(res => {
//         localStorage.clear();
//         console.log(res.data);
//         toast.success('Logout-Successfull.', {
//           position: 'top-center',
//           theme: 'colored',
//         });
//       })
//       .catch(error => {
//         localStorage.clear();
//         toast.error('server error Cannot Logout.', {
//           position: 'top-center',
//           theme: 'colored',
//         });
//         console.log(error.response.data);
//         console.log(error.response.status);
//         console.log(error.response.headers);
//       });
//     navigate('/login');
//     };


//   return (
//   <div className="main">
//   <Navbar expand="lg" className="navbar navbar-light bg-light">
//   <Container fluid>
//   <Navbar.Brand href="/">
//   <img
//              src={logoImg}
//              width="100"
//              height="100"
//              className="d-inline-block align-top"
//              alt="Logo"
//            />
//   </Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//   <Nav className="ml-auto align-items-center">
//   <div
//     className="d-flex align-items-center"
//     onMouseEnter={() => setHovered(true)}
//     onMouseLeave={() => setHovered(false)}
//   >
//     <NavDropdown
//       id="mega-dropdown"
//       show={hovered && dropdownOpen}
//       onMouseEnter={() => setDropdownOpen(true)}
//       onMouseLeave={() => setDropdownOpen(false)}
//     >
//       <Dropdown.Menu>
//         {token ? (
//           <Dropdown.Item onClick={handleLogout}>
//             <MdExitToApp size={18} className="mr-2" />
//             Logout
//           </Dropdown.Item>
//         ) : (
//           <Dropdown.Item onClick={handleLogin}>
//             Login
//           </Dropdown.Item>
//         )}
//       </Dropdown.Menu>
//     </NavDropdown>
//     <FaUserCircle
//       size={24}
//       color={hovered ? 'blue' : 'gray'}
//       className="ml-auto"
//     />
//   </div>
// </Nav>
//   </Navbar.Collapse>
//   </Container>
//   </Navbar>
//   </div>
//   ); 
// };
//   export default AppNavbar;












// import { useState } from 'react';
// import { Navbar, Nav, NavDropdown ,Dropdown, Button, Container } from 'react-bootstrap';
// import { FaUserCircle } from 'react-icons/fa';
// import { MdExitToApp } from 'react-icons/md';
// import { NavLink, useNavigate, Link } from 'react-router-dom';
// import logoImg from './Images/logo.png';
// import './Hrmscss/navabr2.css';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// function AppNavbar() {
//   const [hovered, setHovered] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const token = localStorage.getItem('response-token');
//   const empId = localStorage.getItem('EmpID');

//   function checkStatus() {
//     axios
//       .post(`/payroll/timeSheet/checkStatus/${empId}`, {}, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then(res => {
//         console.log(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   const navigate = useNavigate();

//   function handleLogin() {
//     navigate('/login');
//   }

//   const  handleLogout = () => {
//     axios
//       .post(
//         `/api/user/logout`,
//         {
//           deviceInfo: {
//             deviceId: 'D1',
//             deviceType: 'DEVICE_TYPE_ANDROID',
//             notificationToken: null,
//           },
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       .then(res => {
//         localStorage.clear();
//         console.log(res.data);
//         toast.success('Logout-Successfull.', {
//           position: 'top-center',
//           theme: 'colored',
//         });
//       })
//       .catch(error => {
//         localStorage.clear();
//         toast.error('server error Cannot Logout.', {
//           position: 'top-center',
//           theme: 'colored',
//         });
//         console.log(error.response.data);
//         console.log(error.response.status);
//         console.log(error.response.headers);
//       });
//     navigate('/login');
//   };

//   return (
//     <div className="main">
//       <Navbar expand="lg" className="navbar navbar-light bg-light">
//         <Container fluid>
//           <Navbar.Brand href="/">
//             <img
//               src={logoImg}
//               width="100"
//               height="100"
//               className="d-inline-block align-top"
//               alt="Logo"
//             />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ml-auto align-items-center">
//               <div
//                 className="d-flex align-items-center"
//                 onMouseEnter={() => setHovered(true)}
//                 onMouseLeave={() => setHovered(false)}
//               >
//                 <NavDropdown
//                   id="mega-dropdown"
//                   show={hovered && dropdownOpen}
//                   onMouseEnter={() => setDropdownOpen(true)}
//                   onMouseLeave={() => setDropdownOpen(false)}
//                 >
//                   <Dropdown.Menu>
//                     {token ? (
//                       <Dropdown.Item onClick={handleLogout}>
//                         <MdExitToApp size={18} className="mr-2" />
//                         Logout
//                       </Dropdown.Item>
//                     ) : (
//                       <Dropdown.Item onClick={handleLogin}>
//                         Login
//                       </Dropdown.Item>
//                     )}
//                   </Dropdown.Menu>
//                 </NavDropdown>
//                 <FaUserCircle
//                   size={24}
//                   color={hovered ? 'blue' : 'gray'}
//                   className="ml-auto"
//                   />
//                 </div>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       </div>
//     );
//   }
  
//   export default AppNavbar;



