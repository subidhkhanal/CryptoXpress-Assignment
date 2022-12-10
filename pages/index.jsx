import { books,clientBooks } from "../utils";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner"
import Footer from '../components/Footer'
import MainContent from "../components/content/MainContent";
import Whychooseus from "../components/Extra/Whychooseus";

const IndexPage = () => {
  return (
    <div style={{height:"100vh"}}>
      <Navbar />
      <Banner />
      <MainContent />
      <Whychooseus/>
      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {
      initialState: {
        booksStore: {
          books,
          clientBooks
        }
      }
    }
  };
};

export default IndexPage;
