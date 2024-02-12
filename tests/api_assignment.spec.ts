import { expect } from '@playwright/test';
import { test } from '../pages/fixtures'


test.describe('TEST ASSETS API', ()=>{

    test('Get all asset and verify status code 200', async ({assetsApi})=>{
        await  assetsApi.getAssetAndStatusShouldBeSuccess()
    })

    test('Create asset and verify status success', async ({assetsApi})=>{
        await  assetsApi.createAssetAndStatusShouldBeSuccess('rung_id', 'Macbook Pro', '1', false)
    })

    test('Update asset and verify status success', async ({assetsApi})=>{
        await  assetsApi.updateAssetAndStatusShouldBeSuccess('rung_id', 'Macbook Pro M1', '1', true)
    })

    test('Delete asset and verify status success', async ({assetsApi})=>{
        await  assetsApi.deleteAssetAndStatusShouldBeSuccess('rung_id')
    })
})


