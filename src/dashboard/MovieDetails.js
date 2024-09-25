import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function MovieDetails() {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const getData = async () => {
        try {
            const response = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=0010364e3ce6d7a1d9099771b61cba0d");
            setData(response.data.results);
            console.log(response.data.results);
        } catch (error) {
            console.log(error);
            alert("something went wrong");
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const movieData = data.find((movie) => movie.id == id);

    console.log(movieData);

    const goToHome = () => {
        navigate("/home/moviedata");
    }

    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                        {movieData ? (
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{movieData.original_title}</h5>
                                            <p className="card-text">{movieData.release_date}</p>
                                            <p className="card-text"><small className="text-body-secondary">{movieData.overview}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}

                        <button className='btn btn-warning mb-5' onClick={goToHome}>GO TO HOME</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MovieDetails