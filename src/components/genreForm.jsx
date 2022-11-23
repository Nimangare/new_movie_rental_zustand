import React, { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
import useGenreStore from "../stores/genres";
import { useNavigate } from "react-router-dom";
const GenreForm = () => {
  const params = useParams();
  const genres = useGenreStore((state) => state.genres);
  const addGenre = useGenreStore((state) => state.addGenre);
  const updateGenre = useGenreStore((state) => state.updateGenre);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().min(3).max(10).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmitHandler = (data) => {
    if (!data._id) {
      addGenre(data);
    } else {
      updateGenre(data);
    }
    navigate("/genres");
  };
  useEffect(() => {
    const genreId = params.genreId;
    if (!genreId) return;
    const genre = genres.find((g) => g._id === params.genreId);
    if (!genre) return;
    setValue("name", genre.name);
    setValue("_id", genre._id);
  }, []);
  return (
    <div>
      <h1>Manage Genres</h1>
      <form
        style={{ margin: "0 auto", width: "800px" }}
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="form-control"
          ></input>
          <p>{errors.name?.message}</p>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default GenreForm;
