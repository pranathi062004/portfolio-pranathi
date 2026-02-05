import React from 'react';
import { resumeData } from '../data/resume';

const Experience = () => {
    const styles = {
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2.5rem',
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
        },
        header: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.2rem',
        },
        company: {
            fontSize: '1.8rem',
            fontWeight: '800',
            color: 'var(--text-main)',
            letterSpacing: '-0.02em',
        },
        role: {
            fontSize: '1.1rem',
            fontWeight: '600',
            background: 'var(--gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
        },
        duration: {
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            fontWeight: '500',
        },
        list: {
            paddingLeft: '1.2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
        },
        item: {
            fontSize: '0.95rem',
            color: 'var(--text-muted)',
            position: 'relative',
        },
        techContainer: {
            marginTop: 'auto',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
        }
    };

    return (
        <section id="experience" className="section container reveal">
            <h2 className="section-title">Professional Experience</h2>
            <div style={styles.grid}>
                {resumeData.experience.map((exp, index) => (
                    <div key={index} className="card" style={styles.card}>
                        <div style={styles.header}>
                            <h3 style={styles.company}>{exp.company}</h3>
                            <span style={styles.role}>{exp.role}</span>
                            <span style={styles.duration}>{exp.duration}</span>
                        </div>
                        <ul style={styles.list}>
                            {exp.description.map((bullet, i) => (
                                <li key={i} style={styles.item}>{bullet}</li>
                            ))}
                        </ul>
                        <div style={styles.techContainer}>
                            {exp.tech.map((t, i) => (
                                <span key={i} className="tag">{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
