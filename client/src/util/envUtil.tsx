import * as React from 'react';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import { SvgIconProps } from '@mui/material';

export function getURLforDT(): string {
  return window.env.REACT_APP_URL_DT;
}

export function getURLforLIB(): string {
  return window.env.REACT_APP_URL_LIB;
}

export function getButtonsforWorkbench(): {
  name: string;
  link: string;
  icon: React.ReactElement<SvgIconProps>;
}[] {
  const str = window.env.REACT_APP_URL_WORKBENCH.endsWith('/')
    ? window.env.REACT_APP_URL_WORKBENCH.slice(0, -1)
    : window.env.REACT_APP_URL_WORKBENCH;
  return [
    {
      name: 'Terminal',
      link: `${str}/`,
      icon: <TerminalOutlinedIcon />,
    },
    {
      name: 'Desktop',
      link: `${str}/`,
      icon: <DesktopWindowsOutlinedIcon />,
    },
    {
      name: 'VSCode',
      link: `${str}/`,
      icon: <CodeOutlinedIcon />,
    },
    {
      name: 'JupyterLab',
      link: `${str}/`,
      icon: <ScienceOutlinedIcon />,
    },
    {
      name: 'Jupyter Notebook',
      link: `${str}/`,
      icon: <NoteAltOutlinedIcon />,
    },
    // Add more buttons as needed
  ];
}
