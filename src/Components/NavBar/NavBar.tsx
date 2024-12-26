import { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { AuthContext } from '../Context/AuthContext'

export default function NavBar() {
  //sidebar نفس الموضوع هعمله في ال  Navbarوبكده هنعرض البيانات اللي انا عايزها في ال  Navbar عشان دي اللي مسكالي الداتا كلها وهنعرضها في ال  userData عايزين منه ال  AuthContextال useContext كده احا جبنا من ال 
  let {userData}=useContext(AuthContext)
  return (
    <div>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">UMS</Navbar.Brand>
          <Nav className="m-auto">
            {/*Navbarفي ال  firstNameكده انا هعرض ال  */}
          <Nav.Link  href="#home">Hello {userData?.firstName}</Nav.Link>
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
