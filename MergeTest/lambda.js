exports.handler = function(event, context, callback) {
    
    console.log("Hello");
    callback(null, {"message": "Successfully executed"});
}