import React from 'react';
import {
  FaBehance,
  FaLinkedin,
  FaTwitter,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms
} from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'accueil',
    icon: <FaHome />
  },
  {
    id: 2,
    url: '/team',
    text: 'équipe',
    icon: <FaUserFriends />
  },
  {
    id: 3,
    url: '/projects',
    text: 'projets',
    icon: <FaFolderOpen />
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendrier',
    icon: <FaCalendarAlt />
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />
  }
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaBehance />
  }
];
