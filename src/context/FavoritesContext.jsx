import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favoriteClubs, setFavoriteClubs] = useState([]);
  const [favoriteEvents, setFavoriteEvents] = useState([]);

  const toggleFavoriteClub = (clubId) => {
    setFavoriteClubs((prev) =>
      prev.includes(clubId)
        ? prev.filter((id) => id !== clubId)
        : [...prev, clubId],
    );
  };

  const toggleFavoriteEvent = (eventId) => {
    setFavoriteEvents((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId],
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteClubs,
        favoriteEvents,
        toggleFavoriteClub,
        toggleFavoriteEvent,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
