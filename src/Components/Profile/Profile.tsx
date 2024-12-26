import { useContext } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { AuthContext } from '../Context/AuthContext';
import myImage from '../../assets/images/myImage.jpg';

export default function Profile(): JSX.Element {
  const { userData } = useContext(AuthContext);
  
  

  return (
    <div className="profile-container my-5">
      <Card className="shadow-lg p-3 mx-auto" style={{ maxWidth: '600px' }}>
        <Card.Body>
          <div className="text-center">
            <img
              src={userData?.image || myImage}
              alt="User Profile"
              className="rounded-circle mb-3"
              style={{ width: '120px', height: '120px', objectFit: 'cover' }}
            />
            <h4>{userData?.firstName} {userData?.lastName}</h4>
            <h6 className="text-muted">{userData?.email}</h6>
          </div>
          <hr />
          <Row className="mt-3">
            <Col xs={6}>
              <strong>First Name:</strong>
            </Col>
            <Col xs={6}>{userData?.firstName|| "N/A"}</Col>
          </Row>
          <Row className="mt-3">
            <Col xs={6}>
              <strong>Last Name:</strong>
            </Col>
            <Col xs={6}>{userData?.lastName|| "N/A"}</Col>
          </Row>
          <Row className="mt-3">
            <Col xs={6}>
              <strong>Age:</strong>
            </Col>
            <Col xs={6}>{userData?.age|| "N/A"}</Col>
          </Row>
          <Row className="mt-3">
            <Col xs={6}>
              <strong>Phone:</strong>
            </Col>
            <Col xs={6}>{userData?.phone|| "N/A"}</Col>
          </Row>
          <Row className="mt-3">
            <Col xs={6}>
              <strong>Gender:</strong>
            </Col>
            <Col xs={6}>{userData?.gender}</Col>
          </Row>
          <Row className="mt-3">
            <Col xs={6}>
              <strong>Birth Date:</strong>
            </Col>
            <Col xs={6}>{userData?.birthDate|| "N/A"}</Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
