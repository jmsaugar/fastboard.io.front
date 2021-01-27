import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { SWrapper, SItem } from './styled';

// @todo icons for the menu items?
const ItemMenu = ({
  show, top, left, onItem2Front, onItem2Back, onItemRemove,
}) => {
  const { t } = useTranslation('board');

  return (
    <SWrapper show={show} top={top} left={left}>
      <SItem onClick={onItem2Front}>
        {t('itemMenu.bringForward')}
      </SItem>
      <SItem onClick={onItem2Back}>
        {t('itemMenu.sendBackward')}
      </SItem>
      <SItem onClick={onItemRemove}>
        {t('itemMenu.remove')}
      </SItem>
    </SWrapper>
  );
};

ItemMenu.defaultProps = {
  top  : 0,
  left : 0,
};

ItemMenu.propTypes = {
  show         : PropTypes.bool.isRequired,
  top          : PropTypes.number,
  left         : PropTypes.number,
  onItem2Front : PropTypes.func.isRequired,
  onItem2Back  : PropTypes.func.isRequired,
  onItemRemove : PropTypes.func.isRequired,
};

export default ItemMenu;
