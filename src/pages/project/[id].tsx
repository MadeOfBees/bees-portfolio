import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";

const ProjectPage = () => {
  const idString = useRouter().query.id as string;
  const [pageHeader, setPageHeader] = React.useState("");
  const [pageContent, setPageContent] = React.useState("");
  const [pageImage, setPageImage] = React.useState("");
  const [githubLink, setGithubLink] = React.useState("");
  const [deployedLink, setDeployedLink] = React.useState("");

  React.useEffect(() => {
    if (idString === "Project 1") {/////////////////////////////////////////////////////
      setPageHeader(idString);
      setPageContent("This is the first project");
      setPageImage(
        "https://developer.valvesoftware.com/w/images/5/5b/Missing_textures_example.png"
      );
      setGithubLink("http://www.github.com/MadeOfBees");
      setDeployedLink("http://www.github.com/MadeOfBees");
    } else if (idString === "Project 2") {//////////////////////////////////////////////
      setPageHeader(idString);
      setPageContent("This is the second project");
      setPageImage(
        "https://developer.valvesoftware.com/w/images/5/5b/Missing_textures_example.png"
      );
      setGithubLink("http://www.github.com/MadeOfBees");
      setDeployedLink("http://www.github.com/MadeOfBees");
    } else if (idString === "Project 3") {//////////////////////////////////////////////
      setPageHeader(idString);
      setPageContent("This is the third project");
      setPageImage(
        "https://developer.valvesoftware.com/w/images/5/5b/Missing_textures_example.png"
      );
      setGithubLink("http://www.github.com/MadeOfBees");
      setDeployedLink("http://www.github.com/MadeOfBees");
    } else if (idString === "Project 4") {//////////////////////////////////////////////
      setPageHeader(idString);
      setPageContent("This is the fourth project");
      setPageImage(
        "https://developer.valvesoftware.com/w/images/5/5b/Missing_textures_example.png"
      );
      setGithubLink("http://www.github.com/MadeOfBees");
      setDeployedLink("http://www.github.com/MadeOfBees");
    } else if (idString === "Project 5") {//////////////////////////////////////////////
      setPageHeader(idString);
      setPageContent("This is the fifth project");
      setPageImage(
        "https://developer.valvesoftware.com/w/images/5/5b/Missing_textures_example.png"
      );
      setGithubLink("http://www.github.com/MadeOfBees");
      setDeployedLink("http://www.github.com/MadeOfBees");
    } else if (idString === "Project 6") {//////////////////////////////////////////////
      setPageHeader(idString);
      setPageContent("This is the sixth project");
      setPageImage(
        "https://developer.valvesoftware.com/w/images/5/5b/Missing_textures_example.png"
      );
      setGithubLink("http://www.github.com/MadeOfBees");
      setDeployedLink("http://www.github.com/MadeOfBees");
    }
  }, [idString]);

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
        <div className="w-1/3 h-1/3 p-6">
          <img
            className="w-full h-full object-cover"
            src={pageImage}
            alt={pageHeader}
          />
        </div>
        <p>{pageContent}</p>
        <div className="flex flex-row justify-center w-1/2 h-1/4">
          <div className="flex flex-col items-center justify-center w-1/2 h-full">
            <h4>Github Link:</h4>
            <a href={githubLink}>{githubLink}</a>
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 h-full">
            <h4>Deployed Link:</h4>
            <a href={deployedLink}>{deployedLink}</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectPage;
