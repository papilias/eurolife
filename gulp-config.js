module.exports = function () {
  var instanceRoot = "C:\\websites\\eurolifeSite.local";
  var config = {
    websiteRoot: instanceRoot + "\\",
    sitecoreLibraries: instanceRoot + "\\bin",
    licensePath: instanceRoot + "\\App_Data\\license.xml",
    packageXmlBasePath: "C:\\Users\\Wedia\\source\\repos\\EurolifeSitecore91\\code\\App_Data\\packages\\eurolife.xml",
    packagePath: instanceRoot + "\\App_Data\\packages",
    solutionName: "Eurolife",
    buildConfiguration: "Debug",
    buildToolsVersion: "auto",
    buildMaxCpuCount: 0,
    buildVerbosity: "minimal",
    buildPlatform: "Any CPU",
    publishPlatform: "AnyCpu",
    runCleanBuilds: false
  };
  return config;
}
