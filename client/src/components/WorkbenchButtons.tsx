import React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import styled from '@emotion/styled';
import { SvgIconProps } from '@mui/material';
import { getURLforWorkbench } from 'util/envUtil';

const linkURL = getURLforWorkbench();

interface Button {
  name: string;
  link: string;
  icon: React.ReactElement<SvgIconProps>;
}

interface WorkbenchButtonsProps {
  buttons: Button[];
}

const StyledIconButton = styled(IconButton)`
  margin: 8px;
`;

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

const customIconSize = 100;

const WorkbenchButtons: React.FC<WorkbenchButtonsProps> = ({ buttons }) => {
  const openLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <ButtonRow>
      {buttons.map((button, index) => (
        <Tooltip key={index} title={linkURL + button.link}>
          <IconLabel>
            <StyledIconButton onClick={() => openLink(linkURL + button.link)}>
              {React.cloneElement(button.icon, {
                style: { fontSize: customIconSize },
              })}
            </StyledIconButton>
            {button.name}
          </IconLabel>
        </Tooltip>
      ))}
    </ButtonRow>
  );
};

export default WorkbenchButtons;
