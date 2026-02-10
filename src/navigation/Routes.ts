import { NavigatorScreenParams } from "@react-navigation/native";

export enum RootRoutes {
    AuthStack = 'AuthStack',
    MainTabs = 'MainTabs'
}

export enum AuthRoutes {
    Login = 'Login',
    Signup = 'Signup'
}

export enum MainRoutes {
    Home = 'Home',
    Store = 'Store',
    ProductDetails = 'ProductDetails',
    Checkout = 'Checkout',
    Profile = 'Profile',
    Category = 'Category',
    Cart = 'Cart',
    AddAddress = 'AddAdress',
    EditAddress = 'EditAddress'
}


export type RootStackParamList = {
    [RootRoutes.AuthStack]: undefined;
    [RootRoutes.MainTabs]: undefined
}

export type AuthStackParamList = {
    [AuthRoutes.Login]: undefined;
    [AuthRoutes.Signup]: undefined
}


export type MainTabParamList = {
    [MainRoutes.Home]:undefined;
    [MainRoutes.Store]: undefined;
    [MainRoutes.Cart]: undefined;
}

export type MainStackParamList = {
    MainTabs: NavigatorScreenParams<MainTabParamList>;
    [MainRoutes.ProductDetails]: { prductId: string };
    [MainRoutes.Checkout]: undefined;
    [MainRoutes.Profile]: undefined;
    [MainRoutes.Category]: undefined;
    [MainRoutes.AddAddress]: undefined;
    [MainRoutes.EditAddress]: { addressId: string }
}