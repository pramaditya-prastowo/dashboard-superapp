import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Index = dynamic(() => import("./auth/auth"), {
  ssr: false,
});

export default Index;
