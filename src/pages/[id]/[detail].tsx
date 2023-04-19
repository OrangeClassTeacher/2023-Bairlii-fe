import React from 'react';
import { useRouter } from "next/router";

const AdDetail = () => {
    const { query } = useRouter();

    return (
        <div>
            <div>{query.id}</div>
            <div>{query.detail}</div>
        </div>
    )
}

export default AdDetail
