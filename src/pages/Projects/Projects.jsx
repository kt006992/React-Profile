import React, { useState, useEffect } from 'react';
import { projectsData } from './ProjectsData.js';
import './Projects.css';
import '../Notes/Notes.css'; // 引入 Notes.css 以共享样式

// 图片轮播组件
const ImageCarousel = ({ images, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 每3秒切换一张图片

    return () => clearInterval(interval);
  }, [images.length]);

  if (!images || images.length === 0) {
    return (
      <div className="empty-placeholder">
        <div className="empty-placeholder-icon">🖼️</div>
        <div className="empty-placeholder-text">No images available</div>
      </div>
    );
  }

  return (
    <div className="image-carousel">
      <div 
        className="carousel-container"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} - Image ${index + 1}`}
            className="carousel-image"
            onError={(e) => {
              // 如果图片加载失败，隐藏该图片
              e.target.style.display = 'none';
            }}
          />
        ))}
      </div>
      
      {images.length > 1 && (
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // 模拟加载过程，实际上是从本地数据加载
  useEffect(() => {
    const loadProjects = () => {
      setLoading(true);
      // 模拟网络延迟
      setTimeout(() => {
        // 按日期降序排列
        const sortedProjects = [...projectsData].sort((a, b) => new Date(b.date) - new Date(a.date));
        setProjects(sortedProjects);
        setLoading(false);
      }, 500);
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <div className="projects-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>Here are some of the projects I've worked on</p>
      </div>

      <div className="projects-grid">
        {projects.length === 0 ? (
          <div className="no-projects">
            <h3>No projects found</h3>
            <p>Projects will be displayed here once they are added.</p>
          </div>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <ImageCarousel images={project.images} title={project.title} />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {project.technologies && (
                  <div className="project-technologies">
                    {project.technologies.split(',').map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                )}

                <div className="project-links">
                  {project.github_url && (
                    <a 
                      href={project.github_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      <span>📂</span> GitHub
                    </a>
                  )}
                </div>

                {project.date && (
                  <div className="project-date">
                    {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="notes-footer">
          <p>More projects being uploading... 🚀</p>
        </div>
    </div>
  );
};

export default Projects;