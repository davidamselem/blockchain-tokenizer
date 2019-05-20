var SmartAssetMetadata = artifacts.require("SmartAssetMetadata.sol");
var SmartAssetRouter = artifacts.require("SmartAssetRouter.sol");


module.exports = (deployer) => {
    deployer.deploy(SmartAssetRouter, SmartAssetMetadata.address);
};
