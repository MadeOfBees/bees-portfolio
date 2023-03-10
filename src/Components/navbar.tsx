import React from "react";
import Link from "next/link";

interface NavbarProps {
  without?: string;
}

export default function Navbar({ without }: NavbarProps) {
  const [projectNames, setProjectNames] = React.useState([]);
  const [newProjectNames, setNewProjectNames] = React.useState([]);

  const getPages = async (): Promise<void> => {
    const response = await fetch("/api/projects/");
    const data = await response.json();
    if (data && data.projects) {
      const pageNames = data.projects.map(
        (project: { name: string }) => project.name
      );
      const newPageNames = data.projects
        .filter((project: { new: boolean }) => project.new === true)
        .map((project: { name: string }) => project.name);
      setProjectNames(pageNames);
      setNewProjectNames(newPageNames);
    }
  };

  React.useEffect(() => {
    getPages();
  }, []);

  return (
    <nav className="btm-nav bg-base-300">
      {without !== "home" ? (
          <Link href="/">
            <span className="btm-nav-label">Home</span>
          </Link>
      ) : (
        <span className="btm-nav-label font-bold">Home</span>
      )}
      <button className="dropdown dropdown-top">
        <label className="btm-nav-label">Projects</label>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-200 w-full text-left"
        >
          {projectNames.map((projectName) => (
            <li key={projectName}>
              {without !== projectName ? (
                <Link href={`/projects/${projectName}`} className="menu-item">
                  {newProjectNames.includes(projectName) ? (
                    <span className="text-base-content text-sm">
                      {projectName}{" "}
                      <span className="text-primary">{"⠀New!"}</span>
                    </span>
                  ) : (
                    <span className="text-base-content text-sm">
                      {projectName}
                    </span>
                  )}
                </Link>
              ) : (
                <span className="menu-item font-bold">
                  {newProjectNames.includes(projectName) ? (
                    <span className="text-base-content text-sm">
                      {projectName}{" "}
                      <span className="text-primary">{"⠀New!"}</span>
                    </span>
                  ) : (
                    <span className="text-base-content text-sm">
                      {projectName}
                    </span>
                  )}
                </span>
              )}
            </li>
          ))}
        </ul>
      </button>
      <label htmlFor="contactModal">
        <span className="btm-nav-label">Contact</span>
      </label>
    </nav>
  );
}
