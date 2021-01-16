import styled from 'styled-components';
import { IItem } from '../store/modules/search/search.types';
import { Markup } from 'interweave';

const Wrapper = styled.div`
  padding: 10px 0 10px 0;
  margin-top: 10px;
`;
const ThumbnailInside = styled.div`
  display: block;
  padding-left: 4px;
  padding-right: 4px;
`;
const Title = styled.div`
  font-size: 16px;
  color: #15c;
  height: auto;
  text-decoration: none;
`;
const TableResult = styled.div`
  padding-left: 4px;
  padding-right: 4px;
  width: auto;
`;
const TableCellImageWrapper = styled.div`
  float: left;
  padding: 2px 8px 2px 0;
  margin-right: 0;
  margin-left: 0;
  text-align: center;
  width: 62px;
`;
const ImageWrapper = styled.a`
  vertical-align: middle;
  border: 1px solid #e2e2e2;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
`;
const Image = styled.img`
  max-width: 60px;
  max-height: 120px;
  border: 1px solid #e2e2e2;
  vertical-align: middle;
`;
const Description = styled.div`
  color: #333;
  margin-top: 2px;
  text-align: left;
`;
interface Props {
  items: IItem[];
}

const List: any = ({ items }: Props) => {
  return items.map((item: IItem, index) => {
    // console.log('item', item.pagemap.cse_image[0].src);
    return (
      <Wrapper key={index}>
        <ThumbnailInside>
          <Title>
            <Title
              as='a'
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Markup content={item.htmlTitle} />
            </Title>
          </Title>
        </ThumbnailInside>
        <TableResult>
          <TableCellImageWrapper>
            <ImageWrapper
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {item.pagemap.cse_image[0].src ? (
                <Image src={item.pagemap.cse_image[0].src} />
              ) : (
                <p>notfound</p>
              )}
            </ImageWrapper>
          </TableCellImageWrapper>
          <Description>
            <Markup content={item.htmlSnippet} />
          </Description>
        </TableResult>
      </Wrapper>
    );
  });
};

export default List;
