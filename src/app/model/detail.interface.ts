export interface iDetail{
    abilities:iAbility[];
    weight:number;
    height:number
    name:string;
}

interface iAbility{ 
    ability:{
        name:string
    }
}