 const CampaignFactory = artifacts.require('./CampaignFactory.sol');

 require('chai').use(require('chai-as-promised')).should();

 contract('CampaignFactory', ([deployer, author, tipper]) => {
 	let campaign;

 	before(async() => {
 		campaign = await CampaignFactory.deployed();
 	})

 	describe('deployment', async () => {
 		it('deploy successfully', async() => {
 			const address = await campaign.address;
 			assert.notEqual(address, 0x0);
 			assert.notEqual(address, '');
 			assert.notEqual(address, null);
 		})
 	});

 })