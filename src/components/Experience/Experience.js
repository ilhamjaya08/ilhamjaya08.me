import React from "react";
import Particle from "../Particle";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github"

function Experience () {
    return (
        <Container fluid className="experience-section">
            <Particle />

            <h1 className="experience-heading">
             My <strong className="strongblue">TechStack </strong>
            </h1>
            <Techstack />
            
            <h1 className="experience-heading">
             My <strong className="strongblue">ToolStack</strong>
            </h1>
            <Toolstack />

            <Github />

        </Container>
    );
}

export default Experience;