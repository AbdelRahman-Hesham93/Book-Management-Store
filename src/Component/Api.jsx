import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3300/api",
  timeout: 1000,
});

export const deleteBooks = async (id) => {
  try {
    const response = await instance.delete(`/books/${id}`);
    // Add validation
    if (response.status !== 200) {
      throw new Error("Failed to delete book");
    }
    return response.data;
  } catch (error) {
    console.error("API Delete Error:", error);
    throw error; // Propagate the error up
  }
};

export const handleSub = async (reg) => {
  try {
    const response = await instance.post("/users/register", {
      FirstName: reg.FirstName,
      LastName: reg.LastName,
      Email: reg.Email,
      Password: reg.Password,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const handleLogin = async (user) => {
  try {
    const response = await instance.post("/users/login", {
      Email: user.Email,
      Password: user.Password,
    });
    return response.data; // Ensure backend returns { success: true, ... }
  } catch (err) {
    // Properly throw error details
    throw {
      response: err.response?.data || { message: "Network Error" },
      status: err.response?.status || 500,
    };
  }
};

export const updateBook = async (id, updatedBook) => {
  try {
    const response = await instance.put(`/books/${id}`, updatedBook);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Update failed");
  }
};

export const addBook = async (add) => {
  try {
    const response = await instance.post("books", {
      Book: add.Book,
      Author: add.Author,
      Price: add.Price,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
