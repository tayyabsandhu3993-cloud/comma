"use client";
import { motion } from "framer-motion";
export default function Reveal({children, className=""}:{children:React.ReactNode,className?:string}){
 return <motion.div className={className} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.8,ease:[.16,1,.3,1]}}>{children}</motion.div>
}
