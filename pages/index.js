import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";
import { API_URL } from "@/config/index";

export default function HomePage({ events }) {
  console.log(events);
  console.log(events.events);
  let eventArray = events.events;
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No Upcoming Events</h3>}
      {eventArray.map((x) => (
        <h3 key={x.id}>{x.name}</h3>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
