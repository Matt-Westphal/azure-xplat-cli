// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4004a9fd-d58e-48dc-aeb2-4a4aec58606f',
    name: 'Free Trial',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1273adef-00a3-4086-a51a-dbcce1857d36',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://gallery.azure.com:443')
  .get('/Microsoft.Gallery/galleryitems/Microsoft.ASPNETStarterSite.0.2.2-preview')
  .reply(200, "{\"identity\":\"Microsoft.ASPNETStarterSite.0.2.2-preview\",\"publisher\":\"Microsoft\",\"publisherDisplayName\":\"Microsoft\",\"itemName\":\"ASPNETStarterSite\",\"itemDisplayName\":\"ASP.NET Starter Site\",\"version\":\"0.2.2-preview\",\"summary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"longSummary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"description\":\"<p>Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website.</p>\",\"resourceGroupName\":null,\"definitionTemplates\":{\"uiDefinitionFileUrl\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/UIDefinition.json\",\"defaultDeploymentTemplateId\":\"website_NewHostingPlan-Default\",\"deploymentTemplateFileUrls\":{\"website_ExistingHostingPlan\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_ExistingHostingPlan.json\",\"website_NewHostingPlan\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan.json\",\"website_NewHostingPlan-Default\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan-Default.json\",\"website_NewHostingPlan_BasicStandard\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan_BasicStandard.json\"}},\"categoryIds\":[\"web\",\"starterSite\"],\"screenshotUrls\":[],\"links\":[{\"id\":\"0\",\"displayName\":\"About Microsoft\",\"uri\":\"http://www.microsoft.com/\"},{\"id\":\"1\",\"displayName\":\"Documentation\",\"uri\":\"http://www.microsoft.com/web/category/all\"}],\"iconFileUrls\":{\"small\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Small.png\",\"medium\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Medium.png\",\"large\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Large.png\",\"wide\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Wide.png\",\"hero\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-content-type-options': 'nosniff',
  'x-xss-protection': '1; mode=block',
  'x-ms-version': '4.14.0.133 (a2a340b.150108-1230)',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'browserId=889ef19939cb42df93ed6337521ff41e; domain=gallery.azure.com; path=/; secure; HttpOnly' ],
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 17 Sep 2015 00:17:23 GMT',
  connection: 'close',
  'content-length': '2773' });
 return result; },
function (nock) { 
var result = 
nock('https://gallery.azure.com:443')
  .get('/Microsoft.Gallery/galleryitems/Microsoft.ASPNETStarterSite.0.2.2-preview')
  .reply(200, "{\"identity\":\"Microsoft.ASPNETStarterSite.0.2.2-preview\",\"publisher\":\"Microsoft\",\"publisherDisplayName\":\"Microsoft\",\"itemName\":\"ASPNETStarterSite\",\"itemDisplayName\":\"ASP.NET Starter Site\",\"version\":\"0.2.2-preview\",\"summary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"longSummary\":\"Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website\",\"description\":\"<p>Get started with this ready-to-use ASP.NET website template including tab interface and login support. This can be further customized to build a website for a small business or a personal website.</p>\",\"resourceGroupName\":null,\"definitionTemplates\":{\"uiDefinitionFileUrl\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/UIDefinition.json\",\"defaultDeploymentTemplateId\":\"website_NewHostingPlan-Default\",\"deploymentTemplateFileUrls\":{\"website_ExistingHostingPlan\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_ExistingHostingPlan.json\",\"website_NewHostingPlan\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan.json\",\"website_NewHostingPlan-Default\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan-Default.json\",\"website_NewHostingPlan_BasicStandard\":\"https://gallery.azure.com/artifact/20140901/Microsoft.ASPNETStarterSite.0.2.2-preview/DeploymentTemplates/Website_NewHostingPlan_BasicStandard.json\"}},\"categoryIds\":[\"web\",\"starterSite\"],\"screenshotUrls\":[],\"links\":[{\"id\":\"0\",\"displayName\":\"About Microsoft\",\"uri\":\"http://www.microsoft.com/\"},{\"id\":\"1\",\"displayName\":\"Documentation\",\"uri\":\"http://www.microsoft.com/web/category/all\"}],\"iconFileUrls\":{\"small\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Small.png\",\"medium\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Medium.png\",\"large\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Large.png\",\"wide\":\"https://106c4.wpc.azureedge.net/80106C4/Gallery-Prod/cdn/2015-02-24/prod-microsoft-windowsazure-gallery/Microsoft.ASPNETStarterSite.0.2.2-preview/Icons/Wide.png\",\"hero\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-content-type-options': 'nosniff',
  'x-xss-protection': '1; mode=block',
  'x-ms-version': '4.14.0.133 (a2a340b.150108-1230)',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'browserId=889ef19939cb42df93ed6337521ff41e; domain=gallery.azure.com; path=/; secure; HttpOnly' ],
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  date: 'Thu, 17 Sep 2015 00:17:23 GMT',
  connection: 'close',
  'content-length': '2773' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups/xplatTestGCreate9298?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreate9298' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-request-id': 'f1ea7e68-f67f-4a0f-8601-2b985f8464c7',
  'x-ms-correlation-request-id': 'f1ea7e68-f67f-4a0f-8601-2b985f8464c7',
  'x-ms-routing-request-id': 'WESTUS:20150917T001723Z:f1ea7e68-f67f-4a0f-8601-2b985f8464c7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 00:17:23 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups/xplatTestGCreate9298?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatTestGCreate9298' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-request-id': 'f1ea7e68-f67f-4a0f-8601-2b985f8464c7',
  'x-ms-correlation-request-id': 'f1ea7e68-f67f-4a0f-8601-2b985f8464c7',
  'x-ms-routing-request-id': 'WESTUS:20150917T001723Z:f1ea7e68-f67f-4a0f-8601-2b985f8464c7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 00:17:23 GMT',
  connection: 'close',
  'content-length': '112' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups/xplatTestGCreate9298?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/xplatTestGCreate9298\",\"name\":\"xplatTestGCreate9298\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '31d4df42-33cc-4455-b31e-f87e341fefa4',
  'x-ms-correlation-request-id': '31d4df42-33cc-4455-b31e-f87e341fefa4',
  'x-ms-routing-request-id': 'WESTUS:20150917T001724Z:31d4df42-33cc-4455-b31e-f87e341fefa4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 00:17:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups/xplatTestGCreate9298?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/xplatTestGCreate9298\",\"name\":\"xplatTestGCreate9298\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '31d4df42-33cc-4455-b31e-f87e341fefa4',
  'x-ms-correlation-request-id': '31d4df42-33cc-4455-b31e-f87e341fefa4',
  'x-ms-routing-request-id': 'WESTUS:20150917T001724Z:31d4df42-33cc-4455-b31e-f87e341fefa4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 00:17:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/csmrg7421\",\"name\":\"csmrg7421\",\"location\":\"southindia\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/Default-Storage-WestUS\",\"name\":\"Default-Storage-WestUS\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/onesdk8997\",\"name\":\"onesdk8997\",\"location\":\"westus\",\"tags\":{\"testtag\":\"testval\"},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/onesdk9023\",\"name\":\"onesdk9023\",\"location\":\"australiaeast\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/Shubham_TestRG\",\"name\":\"Shubham_TestRG\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/testrg1695\",\"name\":\"testrg1695\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/xplatTestGCreate9298\",\"name\":\"xplatTestGCreate9298\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14864',
  'x-ms-request-id': '2b033ed1-16a4-4c86-915e-dc943a08db36',
  'x-ms-correlation-request-id': '2b033ed1-16a4-4c86-915e-dc943a08db36',
  'x-ms-routing-request-id': 'WESTUS:20150917T001724Z:2b033ed1-16a4-4c86-915e-dc943a08db36',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 00:17:24 GMT',
  connection: 'close',
  'content-length': '1339' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/csmrg7421\",\"name\":\"csmrg7421\",\"location\":\"southindia\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/Default-Storage-WestUS\",\"name\":\"Default-Storage-WestUS\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/onesdk8997\",\"name\":\"onesdk8997\",\"location\":\"westus\",\"tags\":{\"testtag\":\"testval\"},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/onesdk9023\",\"name\":\"onesdk9023\",\"location\":\"australiaeast\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/Shubham_TestRG\",\"name\":\"Shubham_TestRG\",\"location\":\"westus\",\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/testrg1695\",\"name\":\"testrg1695\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}},{\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourceGroups/xplatTestGCreate9298\",\"name\":\"xplatTestGCreate9298\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14864',
  'x-ms-request-id': '2b033ed1-16a4-4c86-915e-dc943a08db36',
  'x-ms-correlation-request-id': '2b033ed1-16a4-4c86-915e-dc943a08db36',
  'x-ms-routing-request-id': 'WESTUS:20150917T001724Z:2b033ed1-16a4-4c86-915e-dc943a08db36',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 00:17:24 GMT',
  connection: 'close',
  'content-length': '1339' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups/xplatTestGCreate9298?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFOTI5OC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '90b46cd5-0db6-4a15-b7a7-0a2ee565adcf',
  'x-ms-correlation-request-id': '90b46cd5-0db6-4a15-b7a7-0a2ee565adcf',
  'x-ms-routing-request-id': 'WESTUS:20150917T001724Z:90b46cd5-0db6-4a15-b7a7-0a2ee565adcf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 00:17:24 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/resourcegroups/xplatTestGCreate9298?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFOTI5OC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-request-id': '90b46cd5-0db6-4a15-b7a7-0a2ee565adcf',
  'x-ms-correlation-request-id': '90b46cd5-0db6-4a15-b7a7-0a2ee565adcf',
  'x-ms-routing-request-id': 'WESTUS:20150917T001724Z:90b46cd5-0db6-4a15-b7a7-0a2ee565adcf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 00:17:24 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFOTI5OC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFOTI5OC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': 'ee8bd2cd-8ff1-4707-b8f0-e61454a758b8',
  'x-ms-correlation-request-id': 'ee8bd2cd-8ff1-4707-b8f0-e61454a758b8',
  'x-ms-routing-request-id': 'WESTUS:20150917T001740Z:ee8bd2cd-8ff1-4707-b8f0-e61454a758b8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 00:17:39 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFOTI5OC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFOTI5OC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-request-id': 'ee8bd2cd-8ff1-4707-b8f0-e61454a758b8',
  'x-ms-correlation-request-id': 'ee8bd2cd-8ff1-4707-b8f0-e61454a758b8',
  'x-ms-routing-request-id': 'WESTUS:20150917T001740Z:ee8bd2cd-8ff1-4707-b8f0-e61454a758b8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 00:17:39 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFOTI5OC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFOTI5OC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-request-id': '4ece4d5c-228b-4d31-a71e-9e04b89178d7',
  'x-ms-correlation-request-id': '4ece4d5c-228b-4d31-a71e-9e04b89178d7',
  'x-ms-routing-request-id': 'WESTUS:20150917T001755Z:4ece4d5c-228b-4d31-a71e-9e04b89178d7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 00:17:54 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFOTI5OC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFOTI5OC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14984',
  'x-ms-request-id': '4ece4d5c-228b-4d31-a71e-9e04b89178d7',
  'x-ms-correlation-request-id': '4ece4d5c-228b-4d31-a71e-9e04b89178d7',
  'x-ms-routing-request-id': 'WESTUS:20150917T001755Z:4ece4d5c-228b-4d31-a71e-9e04b89178d7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 00:17:54 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFOTI5OC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-request-id': '446c5d34-c704-40ce-adac-6ece418bc5d2',
  'x-ms-correlation-request-id': '446c5d34-c704-40ce-adac-6ece418bc5d2',
  'x-ms-routing-request-id': 'WESTUS:20150917T001810Z:446c5d34-c704-40ce-adac-6ece418bc5d2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 00:18:09 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFRFU1RHQ1JFQVRFOTI5OC1XRVNUVVMiLCJqb2JMb2NhdGlvbiI6Indlc3R1cyJ9?api-version=2014-04-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-request-id': '446c5d34-c704-40ce-adac-6ece418bc5d2',
  'x-ms-correlation-request-id': '446c5d34-c704-40ce-adac-6ece418bc5d2',
  'x-ms-routing-request-id': 'WESTUS:20150917T001810Z:446c5d34-c704-40ce-adac-6ece418bc5d2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 17 Sep 2015 00:18:09 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplatTestGCreate9298'];};