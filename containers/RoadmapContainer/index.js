import React from "react";
import RoadmapCard from "../../components/RoadmapCard";
import Link from 'next/link';

const RoadmapContainer = ({ items }) => {
    return (
        <>
            {items?.map((item) => (
                <Link href={`/feedbacks/${item.id}`}>
                    <a>
                        <RoadmapCard {...item} />
                    </a>
                </Link>
            ))}
        </>
    );
};

export default RoadmapContainer
