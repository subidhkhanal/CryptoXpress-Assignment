import { observer } from "mobx-react-lite"
import { MobxContext } from "../../pages/_app";
import { useContext } from "react";
import BookCard from "../BookCard";

const Content = () =>{
    const { filteredBooks} = useContext(MobxContext);
    return(
        <div>
              {filteredBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
        </div>
    )
}
export default observer(Content)