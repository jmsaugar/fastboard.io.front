import React from 'react';

import Button from '../Button';
import {
  SWrapper, SHeader, SContent, SFooter,
} from './styled';

const BoardMetaEditor = () => {
  return (
    <SWrapper>
      <SHeader>
        Edit settings
      </SHeader>
      <SContent>
        # content #
      </SContent>
      <SFooter>
        <Button>
          Cancel
        </Button>
        <Button primary>
          Save
        </Button>
      </SFooter>
    </SWrapper>
  );
};

export default BoardMetaEditor;
