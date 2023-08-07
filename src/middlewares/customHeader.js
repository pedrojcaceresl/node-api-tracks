

const customHeader = (req, res, next) => {
    try {
        
        console.log(req.headers);
        const apiKey = req.headers.api_key;

        if (apiKey === "juan123") {
            next();
		} else {
            res.status(403);
            res.send({
                error: "API_KEY is not correct",
            })
        }

     } catch (error) {
        res.status(403);
        res.send({
            error: "Something went wrong in the custom header"
        })
    }

}

module.exports = customHeader;