import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGenreStore from "../stores/genres";
const Genres = () => {
  const getAllGenres = useGenreStore((state) => state.getAll);
  const deleteGenre = useGenreStore((state) => state.deleteGenre);
  const genres = useGenreStore((state) => state.genres);
  useEffect(() => {
    getAllGenres();
  }, []);

  return (
    <div className="row">
      <div className="col-1 m-4">
        <Link className="btn btn-primary btn-sm" to="/genreform">
          Add Genre
        </Link>
      </div>
      <div className="col m-4">
        {genres.length == 0 ? (
          <p>No genres found.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {genres.map((g) => (
                <tr key={g._id}>
                  <td>
                    <Link to={`/genreform/${g._id}`}>{g.name}</Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteGenre(g._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Genres;
