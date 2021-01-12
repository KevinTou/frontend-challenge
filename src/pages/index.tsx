import React from 'react';
import Hero from "../components/Hero";
import Axios from 'axios';

import AnnouncementBar from '../components/AnnouncementBar';
import Reviews from '../components/Reviews';

export default function Home({ hero }) {
    return (
        <div className="flex flex-col items-center mx-auto justify-center mt-7">
            <AnnouncementBar />
            <Hero hero={hero} />
            <Reviews hero={hero} />
        </div>
    )
}

export async function getStaticProps() {
    let { data } = await Axios.get('http://localhost:3000/api/cms');

    return {
        props: {
            hero: data
        }
    }
}