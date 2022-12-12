import Link from 'next/link'

const BookCard = ({ book }) => {
    const { id, title,slug } = book;
    return (
      <div>
        <ul>
        <Link href={`#${slug}`}>
        <li>{title}</li>
        </Link>
        </ul>
      </div>
    );
  };
export default BookCard;
  