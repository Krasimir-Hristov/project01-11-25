import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import header_Image from './header_Image.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import cv_file from './CV_EN.png';
import chatbot from './chatbot.png';
import ai_avatar from './aiavatar.png';
import github from './github.png';
import copilot from './copilot.png';
import prettier from './prettier.png';
import reactnext from './react-next.png';
import shadcn from './shadcn.png';
import motion from './motion.png';
import tailwind from './tailwindcss.png';
import typescript from './typescript.png';
import javascript from './javascript.png';
import html from './html.png';
import css from './css.png';
import nodeexp from './nodeexp.png';
import aboutme from './aboutme.png';
import meetmeup from './meetmeup.png';
import nikepage from './nikepage.png';
import { StaticImageData } from 'next/image';

export const assets = {
  html,
  css,
  nodeexp,
  typescript,
  javascript,
  tailwind,
  motion,
  shadcn,
  reactnext,
  prettier,
  copilot,
  github,
  chatbot,
  ai_avatar,
  aboutme,
  cv_file,
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  header_Image,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

//Navbar Links
export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Me' },
  { href: '#tech', label: 'Tech-Stack' },
  { href: '#projects', label: 'My Projects' },
  { href: '#contact', label: 'Contacts' },
];

// Define the TechStack interface
export interface TechItem {
  icon: StaticImageData;
  title: string;
  description: string;
}

// Tech stack data
export const techStackData: TechItem[] = [
  {
    icon: assets.html,
    title: 'HTML',
    description:
      'Crafting semantic and accessible web structures following modern HTML5 standards and best practices.',
  },
  {
    icon: assets.css,
    title: 'CSS',
    description:
      'Styling web applications with modern CSS features, including Flexbox, Grid, and CSS animations for responsive designs.',
  },
  {
    icon: assets.javascript,
    title: 'JavaScript',
    description:
      'Mastering the core language that powers modern web development with ES6+ features.',
  },
  {
    icon: assets.typescript,
    title: 'TypeScript',
    description:
      'Writing type-safe code to ensure robust and maintainable applications with enhanced developer experience.',
  },
  {
    icon: assets.reactnext,
    title: 'React & Next.js',
    description:
      'Building modern, server-side rendered applications with the power of React and Next.js for optimal performance and SEO.',
  },
  {
    icon: assets.tailwind,
    title: 'Tailwind CSS',
    description:
      'Creating beautiful, responsive designs with utility-first CSS framework for rapid UI development.',
  },
  {
    icon: assets.shadcn,
    title: 'shadcn/ui',
    description:
      'Implementing accessible and customizable UI components for creating beautiful user interfaces.',
  },
  {
    icon: assets.motion,
    title: 'Motion',
    description:
      'Adding smooth animations and transitions to create engaging user experiences.',
  },
  {
    icon: assets.nodeexp,
    title: 'Node.js & Express',
    description:
      'Building scalable server-side applications and APIs using Node.js with Express.js framework for efficient backend development.',
  },
];

export interface FooterLink {
  href: string;
  label: string;
}

export const footerLinks: FooterLink[] = [
  { href: 'https://www.google.com/', label: 'GitHub' },
  { href: 'https://www.google.com/', label: 'LinkedIn' },
];

//Work Data
export interface WorkItem {
  title: string;
  description: string;
  bgImage: string;
}

export const workData: WorkItem[] = [
  {
    title: 'Frontend project',
    description: 'Web Design',
    bgImage: '/work-1.png',
  },
  {
    title: 'Geo based app',
    description: 'Mobile App',
    bgImage: '/work-2.png',
  },
  {
    title: 'Photography site',
    description: 'Web Design',
    bgImage: '/work-3.png',
  },
  {
    title: 'UI/UX designing',
    description: 'UI/UX Design',
    bgImage: '/work-4.png',
  },
];

export interface InfoItem {
  icon: StaticImageData;
  iconDark: StaticImageData;
  title: string;
  description: string;
}

export const infoList: InfoItem[] = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Languages',
    description: 'HTML, CSS, JavaScript React Js, Next Js',
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Education',
    description: 'Software University, Sofia, Bulgaria',
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Projects',
    description: 'Built my own projects',
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.github,
  assets.git,
  assets.copilot,
  assets.prettier,
];
