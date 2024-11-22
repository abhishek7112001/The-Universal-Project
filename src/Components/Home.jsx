import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Background Image */}
      <div
        className="min-h-screen flex flex-col bg-cover bg-center text-white "
        style={{
          backgroundImage: "url('./bg2.jpg')",
          
        }}
      >
        {/* Title */}
        <div className="flex items-center justify-center h-32">
          <h1 className="text-4xl font-bold shadow-lg bg-blue-500/20 px-4 py-2 rounded-md">
            THE UNIVERSAL PROJECT
          </h1>
        </div>

        {/* Project Cards */}
        <div className="flex flex-wrap justify-center gap-8 mt-10 mb-10">


          {/* Stopwatch */}
          <div className="bg-white text-black w-64 p-20 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url("./stopwatch.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            
            <Link
              to="/stopwatch"
              className="block mt-4 text-center bg-black/60 text-white py-1 rounded hover:bg-gray-800"
            >
              Stopwatch App
            </Link>
          </div>

          
         
        </div>
        
      </div>
      
      <div className="text-white bg-black p-4 text-center ">
          <p>&copy; 2024 Made with Love ❤️</p>
      </div>
    </>
  );
};

export default Home;
