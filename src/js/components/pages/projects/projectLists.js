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

// import no_image from '../../../../images/no_image.png';

const projectLists = [
  {
    thumbnail: 'no_image',
    title: 'Project 1',
    subtitle: 'Project 1',
    platform: [],
    technology: [],
    responsibility: {
      tasks: [],
      desc: '',
    },
    images: [
      'no_image',
    ]
  },
  {
    thumbnail: 'no_image',
    title: 'Project 2',
    subtitle: 'Project 2',
    platform: [],
    technology: [],
    responsibility: {
      tasks: [],
      desc: '',
    },
    images: [
      'no_image',
    ]
  },
  {
    thumbnail: 'no_image',
    title: 'LOOP Moderation Bridge',
    subtitle: 'LOOP Moderation Bridge',
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
    subtitle: 'Content Moderation',
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
    subtitle: 'Interconnected Applications and Services',
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
    subtitle: 'Instant Messaging',
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
    subtitle: 'OJT System',
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
    subtitle: 'Thesis System',
    platform: ['Web', 'Desktop'],
    technology: ['PHP', 'JavaScript', 'jQuery', 'Bootstrap', 'SQL', 'C#'],
    responsibility: {
      tasks: ['Web App Development Lead', 'Backend Development', 'Frontend Development'],
      desc: '',
    },
    images: [
      ocrms_01,
    ]
  },
];

export default projectLists;