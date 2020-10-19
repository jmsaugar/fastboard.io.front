import React from 'react';

import Button from '../Button';
import { SWrapper, SHeader } from './styled';

const BoardMetaEditor = () => {
  return (
    <SWrapper>
      <SHeader>Edit settings</SHeader>
      <Button>
        Cancel
      </Button>
      <Button primary>
        Save
      </Button>
    </SWrapper>
  );
};

export default BoardMetaEditor;
