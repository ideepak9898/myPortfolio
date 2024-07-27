import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="boldColor">Code</strong>
      </h1>
      <GitHubCalendar
        username="ideepak9898"
        blockSize={15}
        blockMargin={5}
        color="#14DBDB"
        fontSize={16}
        hideColorLegend = {false}
        showWeekdayLabels = {true}
      />
    </Row>
  );
}

export default Github;
