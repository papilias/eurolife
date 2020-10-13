module.exports = function () {
  var instanceRoot = "d:\\websites\\eurolifeSite.local";
  var config = {
    websiteRoot: instanceRoot + "\\",
    sitecoreLibraries: instanceRoot + "\\bin",
    licensePath: instanceRoot + "\\App_Data\\license.xml",
    packageXmlBasePath: "D:\\Source\\Repos\\Eurolife\\code\\App_Data\\packages\\eurolife.xml",
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
