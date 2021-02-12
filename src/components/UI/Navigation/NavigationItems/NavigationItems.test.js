import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItams from './NavigationItems';
import NavigationItem from '../NavigationItem/NavigationItem';
configure({adapter:new Adapter()});
describe('<NavigationItams/>',()=>{
    let wrapper;
    beforeEach(() =>{
        wrapper =shallow(<NavigationItams/>);
    });


    it('It should render <NavigationItem/> two times if not authenticated' ,()=>{
        
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });


    it('It should render <NavigationItem/> 3 times if authenticated' ,()=>{
        //  wrapper =shallow(<NavigationItams isAuthenticated />); or we can do
        wrapper.setProps({
            isAuthenticated:true
        });
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    //this below test is to see - there is logout component which is there if we are authenticated
    //so we will check using contains method
    it('It should contain logout button ' ,()=>{
        wrapper.setProps({
            isAuthenticated:true
        });
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
})