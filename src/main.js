import React from 'react';
import { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ShoppingList from './screens/ShoppingList';
import AddProduct from './screens/AddProduct';

const Navigator = StackNavigator({
    ShoppingList: { screen: ShoppingList },
    AddProduct: { screen: AddProduct }
});

export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        return <Navigator />;
    }
}