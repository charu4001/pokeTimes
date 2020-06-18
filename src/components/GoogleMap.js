import React from 'react';

export default class GoogleMap extends React.Component{
constructor(){
    super();
    this.state = {
        zoom: 13,
        maptype: 'roadmap',
        lat: -33.8688,
        lng: 141.2195
    }
}

componentDidMount(){   
    const mm = new window();
    console.log(typeof mm);

    let map = new window.google.maps.Map(document.getElementById('map'), {
        center: {
            lat: this.state.lat, 
            lng: this.state.lng},
        zoom: 13,
        mapTypeId: 'roadmap',
    })
    console.log('loaded')

}

render(){
    return(
        <div>
            <div id='map' />
        </div>
    )
}
}