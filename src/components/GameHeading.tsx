import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatforms from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: platforms } = usePlatforms();
  const { data: genres } = useGenres();

  const selectedPlatformName = platforms.results.find(
    (platform) => platform.id === gameQuery.platformId
  )?.name;
  const selectedGenreName = genres.results.find(
    (genre) => genre.id === gameQuery.genreId
  )?.name;
  const heading = `${selectedPlatformName || ""} ${
    selectedGenreName || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
