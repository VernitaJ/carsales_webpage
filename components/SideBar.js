import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerOverlay,
  DrawerHeader,
} from "@chakra-ui/react";
import style from '../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
      <div className={style.container}>
          <div className={style.header}>Logo</div>
          <div className={style.content}>
              <p>
                  Filter
              </p>
          </div>
      </div>
    // <Drawer placement="left" isOpen={true}>
    //   <DrawerOverlay className={style.container}/>
    //   <DrawerContent>
    //     <DrawerHeader  className={style.header} borderBottomWidth="1px">Basic Drawer</DrawerHeader>
    //     <DrawerBody className={style.content}>
    //       <p>Some contents...</p>
    //       <p>Some contents...</p>
    //       <p>Some contents...</p>
    //     </DrawerBody>
    //   </DrawerContent>
    // </Drawer>
  );
};

export default Sidebar;