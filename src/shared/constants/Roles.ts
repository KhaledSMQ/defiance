
import { Faction, Role } from "../models";

export class Roles {
    // Good Roles
    static GenericGood: Role = {
        faction: Faction.Good,
        name: "Generic Good"
    };

    static Merlin: Role = {
        faction: Faction.Good,
        name: "Merlin"
    };

    static Percival: Role = {
        faction: Faction.Good,
        name: "Percival"
    };

    static FaithfulLancelot: Role = {
        faction: Faction.Good,
        name: "Lancelot (G)"
    };

    static get GoodRoles(): Role[] {
        return [Roles.Merlin, Roles.Percival, Roles.FaithfulLancelot];
    }

    // Evil Roles
    static GenericEvil: Role = {
        faction: Faction.Evil,
        name: "Generic Evil"
    };

    static Mordred: Role = {
        faction: Faction.Evil,
        name: "Mordred"
    };

    static Morgana: Role = {
        faction: Faction.Evil,
        name: "Morgana"
    };

    static Assassin: Role = {
        faction: Faction.Evil,
        name: "Assassin"
    };

    static Oberon: Role = {
        faction: Faction.Evil,
        name: "Oberon"
    };

    static BetrayerLancelot: Role = {
        faction: Faction.Evil,
        name: "Lancelot (E)"
    };

    static get EvilRoles(): Role[] {
        return [Roles.Mordred, Roles.Morgana, Roles.Assassin, Roles.Oberon, Roles.BetrayerLancelot];
    }
}

Object.seal(Roles);