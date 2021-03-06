import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ItemPreview from '../../../Images/ItemPreview';

import { maxProfilePreviewItems } from '../../../../helpers/constants';
import getRows from '../../../../helpers/getRows';
import bp from '../../../../helpers/breakpoints';


// ========== Styled Components ==========
const Wrapper = styled.div`
  width: 60%;
  height: inherit;
  background-color: #ffffff;

  @media (max-width: ${bp.breakEight}) {
    width: 100%;
    height: 350px;
  }
`

const StyledLink = styled(Link) `
  display: flex;
  flex-wrap: wrap;
  height: inherit;
  
  &:hover {
    opacity: 0.5;
  }
`

const ImageWrapper = styled.div`
  overflow: hidden;
  width: 33.333%;
  height: ${({ itemsLength }) => `calc(100%/${getRows(itemsLength)})`};
`


// ============== Component ==============
export default ({ userId, collection }) => {
  const { items } = collection;

  return (
    <Wrapper>
      <StyledLink to={`/users/${userId}/collections/${collection._id}`}>
        {
          items.map((item, index) => !(index < maxProfilePreviewItems) ? null : (
            <ImageWrapper key={item._id} itemsLength={items.length}>
              <ItemPreview {...item} />
            </ImageWrapper>
          ))
        }
      </StyledLink>
    </Wrapper>
  )
};
