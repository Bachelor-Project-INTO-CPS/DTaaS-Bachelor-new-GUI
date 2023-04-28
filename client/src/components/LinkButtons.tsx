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
import { KeyLinkPair, getURLforWorkbench } from 'util/envUtil';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

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

const constructLink = (endpoint: string): string => {
  const userState = useSelector((state:RootState) => state.auth)
  const url = getURLforWorkbench().trim();
  const baseURL = url.endsWith('/') ? url : `${url}/`;
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `${endpoint}/`;
  return `${baseURL}${userState.user}${cleanEndpoint}`;
};

const getIconButtons = (buttons: KeyLinkPair[]): IconButton[] =>
  buttons.map((button) => {
    const iconData = LinkIcons[button.key.toUpperCase()] || LinkIcons.NO_ICON;
    return {
      link: constructLink(button.link),
      icon: iconData.icon,
      name: iconData.name || button.link,
    };
  });

const LinkButtons = ({
  buttons,
  size,
}: {
  buttons: KeyLinkPair[];
  size?: number;
}) => {
  const iconButtons = getIconButtons(buttons);

  return (
    <ButtonRow>
      {iconButtons.map((button, index) => (
        <Tooltip key={index} title={button.link}>
          <IconLabel>
            <IconButton
              onClick={() => {
                window.open(button.link, '_blank');
              }}
            >
              {React.cloneElement(button.icon, {
                style: { fontSize: `${size?.toString()}rem` },
              })}
            </IconButton>
            <Typography variant="h6">{button.name}</Typography>
          </IconLabel>
        </Tooltip>
      ))}
    </ButtonRow>
  );
};

export default LinkButtons;
