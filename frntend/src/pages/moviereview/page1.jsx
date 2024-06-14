import { Homebg } from "../../components/movier/frstpage.jsx";
import { useNavigate } from "react-router-dom";

import {motion } from "framer-motion";

export function Page1() {
  const navigate = useNavigate();
  
  return (
    <motion.div
      onClick={() => navigate('/moviepg2')}>
      {/* <Headerm /> */}
      <Homebg />
    </motion.div>
  );
}
