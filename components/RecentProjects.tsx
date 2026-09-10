const RecentProjects = () => {
  return (
    <section id="projects">
      <div className="py-20">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <p className="text-center text-white-200 mt-5">
          Project write-ups are on the way. In the meantime, my code is on{" "}
          <a
            href="https://github.com/BjornCLind"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default RecentProjects;
