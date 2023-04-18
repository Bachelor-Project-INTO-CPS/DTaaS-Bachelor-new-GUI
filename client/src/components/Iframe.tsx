import * as React from 'react';

interface IFrameProps {
  url: string;
  title: string;
}

function Iframe({ url, title }: IFrameProps) {
  // Be aware sandbox is not supported by current JupyterLight implementation.
  return (
    <iframe title={title} src={url} width="100%" style={{ flexGrow: '1' }} />
  );
}

export default Iframe;
