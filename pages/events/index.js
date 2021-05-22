import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";
import { API_URL } from "@/config/index";
import EventItem from '@/components/EventItem'

export default function EventsPage({ events }) {
  console.log(events);

  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No Upcoming Events</h3>}
      {events.map((x) => (
        <EventItem key={x.id} evt={x}>{x.name}</EventItem>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  const eventsArray = await events.events;

  return {
    props: { events: eventsArray },
    revalidate: 1,
  };
}
