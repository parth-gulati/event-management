import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";
import Link from "next/link";

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No Upcoming Events</h3>}
      {events.map((x) => (
        <EventItem key={x.id} evt={x}>
          {x.name}
        </EventItem>
      ))}

      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All Events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();
  const eventsArray = await events.events;

  return {
    props: { events },
    revalidate: 1,
  };
}
