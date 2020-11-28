import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { toClipboard } from '#utils';

import Button from '../Button';
import {
  SWrapper, SHeader, SContent, SLink, SCopyIcon, SFooter,
} from './styled';

const copiedMessageTimeout = 2000;

// state -> i18n text key
const copySteps = Object.freeze({
  none      : 'copy',
  copied    : 'copied',
  copyError : 'copyError',
});

const BoardCreatedWelcome = ({ boardId, onCancel }) => {
  const { t } = useTranslation('board');
  const timeoutRef = useRef();
  const [copyStep, setCopyStep] = useState(copySteps.none);

  const copyAction = useCallback(
    () => toClipboard(boardId) // @todo full url
      .then(() => setCopyStep(copySteps.copied))
      .catch(() => setCopyStep(copySteps.copyError))
      .finally(() => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(
          () => setCopyStep(copySteps.none),
          copiedMessageTimeout,
        );
      }),
    [boardId],
  );

  // Clear timeout if it was still active
  useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    },
    [timeoutRef],
  );

  return (
    <SWrapper>
      <SHeader>
        {t('welcome.created.title', { boardId })}
      </SHeader>
      <SContent>
        <div>
          {t('welcome.created.about')}
        </div>
        <SLink id="link">
          {/* @todo full url */}
          http://www.fastboard.io/board/123456
        </SLink>
        <Button type="secondary" fullWidth onClick={copyAction}>
          <SCopyIcon />
          {t(`welcome.created.${copyStep}`)}
        </Button>
      </SContent>
      <SFooter>
        <Button type="secondary" onClick={onCancel}>
          {t('welcome.created.accept')}
        </Button>
      </SFooter>
    </SWrapper>
  );
};

BoardCreatedWelcome.propTypes = {
  boardId  : PropTypes.string.isRequired,
  onCancel : PropTypes.func.isRequired,
};

export default BoardCreatedWelcome;
