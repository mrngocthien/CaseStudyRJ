import icons from "./icons";

const { MdOutlineLibraryMusic, BiDisc, AiOutlineStar } = icons;
const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icons: <MdOutlineLibraryMusic size={'24px'}/>
    },
    {
        path: '',
        text: 'Khám phá',
        end: 'true',
        icons: <BiDisc size={'24px'}/>
    },
    {
        path: 'top100',
        text: 'Top 100',
        icons: <AiOutlineStar size={'24px'}/>
    }
]

export {sidebarMenu};