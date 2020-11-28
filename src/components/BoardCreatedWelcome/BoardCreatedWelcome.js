import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { escapeKeyCode } from '#constants';
import { toClipboard } from '#utils';
import { useKey } from '#hooks';
import routes from '#routes';

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

const BoardCreatedWelcome = ({ boardId, onClose }) => {
  const { t } = useTranslation('board');
  const timeoutRef = useRef();
  const [copyStep, setCopyStep] = useState(copySteps.none);

  useKey(escapeKeyCode, onClose);

  const boardUrl = useMemo(
    () => `${process.env.REACT_APP_BASE_URL}${routes.board.replace(':id', boardId)}`,
    [boardId],
  );

  const copyAction = useCallback(
    () => toClipboard(boardUrl)
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
    [boardUrl],
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
          {boardUrl}
        </SLink>
        <Button type="secondary" fullWidth onClick={copyAction}>
          <SCopyIcon />
          {t(`welcome.created.${copyStep}`)}
        </Button>
      </SContent>
      <SFooter>
        <Button type="secondary" onClick={onClose}>
          {t('welcome.created.accept')}
        </Button>
      </SFooter>
    </SWrapper>
  );
};

BoardCreatedWelcome.propTypes = {
  boardId : PropTypes.string.isRequired,
  onClose : PropTypes.func.isRequired,
};

export default BoardCreatedWelcome;
