//@flow
'use strict'


import React,{Component, View} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pic from '../pic.jpg';
import Undraw_raining_sguh from '../undraw_raining_sguh.png';
import Undraw_sunny_day_bk3m from '../undraw_sunny_day_bk3m.png';
import Undraw_winter_magic_5xu2 from '../undraw_winter_magic_5xu2.png';
import Undraw_windy_day_x63l from '../undraw_windy_day_x63l.png';
import GolfR from '../golfR.jpg';
import Undraw_travelers_qlt1 from '../undraw_travelers_qlt1.png';
import {getWeatherByLocation} from './NetworkUtil';


/*
Todos :
FReeze Button on click 
Modularize component - pass city name as prop 
Refine the look and feel
*/

class Home extends Component {
    state ={
            wthr:[]
        };

    handleChangeFrom = (e) => {

        console.log('inside handle click');

        this.setState({[e.target.name]:e.target.value})
        
        console.log(e.target.name);
    }

    handleChangeTo = (e) => {

        console.log('inside handle click');

        this.setState({[e.target.name]:e.target.value})
        
        console.log(e.target.name);
    }

        handleclick = (e) => {
        
        e.preventDefault();
        
        console.log(e);

        console.log('Button Clicked, State Below');
        console.log(this.state);

        // const apiKey = 'e1a93138d9f69da2b14fec4cd4b09e13';
        // const url = 'https://api.openweathermap.org/data/2.5/weather?q=';//{city name}&appid={your api key}';
        
        const fromCityName = this.state.fromcity;//'Calgary';
        const toCityName = this.state.tocity;//'Calgary';

        console.log('from and to ciy name:',fromCityName,toCityName);

        //debugger;

        const result1 = '';

        
        const rs = getWeatherByLocation(fromCityName);

        //const rs2 = getWeatherByLocation(fromCityName).resolve('Success').then(function (response){ return response.data});

        // const rs3 = getWeatherByLocation(fromCityName).then (data =>{
        //      res.json({ message: 'Request received!', data })
        //      console.log('data',data);
        // })
    
// axiosTest().then(data => {
//   response.json({ message: 'Request received!', data })
// })

       console.log('rs',rs);
    //    console.log('rs3',rs);

       this.setState({wthr: rs});
       //console.log('rs2',rs2);
       //console.log(result1);
    }
    
    render(){
        const {wthr}= this.state.wthr;

        console.log('State below');
        console.log(this.state);

        // console.log('Length below');
        // console.log(wthr.id);

        const myFromCity =(<input type="text" placeholder = 'From city' name="fromcity" value={this.state.fromcity} onChange={this.handleChangeFrom}></input>);

        const myToCity =(<input type="text" placeholder = 'To city' name="tocity" value={this.state.tocity} onChange={this.handleChangeTo}></input>);

        console.log('myFromCity below');
        console.log(myFromCity);
        
        console.log('myToCity below');
        console.log(myToCity);

        const myButton = ( <button onClick={this.handleclick}>Get Temperature</button>);

        // const weath = wthr.id ? (
            
        //             <div>
        //                     <p>City: {wthr.name}</p>
        //                     <p>Temperature: {wthr.main.temp}</p>
        //                     <p>Feels Like: {wthr.main.feels_like}</p>
        //                     <p>Temp Min: {wthr.main.temp_min}</p>
        //                     <p>Temp Max: {wthr.main.temp_max}</p>

        //                     <p>
        //                     {console.log(wthr.weather[0].main)}
        //                     {(() => {
        //                         switch (wthr.weather[0].main) {
        //                         case "Clouds": return (<img src = {Undraw_raining_sguh} alt='undraw_raining_sguh'/>);
        //                         case "Clear": return (<img src ={Undraw_sunny_day_bk3m} alt='undraw_sunny_day_bk3m'/>);
        //                         case "Windy":  return (<img src ={Undraw_windy_day_x63l} alt='undraw_windy_day_x63l'/>);
        //                         case "Snow":  return (<img src ={Undraw_winter_magic_5xu2} alt='undraw_winter_magic_5xu2'/>);
        //                         default:      return (<img src ={GolfR} alt='golfR'/>);
        //                         }
        //                     })()}
        //                     </p>
        //             </div>
             

        // ) : (

        //     <p>No Data Yet</p>

        // )


    return(
        <div className="container home">
            <h4 className="center">{<img src = {Undraw_travelers_qlt1} alt='undraw_travelers_qlt1'/>}</h4>
            <p>{myFromCity}</p>
            <p>{myToCity}</p>
            <p>{myButton}</p>
            
        </div>
    )
};
}

export default Home;