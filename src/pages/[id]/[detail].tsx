import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { AdDetailSmallSlider } from "@/components/adDetailComp/AdDetailSmallSlider";

const AdDetail = () => {
    const { query } = useRouter();
    const [images, setImages] = useState([])

    useEffect(() => {
        getData()
    }, [])

    function getData() {
        axios
            .get(`http://localhost:9000/api/properties/${query.detail}`)
            .then((res) => {
                setImages(res.data.result.photos);
                console.log(res.data.result.photos);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <AdDetailSmallSlider images={images} />
        </div>
    );
};

export default AdDetail;
