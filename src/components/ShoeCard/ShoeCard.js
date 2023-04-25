import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, isNewShoe, pluralize } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
          {variant !== 'default' && <ImageLabel variant={variant}>{variant === 'new-release' ? 'Just Released!' : 'Sale'}</ImageLabel>}
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price className={variant}>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          {salePrice ? <SalePrice>{formatPrice(salePrice)}</SalePrice> : ""}
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article`
`;

const ImageWrapper = styled.div`
  max-height: 312px;
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--gray-100);
  border-radius: 16px 16px 4px 4px;
  `;

const Image = styled.img`
  height: auto;
  width: 100%;
  `;

const ImageLabel = styled.span`
  position: absolute;
  top: 12px;
  right: -4px;
  border-radius: 2px;
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  color: var(--white);
  padding: 8px 10px;
  background: ${props => props.variant === 'new-release' ? 'var(--secondary)' : 'var(--primary)'};
  content: ${props => props.variant === 'new-release' ? 'Just Released!' : 'Sale'};
`

const Row = styled.div`
  display: flex;
  &:first-child {
    margin-right: auto;
  }
  font-size: 1rem;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
  margin-left: auto;

  &.on-sale {
    text-decoration: line-through;
    color: var(--gray-700);
  }
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  margin-left: auto;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;
