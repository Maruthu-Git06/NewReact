import React from "react";
import { Card, Col, Row, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBug,
  faMicroscope,
  faClipboardList,
  faRedo,
  faStarHalfAlt
} from "@fortawesome/free-solid-svg-icons";


const Progress = ({ title, percentage, icon, color, last = false }) => {
  const extraClassName = last ? "" : "mb-3";

  return (
    <Row className={`align-items-center ${extraClassName}`}>
      <Col xs="auto">
        <span className={`icon icon-md text-${color}`}>
          <FontAwesomeIcon icon={icon} className="me-2" size="lg" />
        </span>
      </Col>
      <Col>
        <div className="progress-wrapper">
          <div className="progress-info d-flex justify-content-between">
            <h6 className="mb-1">{title}</h6>
            <small className="fw-bold text-dark">{percentage} %</small>
          </div>
          <ProgressBar variant={color} now={percentage} min={0} max={100} />
        </div>
      </Col>
    </Row>
  );
};

const Report = () => {
  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Progress Track</h5>
      </Card.Header>
      <Card.Body>
        <Progress
          title="Code Complexity"
          color="primary"
          icon={faCode}
          percentage={34}
        />
        <Progress
          title="Defeat Density"
          color="danger"
          icon={faBug}
          percentage={60}
        />
        <Progress
          title="Defect Injection Rate (DIR)"
          color="success"
          icon={faMicroscope}
          percentage={45}
        />
        <Progress
          title="Code Maintainability Index"
          color="info"
          icon={faClipboardList}
          percentage={35}
        />
        <Progress
          title="Rework Percentage (%)"
          color="secondary"
          icon={faRedo}
          percentage={34}
        />
        <Progress
          last
          title="Code Review Score (1-10)"
          color="warning"
          icon={faStarHalfAlt}
          percentage={8}
        />
      </Card.Body>
    </Card>
  );
};

export default Report;
