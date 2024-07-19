import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
    {
        name: 'Home',
        hash: '#home',
    },
    {
        name: 'About',
        hash: '#about',
    },
    {
        name: 'Projects',
        hash: '#projects',
    },
    {
        name: 'Skills',
        hash: '#skills',
    },
    {
        name: 'Experience',
        hash: '#experience',
    },
    {
        name: 'Contact',
        hash: '#contact',
    },
] as const;

export const experiencesData = [
    {
        title: 'System Developer',
        location: 'Sta Mesa Manila',
        description:
            'I worked as a System Developer for 1 years. I also upskilled to the full stack.',
        icon: React.createElement(CgWorkAlt),
        date: '2023 - 2024',
    },
    {
        title: 'Graduated KodeGo Bootcamp',
        location: 'Philippines',
        description: 'I graduated after 3 months of studying full-stack web development',
        icon: React.createElement(LuGraduationCap),
        date: '2023',
    },
    {
        title: 'Graduated Bachelors Degree',
        location: 'Ama Computer College',
        description: 'I graduated after 4 years of studying..',
        icon: React.createElement(LuGraduationCap),
        date: '2020 - 2022',
    },
] as const;

export const projectsData = [
    {
        title: 'CorpComment',
        description:
            'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
        tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
        imageUrl: corpcommentImg,
    },
    {
        title: 'rmtDev',
        description:
            'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
        tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
        imageUrl: rmtdevImg,
    },
    {
        title: 'Word Analytics',
        description:
            'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
        tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Bootstrap',
    'MaterialUI',
    'Tailwind',
    'React',
    'Node',
    'Express',
    'Angular',
    'NestJs',
    'Redux',
    'Jasmine',
    'Karma',
    'Jest',
    'PHP',
    'Laravel',
    'Prisma',
    'Sequelize',
    'TypeORM',
    'MongoDB',
    'PostgreSQL',
    'MySql',
    'Linux',
    'Docker',
    'Networking',
    'Git',
] as const;
