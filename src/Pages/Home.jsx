import Navibar from "../Component/Navibar";
import "./Home.css";
import Footer from "./../Component/Footer";

function Home() {
  return (
    <div>
      <Navibar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="landing">
              <h1>YourBook.com</h1>
              <h2>Your favorite website to sell books</h2>
              <br />
              <h3 className="">
                "The man who does not read good books is no better than the man
                who can't"
              </h3>
              <br />
              <h1>More than 10,000+ books in stock</h1>
              <br />
              <h3>Sign in to add your books</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
