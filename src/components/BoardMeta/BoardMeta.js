import React, { useState } from 'react';

import { mainLayoutId } from '../../constants';
import BoardMetaEditor from '../BoardMetaEditor';
import Modal from '../Modal';

import SWrapper from './styled';

const BoardMeta = () => {
  const [showEditor, setShowEditor] = useState(false);

  return (
    <>
      <SWrapper onClick={() => setShowEditor(!showEditor)}>
        jms @ Board 345678
      </SWrapper>
      <Modal target={mainLayoutId} show={showEditor}>
        <BoardMetaEditor />
      </Modal>
    </>
  );
};

export default BoardMeta;
