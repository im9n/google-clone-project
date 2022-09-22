import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import Option from "../components/Option";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term)

  console.log(data);

  return (
    <div className="searchpage">
      <div className="searchpage__header">
        <Link to="/">
          <img
            className="searchpage__logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
            alt=""
          />
        </Link>
        <div className="searchpage__header--body">
          <Search hideButtons />
          <div className="searchpage__options">
            <div className="searchpage__options--left">
              <Option icon={<SearchIcon />} text="All" />
              <Option icon={<DescriptionIcon />} text="News" />
              <Option icon={<ImageIcon />} text="Images" />
              <Option icon={<LocalOfferIcon />} text="Shopping" />
              <Option icon={<RoomIcon />} text="Maps" />
              <Option icon={<MoreVertIcon />} text="More" />
            </div>
            <div className="searchpage__options--right">
              <Option icon={null} text="Settings" />
              <Option icon={null} text="Tools" />
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchpage__results">
          <p className="searchpage__results--counter">
            About {data?.searchInformation.formattedTotalResults} results in{" "}
            {data?.searchInformation.formattedSearchTime} seconds for "{term}"
          </p>
          {data?.items.map((item) =>  
            <div className="searchpage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                  <img src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt="" className="searchpage__result--image" />
                )}
                {item.displayLink}
              </a>
              <a href={item.link} className="searchpage__result--title">
                <h2>{item.title}</h2>
              </a>
              <p className="searchpage__result--snippet">{item.snippet}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
