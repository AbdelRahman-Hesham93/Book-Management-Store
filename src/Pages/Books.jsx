import { Card, ListGroup, Button } from "react-bootstrap";
import Navibar from "../Component/Navibar";
import { useEffect, useState } from "react";
import { instance, deleteBooks } from "../Component/Api";
import AddBooks from "../Component/AddBooks";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../Component/GlobalStore";
import { useNavigate } from "react-router-dom";
import Footer from "./../Component/Footer";

function Books() {
  const [books, setBooks] = useState([]);
  const { isLogged } = useAuth();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data: response } = await instance.get("/books");
        setBooks(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    // Refresh books list when coming back from edit

    fetchBooks();
  }, [location.state]);

  const deleteBook = async (bookid) => {
    try {
      await deleteBooks(bookid);
      setBooks((prev) => prev.filter((book) => book._id !== bookid));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navibar />
      <div className="container" style={{ paddingTop: "110px" }}>
        <div className="row g-2">
          <div
            className="col"
            style={{
              justifyContent: "center",
              textAlign: "center",
              color: "white",
            }}
          >
            <AddBooks />
            {isLogged ? <h1> Welcome Back</h1> : null}
            <h2> You can view & add books here</h2>
            <BookCard
              books={books}
              setBooks={setBooks}
              deleteBook={deleteBook}
              isLogged={isLogged}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
function BookCard({ books, deleteBook, isLogged }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row g-2">
        {books.map((book) => (
          <div className="col" style={{ display: "flex" }} key={book._id}>
            <Card
              style={{
                width: "12rem",
                padding: "auto",
                margin: "auto",
              }}
            >
              <Card.Body>
                <Card.Title>{book.Book}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Author: {book.Author}</ListGroup.Item>
                <ListGroup.Item>Price: {book.Price}$</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                {isLogged ? (
                  <div className="d-flex gap-4">
                    <Button
                      onClick={() => deleteBook(book._id)}
                      style={{ backgroundColor: "red" }}
                    >
                      Delete
                    </Button>
                    <Button
                      onClick={() => {
                        localStorage.setItem(
                          "editBookData",
                          JSON.stringify(book)
                        );
                        navigate("/editbook", { state: { bookData: book } });
                      }}
                      style={{ backgroundColor: "Orange" }}
                    >
                      Edit
                    </Button>
                  </div>
                ) : null}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
