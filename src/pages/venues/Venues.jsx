import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VenueCard from "./components/VenueCard";
import { All_Venues_Url } from "../../components/auth/constants/Url";
import { useEffect, useState } from "react";

const Venues = () => {
  const AllVenuesUrl = All_Venues_Url;
  const [venues, setVenues] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch(AllVenuesUrl).then((res) =>
      res.json().then((json) => {
        setVenues(json);
        //console.log("setVenues:", json);
      })
    );
  }, []);

  //console.log("Venues Set:", venues);

  return (
    <main className="main_venues">
      <h1 className="search_venues_title">search venues</h1>
      <div className="search_input_group">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="venue_search_icon"
        />
        <input
          name="venues_list_searchInput"
          className="search_venue_input"
          id="venues_list_searchInput"
          type="text"
          placeholder="Search for venues..."
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
      </div>
      <ul className="search_results">
        {venues
          .filter((item) => {
            return searchText.toLowerCase() === ""
              ? item
              : item.title.toLowerCase();
          })
          .map((item) => (
            <VenueCard key={item.id} item={item} />
          ))}
      </ul>
    </main>
  );
};

export default Venues;