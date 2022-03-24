import { apiProject } from "@/React/services/data";
import React, { useState, useEffect } from "react";
import { Arrow, ButtonList, ChangePage, Page } from "./styles";
import Card from "@/React/components/Card";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import UseRedirectView from "@/React/utils/UseRedirectView";
import SkeletonContent from "@/React/components/Skeleton";
import { SkeletonItem } from "@/React/components/Skeleton/styles";

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [position, setPosition] = useState(0);
    const [quantityPositions, setQuantityPositions] = useState(10);

    const fetchData = async () => {
        const width =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;

        let quantityProjectsPerSlider;

        width < 700
            ? (quantityProjectsPerSlider = 1)
            : (quantityProjectsPerSlider = Math.trunc((width - 50) / 350));

        await apiProject
            .index(quantityProjectsPerSlider * quantityPositions)
            .then((response) => {
                let aux = [];
                while (response.data.data.length > 0) {
                    aux = [
                        ...aux,
                        response.data.data.splice(0, quantityProjectsPerSlider),
                    ];
                }

                setProjects(aux);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handlePosition = (direction) => {
        direction === "next"
            ? setPosition(position + 1)
            : setPosition(position - 1);
    };

    const changePosition = (p) => {
        setPosition(p);
    };

    return (
        <>
            {loading ? (
                <SkeletonContent>
                    <SkeletonItem
                        width="350px"
                        height="20px"
                        margin="10px 0 0 10px"
                    />
                    <SkeletonItem height="450px" margin="20px 0" />
                    <SkeletonItem
                        width="80%"
                        height="10px"
                        margin="20px auto 20px auto"
                    />
                    <SkeletonItem
                        width="100px"
                        height="30px"
                        margin="10px 0 20px auto"
                    />
                </SkeletonContent>
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
                        {position !== 0 ? (
                            <Arrow
                                directionLeft={true}
                                onClick={() => handlePosition("prev")}
                            >
                                <MdKeyboardArrowLeft />
                            </Arrow>
                        ) : (
                            <Arrow
                                disabled
                                directionLeft={true}
                                onClick={() => handlePosition("prev")}
                            >
                                <MdKeyboardArrowLeft />
                            </Arrow>
                        )}
                        {projects[position].map((project, index) => (
                            <Card key={index} project={project} />
                        ))}
                        {position !== quantityPositions - 1 ? (
                            <Arrow
                                directionLeft={false}
                                onClick={() => handlePosition("next")}
                            >
                                <MdKeyboardArrowRight />
                            </Arrow>
                        ) : (
                            <Arrow
                                disabled
                                directionLeft={false}
                                onClick={() => handlePosition()}
                            >
                                <MdKeyboardArrowRight />
                            </Arrow>
                        )}
                    </Page>

                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <ChangePage
                            actived={0 === position}
                            key="button0"
                            onClick={() => changePosition(0)}
                        >
                            <BsCircleFill size="12" />
                        </ChangePage>
                        {Array.from(
                            { length: quantityPositions - 1 },
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
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "end",
                            color: "#999",
                        }}
                    >
                        <ButtonList onClick={() => UseRedirectView.to("list")}>
                            + VER TODOS
                        </ButtonList>
                    </div>
                </div>
            )}
        </>
    );
};

export default Project;
