import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function ListWeight() {
  const [weights, setWeights] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3; // 👈 Show 3 items per page

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("weights")) || [];
    setWeights(data);
  }, []);

  const deleteWeight = (id) => {
    const updated = weights.filter((w) => w.id !== id);
    setWeights(updated);
    localStorage.setItem("weights", JSON.stringify(updated));
  };

  const startEdit = (item) => {
    setEditId(item.id);
    setEditValue(item.weight);
  };

  const saveEdit = (id) => {
    const updated = weights.map((w) =>
      w.id === id ? { ...w, weight: parseFloat(editValue) } : w
    );
    setWeights(updated);
    localStorage.setItem("weights", JSON.stringify(updated));
    setEditId(null);
  };

  // Pagination logic
  const totalPages = Math.ceil(weights.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = weights.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>Weight List</h2>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Weight</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>
                  {editId === item.id ? (
                    <input
                      type="number"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                    />
                  ) : (
                    item.weight
                  )}
                </td>
                <td>
                  {editId === item.id ? (
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => saveEdit(item.id)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => startEdit(item)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteWeight(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {weights.length === 0 && <p>No data found</p>}

        {/* Pagination controls */}
        {weights.length > 0 && (
          <div className="d-flex justify-content-center mt-3">
            <nav>
              <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  >
                    Previous
                  </button>
                </li>

                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i + 1}
                    className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                  >
                    <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                      {i + 1}
                    </button>
                  </li>
                ))}

                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}

export default ListWeight;

