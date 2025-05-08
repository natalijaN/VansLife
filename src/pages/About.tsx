export const About = () => {
  return (
    <section className="mt-[96px] min-h-screen flex items-center justify-center bg-orange-50">
      <div className="text-black flex flex-col items-start justify-center gap-20">
        <img
          src="/aboutme.png"
          alt="about me image"
          className="w-full h-[70vh] object-cover"
        />
        <div className="px-80 text-black flex flex-col items-start justify-center gap-20">
          <h3 className="text-5xl font-bold rounded text-start">
            Don’t squeeze in a sedan when you could relax in a van.
          </h3>
          <p className="text-start">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>

          <p className="text-start">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className="bg-orange-300 text-black w-full py-16 flex flex-col items-start px-10 rounded-md mb-16">
            <h3 className="text-3xl font-bold mb-2">
              Your destination is waiting.
            </h3>
            <h3 className="text-3xl font-bold mb-10">Your van is ready.</h3>
            <button className="bg-black text-white px-4 rounded py-3 mt-6">
              Explore our vans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
