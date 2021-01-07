import React from 'react';
import Hero from "../components/Hero";
import Axios from 'axios';

export default function Home({ hero }) {
    return (
        <div className="container flex items-center mx-auto justify-center">
            <Hero hero={hero} />
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