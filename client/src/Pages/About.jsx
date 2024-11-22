import React from "react";
import defaultImage from "../assets/default-pfp.png";
import defaultImageWoman from "../assets/default-pfp-woman.png";

function About() {
  return (
    <section className="container-fluid text-black pb-5">
      <div className="container d-flex flex-column gap-3 pt-4">
        <h2 className="display-4 font-weight-bold">PokéVerse</h2>
        <p className="lead">
          <strong>PokéVerse</strong> is your go-to Pokémon companion, designed
          to provide all the information you need about your favorite Pokémon in
          a sleek, user-friendly interface. Developed by the talented team of
          Fauzan, Rachma, and Kivlan, PokéVerse brings you the most detailed and
          up-to-date Pokédex on the market. Whether you're a beginner or a
          seasoned Pokémon Trainer, PokéVerse is here to make your Pokémon
          journey easier and more enjoyable.
        </p>
        <h3>Key Features & Advantages of PokéVerse</h3>
        <ul className="key-features">
          <li>Complete and Up-to-Date Pokédex</li>
          <li>
            PokéVerse offers an extensive Pokédex with detailed profiles of
            every Pokémon, from the original 151 to the latest additions. You'll
            find information on Pokémon types, stats, abilities, evolutions,
            moves, and more. Whether you're researching a specific Pokémon or
            just exploring, you'll have everything you need in one place.
          </li>
        </ul>
        <ul className="key-features">
          <li>Easy-to-Navigate Interface</li>
          <li>
            The app is designed with a clean, intuitive interface that makes it
            easy to search and explore Pokémon. Whether you're a first-time user
            or a pro, PokéVerse offers a seamless experience. With simple
            navigation and fast loading times, you'll spend less time looking
            for information and more time enjoying your Pokémon adventure.
          </li>
        </ul>
        <ul className="key-features">
          <li>Advanced Search & Filter Options</li>
          <li>
            Finding the perfect Pokémon has never been easier. PokéVerse
            provides powerful search and filter options that allow you to sort
            Pokémon by type, region, stats, evolutions, and more. No matter what
            you're looking for, you can quickly find exactly what you need.
          </li>
        </ul>
        <ul className="key-features">
          <li>Offline Accessibility</li>
          <li>
            Don't let your internet connection slow you down. PokéVerse allows
            you to access the Pokédex offline, making it a great companion even
            when you're on the go or in areas with limited connectivity. Your
            Pokédex is always with you, no matter where you are.
          </li>
        </ul>
        <ul className="key-features">
          <li>Detailed Evolution and Move Information</li>
          <li>
            Every Pokémon's evolutionary line is clearly displayed, so you can
            see how each Pokémon evolves and under what conditions. You'll also
            get detailed move information, including power, type, and
            effectiveness. This feature is perfect for planning your Pokémon
            battles and completing your collection.
          </li>
        </ul>
        <ul className="key-features">
          <li>Regular Updates</li>
          <li>
            The Pokémon universe is always expanding, and so is PokéVerse. The
            app is regularly updated to include new Pokémon, moves, and
            features, keeping you up-to-date with the latest content from the
            Pokémon world. Whether it's a new game release or an update to
            existing Pokémon, PokéVerse stays current.
          </li>
        </ul>
        <h3>Meet the Developers</h3>
        <div className="row row-cols-3">
          <div className="col">
            <div class="card rounded-5">
              <img
                src={defaultImage}
                class="card-img-top w-50 mx-auto d-flex"
                alt="Photo person"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Fauzan</h5>
                <p class="card-text">
                  With a passion for design and user experience, Fauzan ensures
                  that PokéVerse is visually appealing and intuitive to use. His
                  commitment to creating a smooth, easy-to-navigate interface
                  makes the app enjoyable for both new users and seasoned
                  Pokémon Trainers.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card rounded-5">
              <img
                src={defaultImageWoman}
                class="card-img-top w-50 mx-auto d-flex"
                alt="Photo person"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Rachma</h5>
                <p class="card-text">
                  A true Pokémon fan, Rachma handles the app's content, ensuring
                  that all Pokémon details are accurate and up-to-date. Her deep
                  knowledge of the Pokémon world ensures that PokéVerse remains
                  a trusted and reliable resource for all your Pokémon needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card rounded-5">
              <img
                src={defaultImage}
                class="card-img-top w-50 mx-auto d-flex"
                alt="Photo person"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Kivlan</h5>
                <p class="card-text">
                  As the technical lead, Kivlan is responsible for making sure
                  that PokéVerse runs smoothly on all devices. With his
                  expertise in app development, he ensures fast performance,
                  bug-free experience, and regular updates that enhance the
                  app's functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h3>PokéVerse is more than just a Pokédex</h3>
        <p>
          it's your ultimate Pokémon guide. With its comprehensive database,
          user-friendly design, and constant updates, PokéVerse is the perfect
          tool for any Pokémon Trainer. Whether you're aiming to complete your
          Pokédex or learn more about your favorite Pokémon, PokéVerse is here
          to help.
        </p>
        <p className="lead">
          your Ultimate Guide to The World of Pokémons - Explore Every Region,
          Discover Every Species, Catch Them All on Your Journey to Become a
          True Trainer.
        </p>
      </div>
    </section>
  );
}

export default About;
