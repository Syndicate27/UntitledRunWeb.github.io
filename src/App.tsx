import React from 'react';
import { Gamepad2, Users, Palette, Building2, ChevronDown, Github, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-violet-900 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070"
            alt="Game Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-8 h-8" />
            <span className="text-xl font-bold">Untitled Run</span>
          </div>
          <div className="flex gap-8">
            <a href="#about" className="hover:text-purple-300 transition-colors">About</a>
            <a href="#studio" className="hover:text-purple-300 transition-colors">Studio</a>
            <a href="#characters" className="hover:text-purple-300 transition-colors">Runners</a>
            <a href="#crews" className="hover:text-purple-200 transition-colors">Crews</a>
            <a href="#worlds" className="hover:text-purple-300 transition-colors">Worlds</a>
          </div>
        </nav>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Untitled Run: Legendary Parkour
          </h1>
          <br></br>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Embark on an extraordinary journey through mystical realms in this groundbreaking mobile RPG
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Download Now
          </button>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About the Game</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="src/playstore-icon.png"
                alt="Gameplay Screenshot"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-6">
              Untitled Run is more than a game — it's an electrifying live-service experience that brings the thrill 
              of parkour racing to the palms of your hands. Designed for both players and spectators, it combines high-octane 
              competition with seamless accessibility on mobile devices. With its intuitive controls and innovative mechanics, 
              Untitled Run is easy to pick up but endlessly rewarding to master. Level up both in and out of the game, and become 
              part of a growing community where every race is a chance to shine. Challenge friends and rivals in adrenaline-pumping 
              showdowns and prove you have what it takes to be the ultimate champion! This isn’t just a game—it’s your stage. Are 
              you ready to own it?
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-purple-500 p-2 rounded-full">
                    <Gamepad2 className="w-5 h-5" />
                  </div>
                  <span>Innovative Parkour System</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-purple-500 p-2 rounded-full">
                    <Users className="w-5 h-5" />
                  </div>
                  <span>Multiplayer Parkour Ranked and Casual Matches</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-purple-500 p-2 rounded-full">
                    <Palette className="w-5 h-5" />
                  </div>
                  <span>Stunning 3D Visual Effects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section id="studio" className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Studio</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Untitled Run Games Studio</h3>
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2022, Untitled Games Studio has quickly established itself as an leading innovator in mobile gaming. Our team of passionate developers, artists, and storytellers work tirelessly to create immersive experiences that push the boundaries of mobile gaming.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070"
                alt="Studio Office"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Runners</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jungle Gorilla",
                role: "The Grumpy Gorilla",
                image: "/src/angry-gorilla.png"
              },
              {
                name: "Serious Serg",
                role: " The Business Bull",
                image: "/src/serging-bull.png"
              },
              {
                name: "Jimmeny Cricket",
                role: "The Ignominious Insect",
                image: "/src/jimmney-cricket.png"
              },
              {
                name: "Quick Quin",
                role: "The Quantum Quacker",
                image: "/src/quin-duck.png"
              }
            ].map((character) => (
              <div key={character.name} className="group relative overflow-hidden rounded-lg">
                <img 
                  src={character.image}
                  alt={character.name}
                  className="w-full h-96 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold">{character.name}</h3>
                  <p className="text-purple-300">{character.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="crews" className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Crews</h2>
           {[
            {
              name: "Crew Interface",
              image: "/src/crew-gui.png",
              description: "Graphial user-interface for players that are a part of a crew."
            }
           ].map((crew) => (
            <div key={crew.name} className="relative rounded-lg overflow-hidden group">
            <img 
              src={crew.image}
              alt={crew.name}
              className="w-full h-90 object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold mb-2">{crew.name}</h3>
              <p className="text-gray-300">{crew.description}</p>
            </div>
          </div>
           )
           )} 
        </div>

      </section>

      {/* Worlds Section */}
      <section id="worlds" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Parkour Worlds</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Crystal Valley",
                description: "A mystical realm where ancient crystals power advanced technology",
                image: "src/crystal-valley.png"
              },
              {
                name: "Neon City",
                description: "A cyberpunk metropolis where magic meets machinery",
                image: "src/neon-city.png"
              },
              {
                name: "Cyber Ruins",
                description: "The ruins of a once thriving cyber kingdom",
                image: "src/cyber-ruins.png"
              },
              {
                name: "Aquatic Tanker",
                description: "How long can you hold your breathe to search for treasure!",
                image: "src/aquatic-tanker.png"
              }
            ].map((world) => (
              <div key={world.name} className="relative rounded-lg overflow-hidden group">
                <img 
                  src={world.image}
                  alt={world.name}
                  className="w-full h-80 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2">{world.name}</h3>
                  <p className="text-gray-300">{world.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Gamepad2 className="w-6 h-6" />
            <span className="text-lg font-bold">Untitled Run</span>
          </div>
          <p className="text-gray-400">© 2024 Untitled Run Games Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;