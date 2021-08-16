import { IEpisode } from "../store/episode";

export const convertEpisodeToMap = (data: IEpisode[]) => {
  return data.reduce((result: { [key: number]: IEpisode }, item) => {
    result[item.id] = item;
    return result;
  }, {});
};

export const groupedEpisodesBySeason = (episodes: { [key: number]: IEpisode }) => {
  return Object.keys(episodes).reduce((result: { [key: number]: IEpisode[] }, episodeId) => {
    const episode = episodes[parseInt(episodeId)];
    const { season } = episode;
    if (!result[season]) {
      result[season] = [episode];
    } else {
      result[season].push(episode);
    }
    return result;
  }, {});
};

export const viewportWidth = window.innerWidth || document.documentElement.clientWidth;