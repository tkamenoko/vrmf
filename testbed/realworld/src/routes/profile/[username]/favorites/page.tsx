import type { Page } from "vrmf";
import { FavoriteArticles } from "./_favoriteArticles";

const Favorites: Page = () => {
  return (
    <div className="row">
      <div className="col-xs-12 col-md-10 offset-md-1">
        <div className="articles-toggle">
          <ul className="nav nav-pills outline-active">
            <li className="nav-item">
              <a className="nav-link active" href="/?">
                My Articles
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/?">
                Favorite Articles
              </a>
            </li>
          </ul>
        </div>
        <FavoriteArticles />
      </div>
    </div>
  );
};

export default Favorites;
