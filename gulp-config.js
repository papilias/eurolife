module.exports = function () {
  var instanceRoot = "C:\\websites\\sc910.local";
  var config = {
    websiteRoot: instanceRoot + "\\",
    sitecoreLibraries: instanceRoot + "\\bin",
    licensePath: instanceRoot + "\\App_Data\\license.xml",
    packageXmlBasePath: ".\\src\\Project\\Eurolife\\code\\App_Data\\packages\\eurolife.xml",
    packagePath: instanceRoot + "\\App_Data\\packages",
    solutionName: "Eurolife",
    buildConfiguration: "Debug",
    buildToolsVersion: 15.0,
    buildMaxCpuCount: 0,
    buildVerbosity: "minimal",
    buildPlatform: "Any CPU",
    publishPlatform: "AnyCpu",
    runCleanBuilds: false
  };
  return config;
}
