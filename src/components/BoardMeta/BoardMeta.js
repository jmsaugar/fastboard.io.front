import React, { useCallback, useState } from 'react';

import { escapeKeyCode, mainLayoutId } from '../../constants';
import { useKey } from '../../hooks';
import BoardMetaEditor from '../BoardMetaEditor';
import Modal from '../Modal';

import SWrapper from './styled';

const BoardMeta = () => {
  const [showEditor, setShowEditor] = useState(false);

  const hide = useCallback(
    () => setShowEditor(false),
    [setShowEditor],
  );

  useKey(escapeKeyCode, hide);

  return (
    <>
      <SWrapper onClick={() => setShowEditor(!showEditor)}>
        jms@Board 345678 (3 users)
      </SWrapper>
      <Modal target={mainLayoutId} show={showEditor}>
        <BoardMetaEditor />
      </Modal>
    </>
  );
};

export default BoardMeta;
