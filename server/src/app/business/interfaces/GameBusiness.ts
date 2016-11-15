
import BaseBusiness = require("./BaseBusiness");
import IGameModel = require("../../model/interfaces/GameModel");

interface GameBusiness extends BaseBusiness<IGameModel> {
}

export = GameBusiness;
