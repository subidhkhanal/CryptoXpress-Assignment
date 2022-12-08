import Image from 'next/image'
import {Card} from 'antd'

const BookCard = ({ book }) => {
  const { id, title,content,image,slug } = book;
  return (
    <div id={slug}>
      <h1>{title}</h1>
      <Card>
        {content}
        </Card>
      <Image src={image} width={749}/>
    </div>
  );
};

export default BookCard;
