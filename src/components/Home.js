import React,{Component, View} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pic from '../pic.jpg';
import Undraw_raining_sguh from '../undraw_raining_sguh.png';
import Undraw_sunny_day_bk3m from '../undraw_sunny_day_bk3m.png';
import Undraw_winter_magic_5xu2 from '../undraw_winter_magic_5xu2.png';
import Undraw_windy_day_x63l from '../undraw_windy_day_x63l.png';
import GolfR from '../golfR.jpg';

class Home extends Component {
//const Home =() =>{
    // state ={
    //     posts: []
    // }
    // componentDidMount(){
    //     console.log(new Date().toLocaleString());
    //     axios.get('https://jsonplaceholder.typicode.com/posts/')
    //     .then(res => {
    //         console.log(res);
    //         this.setState({
    //             posts: res.data.slice(0,10)
    //         });
    //         console.log(new Date().toLocaleString());

    //         console.log(this.state);
    //     })
    // }

    state ={wthr:[]};

    handleclick = (e) => {
        
        e.preventDefault();

        console.log('Button Clicked');

        const apiKey = 'e1a93138d9f69da2b14fec4cd4b09e13';
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=';//{city name}&appid={your api key}';
        const cityName = 'Calgary';

        const completeUrl = url + cityName +'&appid=' + apiKey;

        axios.get(completeUrl)
        .then ( result =>{
            console.log(result);
            this.setState({
                wthr: result.data
            });
        }
        )
        
    }
    
    render (){
        const {wthr}= this.state;

        console.log('charu');
        console.log(this.state);
        console.log('Length below');
        console.log(wthr.id);
        
        const myButton = ( <button onClick={this.handleclick}>Get Temperature</button>);

        const weath = wthr.id ? (
            //wthr.map(w => {
                //return(
                    <div>
                            <p>City: {wthr.name}</p>
                            <p>Temperature: {wthr.main.temp}</p>
                            <p>Feels Like: {wthr.main.feels_like}</p>
                            <p>Temp Min: {wthr.main.temp_min}</p>
                            <p>Temp Max: {wthr.main.temp_max}</p>

                            <p>
                            {console.log(wthr.weather[0].main)}
                            {(() => {
                                switch (wthr.weather[0].main) {
                                case "Clouds_": return (<img src = {Undraw_raining_sguh} alt='undraw_raining_sguh'/>);
                                case "Sunny": return (<img src ={Undraw_sunny_day_bk3m} alt='undraw_sunny_day_bk3m'/>);
                                case "Windy":  return (<img src ={Undraw_windy_day_x63l} alt='undraw_windy_day_x63l'/>);
                                case "Snow":  return (<img src ={Undraw_winter_magic_5xu2} alt='undraw_winter_magic_5xu2'/>);
                                default:      return (<img src ={GolfR} alt='golfR'/>);
                                }
                            })()}
                            </p>
                    </div>
                //)
            //})

        ) : (

            <p>No Data Yet</p>

        )


        // const postList = posts.length ? (
        //     posts.map(post =>{
        //         return(
        //             <div className="post card" key={post.id}>
        //             <img src = {Pic} alt="pic"/>
        //             <div className="card-content">
        //                 <Link to ={'/' + post.id}>
        //                 <span className="card-title red-text">{post.title}</span>
        //                 </Link>
        //                 <p>{post.body}</p>
        //             </div>
                    
        //             </div>
        //         )
        //     })
        // ) : (
        //     <div className="center">No posts Yet </div>
        // )
    return(
        <div className="container home">
            <h4 className="center">Home</h4>
            <view>{myButton}</view>
            <view>{weath}</view>
        </div>
    )
};
}

export default Home;