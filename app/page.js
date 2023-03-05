import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "./page.module.css";
import Partners from "@/components/Partners";
import Activities from "@/components/Activities";
import HomeView from "@/components/HomeView";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Partners />
      <HomeView />
      <Activities />
    </div>
  );
}
