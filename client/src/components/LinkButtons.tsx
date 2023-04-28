import React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import styled from '@emotion/styled';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
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
    name: 'name',
  },
  VSCODE: {
    icon: <CodeOutlinedIcon />,
    name: 'name',
  },
  JUPYTERLAB: {
    icon: <ScienceOutlinedIcon />,
    name: 'name',
  },
  JUPYTERNOTEBOOK: {
    icon: <NoteAltOutlinedIcon />,
    name: 'name',
  },
  UNDEFINED: {
    icon: <TerminalOutlinedIcon />,
    name: 'name',
  },
};

interface IconButton {
  link: string;
  icon: React.ReactElement;
  name: string;
}

const getIconButtons = (buttons: IWorkbenchLink[]): IconButton[] => {
  const iconButtons: IconButton[] = [];

  buttons.forEach((button) => {
    if (LinkIcons[button.key] !== undefined) {
      iconButtons.push({
        link: button.link,
        icon: LinkIcons[button.key].icon,
        name: LinkIcons[button.key].name,
      });
    } else {
      iconButtons.push({
        link: button.link,
        icon: LinkIcons.UNDEFINED.icon,
        name: button.key,
      });
    }
  });

  return iconButtons;
};

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
                fontSize: `${size?.toString()}rem`,
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
