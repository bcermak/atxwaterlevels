import { useEffect, useState } from "react";

const DisplayTable = () => {

    const [siteName, setSiteName] = useState("");
    const [lcFlowRate, setLcFlowRate] = useState(0);
    const [lcWaterDepth, setLcWaterDepth] = useState(0);
    const [threeSixtyFlowRate, setThreeSixtyFlowRate] = useState(0);
    const [threeSixtyWaterDepth, setThreeSixtyWaterDepth] = useState(0);
    const [aboveBartonFlowRate, setAboveBartonFlowRate] = useState(0);
    const [aboveWaterDepth, setAboveBartonWaterDepth] = useState(0);
    const [bartonSpringsFlowRate, setBartonSpringsFlowRate] = useState(0);
    const [bartonSpringsWaterDepth, setBartonSpringsWaterDepth] = useState(0);
    const [updatedAt, setUpdatedAt] = useState("");



    useEffect(() => {
        fetch('https://waterservices.usgs.gov/nwis/iv/?format=json&sites=08155240&siteStatus=all')
        .then((res) => res.json()
        .then((json) => {
            const data = json;
            const flowData = data.value.timeSeries[0];
            // console.log(flowData)
            const heightData = data.value.timeSeries[1];
            // console.log(heightData);
            const siteName = heightData.sourceInfo.siteName;
            setSiteName(siteName);
            const flowRate = flowData.values[0].value[0].value;
            setLcFlowRate(flowRate);
            const waterDepth = heightData.values[0].value[0].value;
            setLcWaterDepth(waterDepth);

            
        }).then(() => {
            const currentTime = new Date(Date.now())
            const formatTime = currentTime.toLocaleString()
            setUpdatedAt(formatTime)
    })
      
        )
    }, [])

    useEffect(() => {
        fetch('https://waterservices.usgs.gov/nwis/iv/?format=json&sites=08155300&siteStatus=all')
        .then((res) => res.json()
        .then((json) => {
            const data = json;
            const flowData = data.value.timeSeries[0];
            // console.log(flowData)
            const heightData = data.value.timeSeries[1];
            // console.log(heightData);
            const flowRate = flowData.values[0].value[0].value;
            setThreeSixtyFlowRate(flowRate);
            const waterDepth = heightData.values[0].value[0].value;
            setThreeSixtyWaterDepth(waterDepth)
        })
        )
    }, []);

        useEffect(() => {
        fetch('https://waterservices.usgs.gov/nwis/iv/?format=json&sites=08155400&siteStatus=all')
        .then((res) => res.json()
        .then((json) => {
            const data = json;
            const flowData = data.value.timeSeries[0];
            // console.log(flowData)
            const heightData = data.value.timeSeries[1];
            // console.log(heightData);
            const flowRate = flowData.values[0].value[0].value;
            setAboveBartonFlowRate(flowRate);
            const waterDepth = heightData.values[0].value[0].value;
            setAboveBartonWaterDepth(waterDepth)
        })
        )
    }, []);

        useEffect(() => {
        fetch('https://waterservices.usgs.gov/nwis/iv/?format=json&sites=08155500&siteStatus=all')
        .then((res) => res.json()
        .then((json) => {
            const data = json;
            const flowData = data.value.timeSeries[0];
            // console.log(flowData)
            const heightData = data.value.timeSeries[1];
            // console.log(heightData);
            const flowRate = flowData.values[0].value[0].value;
            setBartonSpringsFlowRate(flowRate);
            const waterDepth = heightData.values[0].value[0].value;
            setBartonSpringsWaterDepth(waterDepth)
        })
        )
    }, []);

  return (
    <>
        <table>
            <caption> Last Updated: {updatedAt}</caption>
            <tr>
                <th> <strong>Location</strong> </th>
                <th> <strong>Flow Rate</strong> </th>
                <th> <strong>Water Depth</strong> </th>
            </tr>
            <tr>
                <td> Lost Creek </td>
                <td> {lcFlowRate} cfps </td>
                <td> {lcWaterDepth} feet </td>
            </tr>
            <tr>
                <td> 360 </td>
                <td> {threeSixtyFlowRate} cfps </td>
                <td> {threeSixtyWaterDepth} feet </td>
            </tr>
            <tr>
                <td> Above Barton Springs </td>
                <td> {aboveBartonFlowRate} cfps </td>
                <td> {aboveWaterDepth} feet </td>
            </tr>
            <tr>
                <td> Barton Springs </td>
                <td> {bartonSpringsFlowRate} cfps </td>
                <td> {bartonSpringsWaterDepth} feet </td>
            </tr>
        </table>
    </>
  )
}

export default DisplayTable