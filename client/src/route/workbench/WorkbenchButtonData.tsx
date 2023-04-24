import * as React from 'react';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';

const buttons = [
  {
    name: 'Terminal',
    link: '',
    icon: <TerminalOutlinedIcon />,
  },
  {
    name: 'Desktop',
    link: '',
    icon: <DesktopWindowsOutlinedIcon />,
  },
  {
    name: 'VSCode',
    link: '',
    icon: <CodeOutlinedIcon />,
  },
  {
    name: 'JupyterLab',
    link: '',
    icon: <ScienceOutlinedIcon />,
  },
  // Add more buttons as needed
];

export default buttons;
