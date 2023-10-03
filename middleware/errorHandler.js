const {constants } = require("../constant");

const errorHandlor = (err, req, res , next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    
    switch(statusCode){
        case constants.VALIDATION_ERROR:
            res.json({title:"Validation Failed!",message:err.message, stackTrace: err.stack});
            break;
        case constants.NOT_FOUND:
            res.json({title:"Not Found!",message:err.message, stackTrace: err.stack});
            break;
        case constants.INTERNAL_SERVER_ERROR:
            res.json({title:"Internal Server Error!",message:err.message, stackTrace: err.stack});
            break;
        case constants.UNAUTHORIZED:
            res.json({title:"UNAUTHORIZED ACCESS!",message:err.message, stackTrace: err.stack});
            break;
        default:
            res.json({title:"Something Went Wrong!",message:err.message, stackTrace: err.stack});
    }
};

module.exports = errorHandlor;