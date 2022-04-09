import React from 'react';
import {Routes, Route} from 'react-router-dom';

import {SignIn} from './components/sign-in/SignIn';
import {Explore} from './components/explore/Explore';
import {Activity} from './components/activity/Activity';
import {Academy} from './components/academy/Academy';
import {Blog} from './components/blog/Blog';
import {SignUp} from './components/sign-up/SignUp';
import {LandingPage} from './components/landing-page/LandingPage';
import {CollectionList} from './components/collection-list/CollectionList';
import {Collection} from './components/collection/Collection';
import {CollectionTable} from './components/collection-table/CollectionTable';
import {MyCollections} from './components/my-collections/MyCollections';

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='collection'>
                <Route path='my-collections' element={<MyCollections/>}/>
                <Route path='list' element={<CollectionList/>}/>
                <Route path='table' element={<CollectionTable/>}/>
                <Route path=':id' element={<Collection/>}/>
            </Route>
            <Route path='explore' element={<Explore/>}/>
            <Route path='activity' element={<Activity/>}/>
            <Route path='academy' element={<Academy/>}/>
            <Route path='blog' element={<Blog/>}/>
            <Route path='sign-in' element={<SignIn/>}/>
            <Route path='sign-up' element={<SignUp/>}/>
            <Route path='' element={<LandingPage/>}/>
        </Routes>
    );
}
