import React, { useState } from "react";
import { ButtonGroup, Col, Row, ToggleButton } from "react-bootstrap";

const ForValidUser = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <Row>
        <Col>
          <img src="https://i.ibb.co/FJQRSHW/5.png" className="w-50 h-50" />
        </Col>
        <Col>
          {" "}
          <p>Leisure</p>
        </Col>
        <Col>
          <ButtonGroup className="mb-2 rounded-0">
            <ToggleButton
              id="toggle-check"
              type="checkbox"
              variant="secondary"
              checked={checked}
              value="1"
              onClick={(e) => setChecked(!checked)}
            >
              {checked ? <span> following</span> : <span>follow</span>}
            </ToggleButton>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src="https://i.ibb.co/FJQRSHW/5.png" className="w-50 h-50" />
        </Col>
        <Col>
          {" "}
          <p>Leisure</p>
        </Col>
        <Col>
          <ButtonGroup className="mb-2">
            <ToggleButton
              id="toggle-check"
              type="checkbox"
              variant="secondary"
              checked={checked}
              value="1"
              onClick={(e) => setChecked(!checked)}
            >
              {checked ? <span> following</span> : <span>follow</span>}
            </ToggleButton>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ForValidUser;
