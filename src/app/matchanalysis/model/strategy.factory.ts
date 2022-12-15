import { Injectable } from "@angular/core";

export class Strategy {
    public name: string;
    public midLeft: number = 0;
    public midRight: number = 0;
    public left: number = 0;
    public right: number = 0;
    public trollLeft: number = 0;
    public trollRight: number = 0;
    public troll: number = 0;
    public pushing: number = 0;
    public point: number = 0;
    public second: number = 0;
    public leftHoop: number = 0;
    public rightHoop: number = 0;

    public static GetTwoTwo(): Strategy {
        let s = new Strategy();
        s.name = "2-2"
        s.point = 1;
        s.second = 1;
        s.leftHoop = 1;
        s.rightHoop = 1;

        return s;
    }

    public static GetOneTwoOne(): Strategy {
        let s = new Strategy();
        s.name = "1-2-1"
        s.point = 1;
        s.leftHoop = 1;
        s.rightHoop = 1;
        s.troll = 1;

        return s;
    }
    public static Trapeze(): Strategy {
        let s = new Strategy();
        s.name = "Trapeze"
        s.midLeft = 1;
        s.midRight = 1;
        s.left = 1;
        s.right = 1;

        return s;
    }

    public static Box(): Strategy {
        let s = new Strategy();
        s.name = "Box"
        s.midLeft = 1;
        s.midRight = 1;
        s.trollLeft = 1;
        s.trollRight = 1;

        return s;
    }
    public static defStrategies: Strategy[] = [];
    public static offStrategies: Strategy[] = [];
    static{
        Strategy.defStrategies.push(Strategy.GetTwoTwo());
        Strategy.defStrategies.push(Strategy.GetOneTwoOne());
        Strategy.offStrategies.push(Strategy.Trapeze());
        Strategy.offStrategies.push(Strategy.Box());
    }
    public static getDefStrategies(){
        return Strategy.defStrategies;
    }
    public static getOffStrategies(){
        return Strategy.offStrategies;
    }
}