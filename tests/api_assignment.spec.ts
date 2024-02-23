import { expect } from '@playwright/test';
import { test } from '../pages/fixtures'
import testdata from '../testdata/testdata.json';


test.describe('TEST ASSETS API', ()=>{

    test('Get all asset and verify status code 200', async ({assetsApi})=>{
        await  assetsApi.getAssetAndStatusShouldBeSuccess()
    })

    test('Create asset and verify status success', async ({assetsApi})=>{
        await  assetsApi.createAssetAndStatusShouldBeSuccess(testdata.createAsset.assetId, testdata.createAsset.assetName, testdata.createAsset.assetType, testdata.createAsset.inUseFlag)
    })

    test('Update asset and verify status success', async ({assetsApi})=>{
        await  assetsApi.updateAssetAndStatusShouldBeSuccess(testdata.updateAsset.assetId, testdata.updateAsset.assetName, testdata.updateAsset.assetType, testdata.updateAsset.inUseFlag)
    })

    test('Delete asset and verify status success', async ({assetsApi})=>{
        await  assetsApi.deleteAssetAndStatusShouldBeSuccess(testdata.deleteAsset.assetId)
    })
})


