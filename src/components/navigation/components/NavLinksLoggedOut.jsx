import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LoginModal from "../../auth/LoginModal";
import RegisterModal from "../../auth/RegisterModal";

const NavLinksLoggedOut = () => {
  const animtateFrom = { opacity: 0, y: -40 };
  const animtateTo = { opacity: 1, y: 0 };

  return (
    <ul>
      <motion.li
        initial={animtateFrom}
        animate={animtateTo}
        transition={{ delay: 0.05 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/">home</a>
      </motion.li>

      <motion.li
        initial={animtateFrom}
        animate={animtateTo}
        transition={{ delay: 0.1 }}
      >
        <LoginModal />
      </motion.li>

      <motion.li
        initial={animtateFrom}
        animate={animtateTo}
        transition={{ delay: 0.15 }}
      >
        <RegisterModal />
      </motion.li>
    </ul>
  );
};

export default NavLinksLoggedOut;