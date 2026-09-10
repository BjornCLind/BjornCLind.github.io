import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <section id="projects">
      <div className="py-20">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>

        <p className="text-center text-white-200 mt-5 max-w-2xl mx-auto">
          Most of my work is built for internal use and isn&apos;t publicly
          accessible, so these are described rather than linked.
        </p>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-3xl border border-black-300 bg-black-200 p-6 lg:p-8
              backdrop-filter backdrop-blur-lg"
            >
              <h2 className="text-white text-lg md:text-xl font-bold">
                {project.title}
              </h2>

              <p className="text-white-200 text-sm md:text-base mt-3 leading-relaxed flex-1">
                {project.des}
              </p>

              <ul className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg bg-[#10132E] px-3 py-1.5 text-xs text-white-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-white-200 mt-12">
          Public code and experiments live on{" "}
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
