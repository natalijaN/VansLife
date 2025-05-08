export const Home = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="px-80 text-white flex flex-col items-center justify-center gap-20">
        <h3 className="text-5xl font-bold  p-8 rounded">
          You got the travel plans, we got the travel vans.
        </h3>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button className="w-full bg-orange-500 text-white font-bold rounded-md py-6">
          Find you van
        </button>
      </div>
    </section>
  );
};
