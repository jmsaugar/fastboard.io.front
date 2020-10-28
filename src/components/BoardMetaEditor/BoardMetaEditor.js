import React from 'react';

import Button from '../Button';
import Input from '../Input';
import {
  SWrapper, SHeader, SContent, SFooter,
} from './styled';

const BoardMetaEditor = () => {
  const userName = 'jms';
  const boardName = 'My board';

  return (
    <SWrapper>
      <SHeader>
        Edit settings
      </SHeader>
      <SContent>
        <Input
          name={userName}
          placeholder="Your user name"
        />
        <Input
          name={boardName}
          placeholder="Board name"
        />
      </SContent>
      <SFooter>
        <Button type="secondary">
          Cancel
        </Button>
        <Button type="primary">
          Save
        </Button>
      </SFooter>
    </SWrapper>
  );
};

export default BoardMetaEditor;
