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

import Demo from './Demo';
import GoogleMap from './GoogleMap';

/*
Todos :
FReeze Button on click 
Modularize component - pass city name as prop 
Refine the look and feel
*/

class Home extends Component {
    state ={
            wthrFromCity:[],
            wthrToCity:[]

        };

    handleChangeFrom = (e) => {

        this.setState({[e.target.name]:e.target.value})
        
        console.log(e.target.name);
    }

    handleChangeTo = (e) => {

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

        console.log('from and to city name:',fromCityName,toCityName);

        //debugger;

        var that = this;
       
        const wthrFromCity = getWeatherByLocation(fromCityName);
        var p1 = Promise.resolve(wthrFromCity);
        console.log('p',p1);
        p1.then(function(valWthrFromCity) {
        console.log(valWthrFromCity); // 1
        that.setState({wthrFromCity: valWthrFromCity});
        
        }); 

        
        

       const wthrToCity = getWeatherByLocation(toCityName);
       var p2 = Promise.resolve(wthrToCity);
        console.log('p2',p2);
        p2.then(function(valWthrToCity) {
        console.log(valWthrToCity); // 1
        that.setState({wthrToCity: valWthrToCity});
        });

        console.log('state here ',this.state);
    //    this.setState({wthr: wthrFromCity});
    //    this.setState({wthr: wthrToCity});

    }
    
    render(){
        
        const wfc= this.state.wthrFromCity;
        const wtc= this.state.wthrToCity;

        console.log('State below');
        console.log(this.state);

        console.log('wthrFromCity below');
        console.log(wfc);
        console.log('wthrToCity below');
        console.log(wtc);



        // console.log('Length below');
        // console.log(wthr.id);

        const myFromCity =(<input type="text" placeholder = 'From city' name="fromcity"   value={this.state.fromcity} onChange={this.handleChangeFrom}></input>);

        const myToCity =(<input type="text" placeholder = 'To city' name="tocity"  value={this.state.tocity} onChange={this.handleChangeTo}></input>);

        // console.log('myFromCity below');
        // console.log(myFromCity);
        
        // console.log('myToCity below');
        // console.log(myToCity);

        const myButton = ( <button  onClick={this.handleclick}>Get Weather</button>);

         const fromWeath //='Hello';
         = wfc.location ? (
            
                    <div>
                            <p>City: {wfc.location}</p>
                            <p>Temperature: {wfc.currTemp}</p>
                            <p>Feels Like: {wfc.feelsLike}</p>
                            <p>Temp Min: {wfc.minTemp}</p>
                            <p>Temp Max: {wfc.maxTemp}</p>

                            <p>
                            </p>
                    </div>
             

        ) : (

            <p>No Data Yet</p>

        )

        const toWeath //='Hello';
         = wtc.location ? (
            
                    <div>
                            <p>City: {wtc.location}</p>
                            <p>Temperature: {wtc.currTemp}</p>
                            <p>Feels Like: {wtc.feelsLike}</p>
                            <p>Temp Min: {wtc.minTemp}</p>
                            <p>Temp Max: {wtc.maxTemp}</p>

                            <p>
                            </p>
                    </div>
             

        ) : (

            <p>No Data Yet</p>

        )


    return(
    
        <div class="row" className="center">

        <div> <Demo />  </div>
        

            <div  className="fromCityp">{myFromCity}
                <view className = "fromWthrDtls">{fromWeath}</view>
            </div>
            <div className="toCityp">{myToCity}
                <view className = "toWthrDtls">{toWeath}</view>
            </div>
            <div  classname="btn1">{myButton}</div>
        </div>
    )
};
}
//{<img name ="bckgrnd" src = {Undraw_travelers_qlt1} alt='undraw_travelers_qlt1'/>}
export default Home;