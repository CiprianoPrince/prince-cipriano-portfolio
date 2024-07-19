'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView('About');

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            {/* <p className="mb-3">
                After graduating with a degree in <span className="font-medium">Accounting</span>, I
                decided to pursue my passion for programming. I enrolled in a coding bootcamp and
                learned <span className="font-medium">full-stack web development</span>.{' '}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the feeling of
                finally figuring out a solution to a problem. My core stack is{' '}
                <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. I am also
                familiar with TypeScript and Prisma. I am always looking to learn new technologies.
                I am currently looking for a <span className="font-medium">full-time position</span>{' '}
                as a software developer.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy playing video games,
                watching movies, and playing with my dog. I also enjoy{' '}
                <span className="font-medium">learning new things</span>. I am currently learning
                about <span className="font-medium">history and philosophy</span>. I'm also learning
                how to play the guitar.
            </p> */}

            <p className="mb-3">
                After graduating with a degree in{' '}
                <span className="font-medium">Information Technology</span>, I decided to further my
                programming skills by enrolling in a{' '}
                <span className="font-medium">3-month full-stack web development bootcamp</span>,
                where I graduated as the <span className="font-medium">top student</span>. My core
                stack includes{' '}
                <span className="font-medium">React, Express, Angular, and Nest</span>.{' '}
                <span className="italic">I am passionate about programming</span>, especially the
                problem-solving aspect, and I <span className="underline">enjoy</span> the
                satisfaction of finding solutions to challenging problems.
            </p>

            <p>
                <span className="italic">In my free time</span>, I love binge-watching{' '}
                <span className="font-medium">cybersecurity or networking content</span> and reading
                books about programming, such as <span className="font-medium">"Clean Code"</span>{' '}
                and various JavaScript topics. I am always eager to learn new technologies and
                expand my knowledge. Currently, I am seeking a{' '}
                <span className="font-medium">full-time position</span> as a software developer.
            </p>

            <p>
                <span className="italic">Outside of coding</span>
                watching movies and animes, reading manga. I also have a keen interest in{' '}
                <span className="font-medium">learning new things</span>, such as history and I'm
                currently teaching myself how to play the guitar.
            </p>
        </motion.section>
    );
}
