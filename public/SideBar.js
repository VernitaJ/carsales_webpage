import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerOverlay,
  DrawerHeader,
} from "@chakra-ui/react";
import style from '../styles/Sidebar.module.css';
import Filters from './Filters'
const Sidebar = (props) => {
  return (
      // <div className={style.container}>
      //     <div className={style.header}>Logo</div>
      //     <div className={style.content}>
      //         <p>
      //             Filter
      //         </p>
      //     </div>
      // </div>
    <div class="md:flex flex-col md:flex-row md:min-h-screen w-full bg-white">
    <div onClick="open = false" class="flex flex-col w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0" x-data="{ open: false }">
      <div class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
        <a href="#" class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Flowtrail UI</a>
        <button class="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick="open = !open">
        </button>
        <Filters cars={props.cars} updateFilter={props.updateFilter}/>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;