import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
import projectsData from "../../../public/projects.json";

const ProjectPage = () => {
  const idString = useRouter().query.id as string;
  const project = projectsData.find((item) => item.name === idString);
  const [pageHeader, setPageHeader] = React.useState("");
  const [pageContent, setPageContent] = React.useState("");
  const [pageImage, setPageImage] = React.useState("");
  const [githubLink, setGithubLink] = React.useState("");
  const [deployedLink, setDeployedLink] = React.useState("");

  React.useEffect(() => {
    if (!project) return;
    setPageHeader(project.name);
    project.pageContent ? setPageContent(project.pageContent) : setPageContent(" ");
    project.image ? setPageImage(project.image) : setPageImage("https://developer.valvesoftware.com/w/images/5/5b/Missing_textures_example.png");
    project.githubLink ? setGithubLink(project.githubLink) : setGithubLink("https://github.com/MadeOfBees");
    project.deployedLink ? setDeployedLink(project.deployedLink) : null;
  }, [project]);

  return (
    <>
      <Head>
        <title>Bee's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar without={idString} />
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">{pageHeader}</h1>
        <div className="w-1/4 p-6">
          <img
            className="w-full h-full object-cover"
            src={pageImage}
            alt={pageHeader}
          />
        </div>
        <p className="p-6">{pageContent}</p>
        {deployedLink ? (
          <div className="flex flex-row justify-center w-1/2 h-1/4">
            <div className="flex flex-col items-center justify-center w-1/2 h-full">
              {githubLink ? <h4>Github Link:</h4> : <h4></h4>}
              <a href={githubLink}>{githubLink}</a>
            </div>
            <div className="flex flex-col items-center justify-center w-1/2 h-full">
              {deployedLink ? <h4>Deployed Link:</h4> : <h4></h4>}
              <a href={deployedLink}>{deployedLink}</a>
            </div>
          </div>
        ) : (
          <div className="flex flex-row justify-center w-1/2 h-1/4">
            <div className="flex flex-col items-center justify-center w-full h-full">
              {githubLink ? <h4>Github Link:</h4> : <h4></h4>}
              <a href={githubLink}>{githubLink}</a>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ProjectPage;