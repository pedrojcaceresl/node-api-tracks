
const app = require("../app");
const config = require("./config");


app.listen(config.PORT, () => {
    console.log(`Running on PORT ${config.PORT}`);
})

