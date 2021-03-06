import Card from "@/React/components/Card";
import SkeletonContent from "@/React/components/Skeleton";
import { SkeletonItem } from "@/React/components/Skeleton/styles";
import { apiProject } from "@/React/services/data";
import UseRedirectView from "@/React/utils/UseRedirectView";
import React, { useState, useEffect } from "react";
import { ButtonBack, Div } from "./styles";

const ListProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [quantityProjectsPerRow, setQuantityProjectsPerRow] = useState("");

    const fetchData = async () => {
        await apiProject.list().then((response) => {
            setProjects(response.data.data);
            const width =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;

            if (width < 600) setQuantityProjectsPerRow("100%");
            else if (width < 850) setQuantityProjectsPerRow("45%");
            else setQuantityProjectsPerRow("30%");
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                <SkeletonContent>
                    <SkeletonItem
                        width="100px"
                        height="50px"
                        margin="10px 0 0 20px"
                    />
                    <SkeletonItem
                        width="95%"
                        height="450px"
                        margin="10px 0 0 20px"
                    />
                    <SkeletonItem
                        width="95%"
                        height="450px"
                        margin="10px 0 0 20px"
                    />
                </SkeletonContent>
            ) : (
                <>
                    <ButtonBack onClick={() => UseRedirectView.to("")}>
                        Voltar
                    </ButtonBack>
                    {console.log(quantityProjectsPerRow)}
                    <Div percentage={quantityProjectsPerRow}>
                        {projects.map((project, index) => (
                            <Card project={project} key={index} width="100%" />
                        ))}
                    </Div>
                </>
            )}
        </>
    );
};

export default ListProjects;
