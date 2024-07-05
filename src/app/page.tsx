import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/common/components/header/Header";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  return <main>{!isMobile && <Header />}</main>;
}
