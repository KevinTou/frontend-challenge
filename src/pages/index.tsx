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
    // let { data } = await Axios.get('http://localhost:3000/api/cms');

    let data = {
        header: 'Your Custom Star Map',
        content: 'Create a 18"x24" star map that shows the stars exactly as they were on a specific date and location with a personalized message!',
        cta: 'Create Your Star Map',
        src: '/images/hero.png'
    }

    return {
        props: {
            hero: data
        }
    }
}