const core = require("@actions/core");
const github = require("@actions/github");

try{
    throw new Error("Some Error Message");
    core.debug('Debug Message');
    core.warning('Warning message');
    core.error("Error Message");
    // core.setSecret

    const name = core.getInput("who_to_greet");
    console.log('Hello ${name}');

    const time = new Date();
    core.setOutput("time", time.toTimeString())

    core.exportVariable("HELLO_TIME", time)

    core.startGroup("Logging Github context");
    console.log(JSON.stringify(github.context, null, 2))
    core.endGroup();

} catch(error) {
    core.setFailed(error.message)
}





