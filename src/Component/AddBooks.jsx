import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../Component/GlobalStore";
import { useState } from "react";
import { addBook } from "./Api";
import { useNavigate } from "react-router-dom";
function AddBooks() {
  const { isLogged } = useAuth();
  const [add, setAdd] = useState({ Book: "", Author: "", Price: "" });
  const navigate = useNavigate();

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const addBoo = { Book: add.Book, Author: add.Author, Price: add.Price };
      await addBook(addBoo);
      setAdd({ Book: "", Author: "", Price: "" });
      alert("Book has been added successfully");
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {isLogged ? (
        <div>
          <h3>Add new books</h3>
          <AddForm AddBook={add} setAddBook={setAdd} handleAdd={handleAdd} />
        </div>
      ) : (
        <h1 style={{ color: "Yellow" }}>Login to add or modify books</h1>
      )}
    </div>
  );
}

function AddForm({ AddBook, setAddBook, handleAdd }) {
  return (
    <div style={{ width: "100%" }}>
      <Form
        onSubmit={handleAdd}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Book name</Form.Label>
          <Form.Control
            placeholder="Add book name"
            value={AddBook.Book}
            onChange={(e) => setAddBook({ ...AddBook, Book: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Book price $</Form.Label>
          <Form.Control
            placeholder="Add book price $"
            value={AddBook.Price}
            onChange={(e) => setAddBook({ ...AddBook, Price: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            placeholder="Add book Author"
            value={AddBook.Author}
            onChange={(e) => setAddBook({ ...AddBook, Author: e.target.value })}
            required
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ height: "3rem", marginTop: "0.9rem " }}
        >
          Add
        </Button>
      </Form>
    </div>
  );
}

export default AddBooks;
