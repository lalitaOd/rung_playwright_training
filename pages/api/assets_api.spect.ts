import { APIRequestContext, expect } from '@playwright/test';


export class AssetsApi {
    url: String
    request: APIRequestContext
    
    constructor(request: APIRequestContext){
        this.request = request
        this.url = 'http://localhost:8082'
    }

    async getAssetAndStatusShouldBeSuccess(){
        const response = await this.request.get(`${this.url}/assets`)
        expect(response.status()).toBe(200)
        const responseBody = JSON.parse(await response.text())
        console.log("Get responseBody",responseBody)
        return responseBody
    }

    async createAssetAndStatusShouldBeSuccess(assetId: string, assetName: string, assetType: string, inUseFlag: boolean){
        const response = await this.request.post(`${this.url}/assets`, {
            data: {
                    assetId: assetId,
                    assetName: assetName,
                    assetType: assetType,
                    inUse: inUseFlag
                }
        })
        const responseBody = JSON.parse(await response.text())
        expect(responseBody.status).toEqual('success')
        console.log("Create responseBody",responseBody)
    }

    async updateAssetAndStatusShouldBeSuccess(assetId: string, assetName: string, assetType: string, inUseFlag: boolean){
        const response = await this.request.put(`${this.url}/assets`, {
            data: {
                    assetId: assetId,
                    assetName: assetName,
                    assetType: assetType,
                    inUse: inUseFlag
                }
        })
        const responseBody = JSON.parse(await response.text())
        expect(responseBody.status).toEqual('success')
        console.log("Update responseBody",responseBody)
    }

    async deleteAssetAndStatusShouldBeSuccess(assetId: string){
        const response = await this.request.delete(`${this.url}/assets/${assetId}`)
        const responseBody = JSON.parse(await response.text())
        expect(responseBody.status).toEqual('success')
        console.log("Delete responseBody",responseBody)
        const assets = await this.getAssetAndStatusShouldBeSuccess()
        const isAssetIdInArray = assets.some(asset => asset.assetId === assetId);
        expect(isAssetIdInArray).toBeFalsy()
        console.log("isAssetIdInArray>>>>>>>",isAssetIdInArray)
    }

}