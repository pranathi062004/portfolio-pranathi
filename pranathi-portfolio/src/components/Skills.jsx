import React from 'react';
import PropTypes from 'prop-types';
import { resumeData } from '../data/resume';

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2.5rem',
        maxWidth: '1000px',
        margin: '0 auto',
    },
    categoryTitle: {
        fontSize: '1.4rem',
        marginBottom: '1.2rem',
        color: 'var(--text-main)',
        borderLeft: '4px solid var(--primary)',
        paddingLeft: '1rem',
    },
    skillList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.8rem',
    },
    skillTag: {
        padding: '0.4rem 1rem',
        backgroundColor: 'rgba(56, 189, 248, 0.1)', /* Sky Blue tint */
        color: 'var(--primary)',
        borderRadius: '50px',
        fontSize: '0.85rem',
        border: '1px solid rgba(56, 189, 248, 0.2)', /* Sky Blue tint */
        fontWeight: '500',
    }
};

const skillIcons = {
    "Python": "🐍",
    "React.js": "⚛️",
    "HTML/CSS": "🎨",
    "JavaScript": "🟨",
    "SQL": "🗄️",
    "C Programming": "💻",
    "Node.js": "🟢",
    "MongoDB": "🍃",
    "PHP": "🐘",
    "Deep Learning (YOLO/LSTM)": "🧠"
};

const SkillCategory = ({ title, skills }) => (
    <div className="card" style={{
        aspectRatio: '1 / 1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem'
    }}>
        <h3 style={{ ...styles.categoryTitle, borderLeft: 'none', paddingLeft: 0, marginBottom: '2rem' }}>{title}</h3>
        <div style={{ ...styles.skillList, justifyContent: 'center' }}>
            {skills.map((skill, index) => (
                <span key={index} className="tag skill-tag">
                    <span style={{ marginRight: '8px', fontSize: '1.4rem' }}>{skillIcons[skill] || '✨'}</span>
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

SkillCategory.propTypes = {
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Skills = () => {
    return (
        <section id="skills" className="section container reveal">
            <h2 className="section-title">Technical Skills</h2>
            <div style={styles.grid}>
                <div className="reveal active delay-100" style={{ display: 'flex', flexDirection: 'column' }}>
                    <SkillCategory title="Proficient" skills={resumeData.skills.proficient} />
                </div>
                <div className="reveal active delay-300" style={{ display: 'flex', flexDirection: 'column' }}>
                    <SkillCategory title="Familiar" skills={resumeData.skills.familiar} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
