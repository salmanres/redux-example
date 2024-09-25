import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom';

function MovieData() {

    const [data, setData] = useState([]);

    const getData = async () => {

        const response = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=0010364e3ce6d7a1d9099771b61cba0d");
        console.log(response.data.results);
        setData(response.data.results);

    };
    useEffect(() => {
        getData();
    }, []);


    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12 col-12 mt-4 mb-2'>
                        {data.map((movies) => (
                            <div className="card moviecard" key={movies.id}>
                                <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{movies.original_title
                                    }</h5>
                                    <p className="card-text">{movies.release_date}</p>
                                    <Link to={`/home/moviedetails/${movies.id}`} className='btn btn-warning'>GET MOVIE DETAILS</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MovieData