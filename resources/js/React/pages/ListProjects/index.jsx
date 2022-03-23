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

    const fetchData = async () => {
        await apiProject.list().then((response) => {
            setProjects(response.data.data);
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
                    <div style={{ display: "flex" }}>
                        <SkeletonItem
                            width="30%"
                            height="450px"
                            margin="10px 0 0 20px"
                        />
                        <SkeletonItem
                            width="30%"
                            height="450px"
                            margin="10px 0 0 20px"
                        />
                        <SkeletonItem
                            width="30%"
                            height="450px"
                            margin="10px 0 0 20px"
                        />
                    </div>
                    <div style={{ display: "flex" }}>
                        <SkeletonItem
                            width="30%"
                            height="450px"
                            margin="10px 0 0 20px"
                        />
                        <SkeletonItem
                            width="30%"
                            height="450px"
                            margin="10px 0 0 20px"
                        />
                        <SkeletonItem
                            width="30%"
                            height="450px"
                            margin="10px 0 0 20px"
                        />
                    </div>
                </SkeletonContent>
            ) : (
                <>
                    <ButtonBack onClick={() => UseRedirectView.to("")}>
                        Voltar
                    </ButtonBack>
                    <Div>
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
