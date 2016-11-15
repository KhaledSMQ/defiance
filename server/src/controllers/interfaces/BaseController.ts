
import IReadController = require("./ReadController");
import IWriteController = require("./WriteController");
import IBaseBusiness = require("../../app/business/interfaces/BaseBusiness");

interface BaseController<T extends IBaseBusiness<Object>> extends IReadController, IWriteController {
}

export = BaseController;
