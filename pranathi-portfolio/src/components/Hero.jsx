import React from 'react';
import { resumeData } from '../data/resume';

const Hero = () => {
    const styles = {
        section: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px', // Offset for fixed nav
            position: 'relative',
            overflow: 'hidden',
        },
        content: {
            maxWidth: '800px',
            zIndex: 1,
        },
        role: {
            color: 'var(--primary)',
            fontWeight: '600',
            marginBottom: '1rem',
            display: 'inline-block',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontSize: '1.2rem',
            fontFamily: 'var(--font-heading)',
        },
        title: {
            fontSize: '2.8rem',
            fontWeight: '800',
            marginBottom: '1rem',
            lineHeight: 1.1,
            color: 'var(--text-main)',
            letterSpacing: '-0.04em',
        },
        summary: {
            fontSize: '1rem',
            color: 'var(--text-muted)',
            marginBottom: '2rem',
            maxWidth: '550px',
            lineHeight: 1.8,
        },
        glow: {
            display: 'none',
        },
        buttonGroup: {
            display: 'flex',
            gap: '1rem'
        }
    };

    return (
        <section id="hero" style={styles.section} className="container reveal">
            <div style={styles.glow}></div>
            <div style={styles.content}>
                <span className="slide-in-left" style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: '600' }}>Hello, I'm</span>
                <h1 className="slide-in-left delay-100" style={styles.title}>{resumeData.name}</h1>
                <span className="slide-in-right delay-200" style={styles.role}>{resumeData.role}</span>
                <p className="reveal active delay-300" style={styles.summary}>{resumeData.summary}</p>
                <div className="reveal active delay-400" style={styles.buttonGroup}>
                    <a href="#projects" className="btn pulse">View My Work</a>
                    <a href={resumeData.contact.github} target="_blank" rel="noreferrer" className="btn" style={{ background: 'transparent', border: '1px solid var(--text-muted)' }}>GitHub Profile</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
