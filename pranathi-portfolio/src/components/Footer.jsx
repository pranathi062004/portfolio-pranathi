import React from 'react';
import { resumeData } from '../data/resume';

const Footer = () => {
    const styles = {
        footer: {
            borderTop: '1px solid var(--bg-card)',
            padding: '4rem 0',
            marginTop: '4rem',
            textAlign: 'center',
            background: 'var(--bg-card)',
        },
        name: {
            fontSize: '2rem',
            fontWeight: '700',
            marginBottom: '1rem',
        },
        links: {
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '2rem',
        },
        link: {
            color: 'var(--text-muted)',
            fontSize: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
        },
        copyright: {
            color: 'var(--text-muted)',
            fontSize: '0.9rem'
        }
    };

    const EmailIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
    );

    const LinkedInIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
    );

    const GitHubIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
    );

    return (
        <footer style={styles.footer}>
            <div className="container">
                <h2 style={styles.name}>Let's Connect</h2>
                <div style={styles.links}>
                    <a href={`mailto:${resumeData.contact.email}`} style={styles.link}>
                        <EmailIcon />
                        Email
                    </a>
                    <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" style={styles.link}>
                        <LinkedInIcon />
                        LinkedIn
                    </a>
                    <a href={resumeData.contact.github} target="_blank" rel="noreferrer" style={styles.link}>
                        <GitHubIcon />
                        GitHub
                    </a>
                </div>
                <p style={styles.copyright}>© {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
