import React,{Component, View} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pic from '../pic.jpg';
import Undraw_raining_sguh from '../undraw_raining_sguh.png';
import Undraw_sunny_day_bk3m from '../undraw_sunny_day_bk3m.png';
import Undraw_winter_magic_5xu2 from '../undraw_winter_magic_5xu2.png';
import Undraw_windy_day_x63l from '../undraw_windy_day_x63l.png';
import GolfR from '../golfR.jpg';

/*
Todos :
FReeze Button on click 
Modularize component - pass city name as prop 
Refine the look and feel
*/

class Home extends Component {
    state ={
            wthr:[], 
            city:''
        };

    handleChange = (e) => {

        console.log('inside handle click');

        this.setState({[e.target.name]:e.target.value})
        
        console.log(e.target.name);
    }

    handleclick = (e) => {
        
        e.preventDefault();
        
        console.log(e);

        console.log('Button Clicked, City Below');
        console.log(this.state.city);

        const apiKey = 'e1a93138d9f69da2b14fec4cd4b09e13';
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=';//{city name}&appid={your api key}';
        const cityName = this.state.city;//'Calgary';

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

        const myCity =(<input type="text" placeholder = 'Your city' name="city" value={this.state.city} onChange={this.handleChange}></input>);
        console.log('myCity below');
        console.log(myCity);
        
        const myButton = ( <button onClick={this.handleclick}>Get Temperature</button>);

        const weath = wthr.id ? (
            
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
                                case "Clouds": return (<img src = {Undraw_raining_sguh} alt='undraw_raining_sguh'/>);
                                case "Clear": return (<img src ={Undraw_sunny_day_bk3m} alt='undraw_sunny_day_bk3m'/>);
                                case "Windy":  return (<img src ={Undraw_windy_day_x63l} alt='undraw_windy_day_x63l'/>);
                                case "Snow":  return (<img src ={Undraw_winter_magic_5xu2} alt='undraw_winter_magic_5xu2'/>);
                                default:      return (<img src ={GolfR} alt='golfR'/>);
                                }
                            })()}
                            </p>
                    </div>
             

        ) : (

            <p>No Data Yet</p>

        )


    return(
        <div className="container home">
            <h4 className="center">Home</h4>
            <p>{myCity}</p>
            <p>{myButton}</p>
            <view>{weath}</view>
        </div>
    )
};
}

export default Home;