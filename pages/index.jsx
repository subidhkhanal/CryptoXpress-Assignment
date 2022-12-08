import { books } from "../utils";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner"
import Footer from '../components/Footer'
import MainContent from "../components/content/MainContent";
import Whychooseus from "../components/Extra/Whychooseus";

const IndexPage = () => {
  return (
    <div>
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
          books
        }
      }
    }
  };
};

export default IndexPage;
