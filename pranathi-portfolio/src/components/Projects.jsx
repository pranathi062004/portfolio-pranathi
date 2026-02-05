import React from 'react';
import { resumeData } from '../data/resume';

const Projects = () => {
    const styles = {
        // grid style moved to index.css as .projects-grid
        projectCard: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        },
        title: {
            fontSize: '1.25rem',
            marginBottom: '0.8rem',
            color: 'var(--text-main)',
        },
        description: {
            color: 'var(--text-muted)',
            marginBottom: '1.2rem',
            flexGrow: 1,
            fontSize: '0.9rem',
        },
        tags: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.4rem',
            marginBottom: '1.2rem',
        },
        tag: {
            fontSize: '0.75rem',
            color: 'var(--text-main)',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '0.2rem 0.7rem',
            borderRadius: '4px',
        },
        link: {
            marginTop: 'auto',
            textAlign: 'center',
        }
    };

    return (
        <section id="projects" className="section container reveal">
            <h2 className="section-title">Project Showcase</h2>
            <div className="projects-grid">
                {resumeData.projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="card reveal active"
                        style={{
                            ...styles.projectCard,
                            transitionDelay: `${index * 150}ms`,
                            gridColumn: project.id === 3 ? '2' : 'auto' // Position Digital Signature in column 2
                        }}
                    >
                        <h3 style={styles.title}>{project.title}</h3>
                        <p style={styles.description}>{project.description}</p>
                        <div style={styles.tags}>
                            {project.tech.map((t, i) => (
                                <span key={i} style={styles.tag}>{t}</span>
                            ))}
                        </div>
                        <a href={project.link} target="_blank" rel="noreferrer" className="btn" style={styles.link}>
                            View Repository
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
