import { connect } from "mongoose";
import { useEffect } from "react";

const DisplayTable = () => {

    useEffect(() => {
        fetch('https://waterservices.usgs.gov/nwis/iv/?format=json&sites=08155240&siteStatus=all')
        .then((res) => res.json()
        .then((json) => {
            const data = json;
            const flowData = data.value.timeSeries[0];
            console.log(flowData)
            const heightData = data.value.timeSeries[1];
            console.log(heightData);
        })
        )
    }, [])

  return (
    <div>DisplayTable</div>
  )
}

export default DisplayTable