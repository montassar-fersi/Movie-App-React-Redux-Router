import {
    ADD_MOVIE,
    DELETE_MOVIE,
    EDIT_MOVIE,
    SEARCH_MOVIE_NAME,
    SEARCH_MOVIE_RATE
  } from "../Const/actionTypes";
 
  const initState = {
    movies:[{id: Math.random(),
      image:
        "https://upload.wikimedia.org/wikipedia/pt/5/58/Charlie%27s_Angels_%282019%29.png",
      name: "CHARLIE ANGELS",
      an: "2010",
      rate: 1
    },
    {id: Math.random(),
      image:
        "https://upload.wikimedia.org/wikipedia/en/5/56/Barcelona-poster-310x410.jpg",
      name: "Barcelona",
      an: "2012",
      rate: 2
    },
    {id: Math.random(),
      image:
        "https://upload.wikimedia.org/wikipedia/en/8/82/Istanbul_poster.jpg",
      name: "Istanbul",
      an: "2000",
      rate: 3
    },
    {id: Math.random(),
      image:
        "https://i.pinimg.com/236x/98/c4/a0/98c4a0a894e96494188da0f17bf98cbf--serial-tv-rome.jpg",
      name: "Rome",
      an: "2001",
      rate: 4
    },
    {id: Math.random(),
      image:
        "https://m.media-amazon.com/images/M/MV5BMTU5MDg5OTcwOV5BMl5BanBnXkFtZTcwMjI1MTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      name: "Mexico",
      an: "1999",
      rate: 5
    }
  ] ,
  ratetosearch:0,
  nametosearch:""
};
  const movieappReduce = (state = initState, action) => {
    const { payload, id } = action;
    switch (action.type) {
      case ADD_MOVIE:
        return { ...state, movies: [...state.movies, action.payload] };
      case EDIT_MOVIE:
        return {
          ...state,
          movies: state.movies.map(el =>
            el.id === id ? { ...el,...payload } : el
          )
        };
      case DELETE_MOVIE:
        return { ...state, movies: state.movies.filter(el => el.id !== payload) }
       ;
       case SEARCH_MOVIE_NAME:
         return { ...state, nametosearch: payload};
      case SEARCH_MOVIE_RATE:
            return { ...state, ratetosearch: payload };
      default:
        return state;
    }
  };
  export default movieappReduce;