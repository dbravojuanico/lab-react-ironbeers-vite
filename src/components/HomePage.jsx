import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="App">
      <div>
        <img src="../src/assets/beers.png" alt="beers" />
        <h2>
          <Link to="/beers">All beers</Link>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa
          nisl, placerat quis aliquam sed, condimentum sed metus. Fusce
          ullamcorper efficitur accumsan. Suspendisse sed rutrum tellus, vitae
          ornare ipsum. Vestibulum et velit convallis, pulvinar purus sed,
          sodales dolor. Suspendisse efficitur odio quis felis gravida, et
          pellentesque nunc cursus. Praesent mollis, arcu ornare molestie
          pharetra, mi ante faucibus ante, vitae blandit orci ligula in tortor.
        </p>
      </div>
      <div>
        <img src="../src/assets/random-beer.png" alt="random beer" />
        <h2>
          <Link>Random beer</Link>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa
          nisl, placerat quis aliquam sed, condimentum sed metus. Fusce
          ullamcorper efficitur accumsan. Suspendisse sed rutrum tellus, vitae
          ornare ipsum. Vestibulum et velit convallis, pulvinar purus sed,
          sodales dolor. Suspendisse efficitur odio quis felis gravida, et
          pellentesque nunc cursus. Praesent mollis, arcu ornare molestie
          pharetra, mi ante faucibus ante, vitae blandit orci ligula in tortor.
        </p>
      </div>
      <div>
        <img src="../src/assets/new-beer.png" alt="new beer" />
        <h2>
          <Link>New beer</Link>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa
          nisl, placerat quis aliquam sed, condimentum sed metus. Fusce
          ullamcorper efficitur accumsan. Suspendisse sed rutrum tellus, vitae
          ornare ipsum. Vestibulum et velit convallis, pulvinar purus sed,
          sodales dolor. Suspendisse efficitur odio quis felis gravida, et
          pellentesque nunc cursus. Praesent mollis, arcu ornare molestie
          pharetra, mi ante faucibus ante, vitae blandit orci ligula in tortor.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
