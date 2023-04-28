import React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import styled from '@emotion/styled';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { IWorkbenchLink } from 'util/envUtil';

const IconLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
`;

type LinkIconsType = {
  [key: string]: { icon: React.ReactElement; name: string };
};

const LinkIcons: LinkIconsType = {
  TERMINAL: {
    icon: <TerminalOutlinedIcon />,
    name: 'Terminal',
  },
  VNCDESKTOP: {
    icon: <DesktopWindowsOutlinedIcon />,
    name: 'Desktop',
  },
  VSCODE: {
    icon: <CodeOutlinedIcon />,
    name: 'VSCode',
  },
  JUPYTERLAB: {
    icon: <ScienceOutlinedIcon />,
    name: 'JupyterLab',
  },
  JUPYTERNOTEBOOK: {
    icon: <NoteAltOutlinedIcon />,
    name: 'Jupyter Notebook',
  },
  NO_ICON: {
    icon: <OpenInNewIcon />,
    name: '',
  },
};

interface IconButton {
  link: string;
  icon: React.ReactElement;
  name: string;
}

const getIconButtons = (buttons: IWorkbenchLink[]): IconButton[] =>
  buttons.map((button) => {
    const iconData = LinkIcons[button.key.toUpperCase()] || LinkIcons.NO_ICON;
    return {
      link: button.link,
      icon: iconData.icon,
      name: iconData.name || button.key,
    };
  });

const LinkButtons = ({
  buttons,
  size,
}: {
  buttons: IWorkbenchLink[];
  size?: number;
}) => {
  const openLink = (url: string) => {
    window.open(url, '_blank');
  };
  const iconButtons = getIconButtons(buttons);

  return (
    <ButtonRow>
      {iconButtons.map((button, index) => (
        <Tooltip key={index} title={button.link}>
          <IconLabel>
            <IconButton onClick={() => openLink(button.link)}>
              {React.cloneElement(button.icon, {
                style: { fontSize: `${size?.toString()}rem` },
              })}
            </IconButton>
            {button.name}
          </IconLabel>
        </Tooltip>
      ))}
    </ButtonRow>
  );
};

export default LinkButtons;
