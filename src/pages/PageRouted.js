import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './home/Home'
import Weather from './Weather/Weather'
import MapPage from './map/MapPage'
function PageRouted() {
    return (
        <Switch>
            <Route exact path={'/'} component={Home} />
            
            <Route path={'/weather'}>
                <Weather />
            </Route>
            <Route exact path={'/map'}>
                <MapPage />
            </Route>
        </Switch>      
    )
}

export default PageRouted