
import './App.css'
function App() {
  const data = [{
    name : "Leo",
    img:"https://www.pinkvilla.com/pics/480x480/990020216_thalapathy-vijay-leo-first-single-naa-ready-poster_202306.jpg",
    rating : 90,
  },

  {
    name : "Vikram",
    img:"https://cdnb.artstation.com/p/assets/images/images/044/051/953/large/balaji-vb-vikram-poster-balaji-vb.jpg?1638967549",
    rating : 95,
  },

 {
    name : "Kaithi",
    img : "https://moviegalleri.net/wp-content/gallery/kaithi-movie-release-posters/karthi-kaithi-movie-release-posters-048674e.jpg",
    rating : 92,
  }
]

  return (
    <div className='app'> 
      {
        data.map((movie, idx)=>(
          <MovieCard key={idx}
          img={movie.img}
          name={movie.name}
          rating={movie.rating}
          />
        ))
      }

    </div>
  )
}
//props
export default App

//prop
//const prop= {}
// prop.name = "leo"
// prop= {
//   name : "leo"
// }
// const {name} = prop

// eslint-disable-next-line react/prop-types
function MovieCard({img, name, rating}){
  return (
    <div className='movie-card'>
      <div className='img-sec'>
        <img src={img}/>
      </div>
      <div className='mvname-sec'>
        <h3>{name}</h3>
      </div>
      <div className='mvdetail-sec'>
        <button>Watch now</button>
        <p>Ratings : {rating}%</p>
      </div>
    </div>
  )
}
