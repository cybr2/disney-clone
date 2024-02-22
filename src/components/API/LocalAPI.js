import { ViewerOne, ViewerTwo, ViewerThree, ViewerFour, ViewerFive } from '../../assets/images';
import { disneyVid, marvelVid, nationalVid, pixarVid, starWarsVid } from '../../assets/videos';
import { SliderOne, SliderTwo, SliderThree, SliderFour } from '../../assets/images';

export const BrandAPI = [
    { imgSrc: ViewerOne, videoSrc: disneyVid },
    { imgSrc: ViewerTwo, videoSrc: pixarVid },
    { imgSrc: ViewerThree, videoSrc: marvelVid },
    { imgSrc: ViewerFour, videoSrc: starWarsVid },
    { imgSrc: ViewerFive, videoSrc: nationalVid }
]

export const BannerAPI = [
    { bannerImg : SliderOne },
    { bannerImg : SliderTwo },
    { bannerImg : SliderThree },
    { bannerImg : SliderFour },

]