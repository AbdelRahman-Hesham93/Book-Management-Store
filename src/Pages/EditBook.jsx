import { useNavigate, useLocation } from "react-router-dom";
import { instance } from "../Component/Api";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

function EditBookPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [bookData, setBookData] = useState(null);

  // Get book data from navigation state or localStorage
  useEffect(() => {
    const data =
      location.state?.bookData ||
      JSON.parse(localStorage.getItem("editBookData"));
    if (data) {
      setBookData(data);
      localStorage.setItem("editBookData", JSON.stringify(data));
    } else {
      navigate("/books");
    }

    return () => localStorage.removeItem("editBookData");
  }, [location, navigate]);

  const handleSubmit = async (updatedBook) => {
    try {
      await instance.put(`/books/${bookData._id}`, updatedBook);
      navigate("/books", { state: { refresh: true } });
    } catch (err) {
      console.error("Update failed:", err);
      alert("Error updating book. Please try again.");
    }
  };

  if (!bookData) return <div>Loading book data...</div>;

  return (
    <div className="container mt-4">
      <h2>Edit Book</h2>
      <EditForm initialData={bookData} onSubmit={handleSubmit} />
    </div>
  );
}

function EditForm({ initialData, onSubmit }) {
  const [book, setBook] = useState(initialData);

  useEffect(() => {
    setBook(initialData);
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book);
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <Form.Group className="mb-3">
        <Form.Label>Book name</Form.Label>
        <Form.Control
          required
          value={book.Book}
          onChange={(e) => setBook({ ...book, Book: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Book price $</Form.Label>
        <Form.Control
          type="number"
          required
          value={book.Price}
          onChange={(e) => setBook({ ...book, Price: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Book Author</Form.Label>
        <Form.Control
          required
          value={book.Author}
          onChange={(e) => setBook({ ...book, Author: e.target.value })}
        />
      </Form.Group>

      <div className="d-flex gap-3">
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
        <Button variant="secondary" onClick={() => window.history.back()}>
          Cancel
        </Button>
      </div>
    </Form>
  );
}

export default EditBookPage;
