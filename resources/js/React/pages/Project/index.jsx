import { apiProject } from "@/React/services/data";
import React, { useState, useEffect } from "react";
import { Arrow, ChangePage, Page } from "./styles";
import Card from "@/React/components/Card";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [position, setPosition] = useState(0);
    const [quantityPositions, setQuantityPositions] = useState(0);

    const fetchData = async () => {
        await apiProject.index().then((response) => {
            setProjects(response.data.data);
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setQuantityPositions(projects.length -1);
    }, [projects]);

    const handlePosition = () => {
        setPosition(position + 1);
    };

    const changePosition = (p) => {
        setPosition(p);
    };

    return (
        <>
            {loading ? (
                <></>
            ) : (
                <div>
                    <h2
                        style={{
                            color: "#529192",
                            fontSize: "1.3rem",
                            fontWeight: "500",
                        }}
                    >
                        Ver Outros Projetos do Proponente
                    </h2>
                    <Page>
                        <Arrow
                            directionLeft={true}
                            onClick={() => handlePosition()}
                        >
                            <MdKeyboardArrowLeft />
                        </Arrow>
                        {projects[position].map((project, index) => (
                            <Card key={index} project={project} />
                        ))}
                        <Arrow
                            directionLeft={false}
                            onClick={() => handlePosition()}
                        >
                            <MdKeyboardArrowRight />
                        </Arrow>
                    </Page>

                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        {Array.from(
                            { length: quantityPositions },
                            (_, i) => i + 1
                        ).map((p) => (
                            <ChangePage
                                actived={p === position}
                                key={`button${p}`}
                                onClick={() => changePosition(p)}
                            >
                                <BsCircleFill size="12" />
                            </ChangePage>
                        ))}
                    </div>
                    <div style={{display: 'flex', justifyContent: 'end', color: '#999'}}>
                        <a href="#">+ VER TODOS</a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Project;
