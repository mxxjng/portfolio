import { motion } from "framer-motion";

import MotionDiv from "../MotionDiv/MotionDiv";
import LogoIconMobile from "../Icons/LogoIconMobile";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const variantsItem = {
    open: {
        translateY: 0,
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        translateY: 50,
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

type SideBarProps = {
    isOpen: boolean;
    navList: {
        id: number;
        title: string;
        link: string;
    }[];
    closeSideBar: () => void;
};

const SideBar: React.FC<SideBarProps> = ({ isOpen, navList, closeSideBar }) => {
    const list = navList.map((item) => {
        return (
            <motion.li key={item.id} variants={variantsItem} className="my-4">
                <span className="text-headline font-headline text-3xl">
                    {item.title}
                </span>
            </motion.li>
        );
    });
    return (
        <div>
            <MotionDiv
                isOpen={isOpen}
                className="fixed top-0 left-0 h-full w-full bg-bg p-4 z-highest"
                initial={{ translateX: "-100%" }}
                animate={{ translateX: "0%" }}
                exit={{ translateX: "-100%" }}
                transition={{ duration: 0.4 }}
            >
                <div>
                    <p className="py-2 text-right" onClick={closeSideBar}>
                        close
                    </p>
                    <div className="p-8">
                        <div className="mb-4">
                            <LogoIconMobile />
                        </div>
                        <motion.ul
                            variants={variants}
                            initial="closed"
                            animate="open"
                            className="py-6"
                        >
                            {list}
                        </motion.ul>
                    </div>
                </div>
            </MotionDiv>
        </div>
    );
};
export default SideBar;
