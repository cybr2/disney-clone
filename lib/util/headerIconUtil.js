import  {  HomeIcon, SearchIcon, WatchListIcon, OriginalIcon, MovieIcon, SeriesIcon } from '../../src/assets/images'

// this util help the header component to map the icons for navItem
export const  imgValue = (value) => {
    const iconMap ={
        'home' : HomeIcon,
        'search' : SearchIcon,
        'watchlist' : WatchListIcon,
        'originals' : OriginalIcon,
        'movies' : MovieIcon,
        'series' : SeriesIcon
    }
   return iconMap[value]
}
