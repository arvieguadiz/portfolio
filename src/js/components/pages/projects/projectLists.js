import todo_thumbnail from '../../../../images/todo/todo_thumbnail.png';
import todo_01 from '../../../../images/todo/todo_01.png';
import todo_02 from '../../../../images/todo/todo_02.png';
import todo_03 from '../../../../images/todo/todo_03.jpg';
import todo_04 from '../../../../images/todo/todo_04.png';

import loopmod_thumbnail from '../../../../images/loopmod_thumbnail.png';
import loopmod_01 from '../../../../images/loopmod_01.png';
import loopmod_02 from '../../../../images/loopmod_02.png';
import loopmod_03 from '../../../../images/loopmod_03.png';
import loopmod_04 from '../../../../images/loopmod_04.png';
import loopmod_05 from '../../../../images/loopmod_05.png';
import loopmod_06 from '../../../../images/loopmod_06.png';
import loopmod_07 from '../../../../images/loopmod_07.png';

import nmsapps_thumbnail from '../../../../images/nmsapps_thumbnail.png';
import nmsapps_01 from '../../../../images/nmsapps_01.png';
import nmsapps_02 from '../../../../images/nmsapps_02.png';
import nmsapps_03 from '../../../../images/nmsapps_03.png';

import loopim_thumbnail from '../../../../images/loopim_thumbnail.png';
import loopim_01 from '../../../../images/loopim_01.png';
import loopim_02 from '../../../../images/loopim_02.png';
import loopim_03 from '../../../../images/loopim_03.png';

import msb_thumbnail from '../../../../images/msb_thumbnail.png';
import msb_01 from '../../../../images/msb_01.png';
import msb_02 from '../../../../images/msb_02.png';
import msb_03 from '../../../../images/msb_03.png';
import msb_04 from '../../../../images/msb_04.png';

import ocrms_thumbnail from '../../../../images/ocrms_thumbnail.png';
import ocrms_01 from '../../../../images/ocrms_01.png';

const projectLists = [
  {
    thumbnail: todo_thumbnail,
    title: 'To Do App',
    subtitle: 'A simple To Do App but packs with all the features you need to get things done.',
    platform: ['Web'],
    technology: ['Node.js', 'React', 'NeDB', 'Material UI v5'],
    responsibility: {
      tasks: ['Backend Development', 'Frontend Development'],
      desc: '',
    },
    images: [
      todo_01, todo_02, todo_03, todo_04,
    ]
  },
  {
    thumbnail: 'no_image',
    title: 'LOOP Moderation Bridge',
    subtitle: 'LOOP Moderation Bridge is a back-end application that connects or acts as bridge between the LOOP Moderation and the client\'s application through APIs.',
    platform: ['Server'],
    technology: ['PHP'],
    responsibility: {
      tasks: ['Backend Development', 'API Implementation'],
      desc: '',
    },
    images: [
      'no_image',
    ]
  },
  {
    thumbnail: loopmod_thumbnail,
    title: 'LOOP Moderation',
    subtitle: 'A web application that accepts and is responsible for text, image and video moderation from different clients with the use of API.',
    platform: ['Web'],
    technology: ['Laravel', 'Node.js', 'React', 'Redis', 'SQL', 'NeDB', 'Socket.io', 'Docker'],
    responsibility: {
      tasks: ['Project Lead', 'Backend Development', 'Frontend Development'],
      desc: '',
    },
    images: [
      loopmod_01, loopmod_02, loopmod_03, loopmod_04, loopmod_05, loopmod_06, loopmod_07,
    ]
  },
  {
    thumbnail: nmsapps_thumbnail,
    title: 'NMS Apps',
    subtitle: 'Lists of Interconnected Applications and Services such as Platform Authentication, User Management, Human Resources, Attendance Tracking and Financial Tools.',
    platform: ['Web'],
    technology: ['Laravel', 'Node.js', 'React', 'Redis', 'SQL', 'NeDB', 'Socket.io'],
    responsibility: {
      tasks: ['Backend Development', 'Frontend Development', 'API Implementation'],
      desc: '',
    },
    images: [
      nmsapps_01, nmsapps_02, nmsapps_03,
    ]
  },
  {
    thumbnail: loopim_thumbnail,
    title: 'LOOP IM',
    subtitle: 'An Instant Messaging Platform that handles large traffic data from different clients with the use of API.',
    platform: ['Web'],
    technology: ['Laravel', 'Node.js', 'AngularJS', 'Redis', 'SQL', 'NeDB', 'Socket.io'],
    responsibility: {
      tasks: ['Database Maintenance', 'Production Support', 'Backend Development', 'Frontend Development'],
      desc: '',
    },
    images: [
      loopim_01, loopim_02, loopim_03,
    ]
  },
  {
    thumbnail: msb_thumbnail,
    title: 'MSB Image Review',
    subtitle: 'OJT System: A training platform for new applicants that is responsible for plate number image review for their training, a platform similar to that used in production.',
    platform: ['Web', 'Desktop'],
    technology: ['C#', 'ASP.NET', 'JavaScript', 'Bootstrap', 'jQuery', 'SQL'],
    responsibility: {
      tasks: ['Backend Development', 'Frontend Development'],
      desc: '',
    },
    images: [
      msb_01, msb_02, msb_03, msb_04,
    ]
  },
  {
    thumbnail: ocrms_thumbnail,
    title: 'E-Police OCRMS',
    subtitle: 'Thesis System: E-Police OCRMS or E-Police Online Crime Record Management System for the PNP of the province of Pangasinan.',
    platform: ['Web', 'Desktop'],
    technology: ['PHP', 'JavaScript', 'jQuery', 'Bootstrap', 'SQL', 'C#'],
    responsibility: {
      tasks: ['Web App Development Lead', 'Web App Design', 'Backend Development', 'Frontend Development'],
      desc: '',
    },
    images: [
      ocrms_01,
    ]
  },
];

export default projectLists;