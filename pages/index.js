import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("/api/events");
}
