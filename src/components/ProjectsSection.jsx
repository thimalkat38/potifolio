import { useState } from "react";
import { ArrowRight, ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Car Rental Management System",
    description: "Car rental system managing bookings, vehicles, customers, and finance efficiently.",
    images: [
      "/projects/HBS/1.PNG",
      "/projects/HBS/2.PNG",
      "/projects/HBS/3.PNG"
    ],
    tags: ["Laravel", "HTML/CSS"],
    demoUrl: "https://cars.ezonepos.lk",
    githubUrl: "https://github.com/My-It-Solutions/HBS-Rent-a-Car-System.git",
  },
  {
    id: 2,
    title: "Carzone.lk",
    description: "Online Vehicle Selling Web App.",
    images: [
      "/projects/Carzone/1.PNG",
      "/projects/Carzone/2.PNG"
    ],
    tags: ["PHP", "JavaScript", "Tailwind CSS"],
    demoUrl: "https://carzone.lk",
    githubUrl: "https://github.com/thimalkat38/carzone.lk.git",
  },
  {
    id: 3,
    title: "Green Bin",
    description: "Green Bin is an e-platform for recycling waste and earning rewards through community-driven green practices.",
    images: [
      "/projects/Green Bin/1.png",
      "/projects/Green Bin/2.png",
      "/projects/Green Bin/3.png"
    ],
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/sliituni/GarbageManagementSystem",
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % selectedProject.images.length
    );
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              onClick={() => openModal(project)}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/thimalkat38"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="relative bg-gary rounded-lg max-w-2xl w-full p-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black-600 hover:text-black"
            >
              <X size={24} />
            </button>

            <h3 className="text-xl font-bold mb-4 text-center">
              {selectedProject.title}
            </h3>

            <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`Slide ${currentImageIndex}`}
                className="w-full h-full object-cover rounded"
              />
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow hover:bg-gray-100"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow hover:bg-gray-100"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
