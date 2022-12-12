import Image from 'next/image'
import {Card} from 'antd'
import styles from '../styles/BookCard.module.css'

const BookCard = ({ book }) => {
  const { id, title,content,image,slug } = book;
  return (
    <div id={slug}>
      <h1>{title}</h1>
      <Card>
        {content}
        </Card>
        <div>
          <Image src={image} className={styles.image}/>
        </div>
    </div>
  );
};

export default BookCard;
