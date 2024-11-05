export class MarketingModel {
  constructor() {}
  async updateMarketingData({
    from,
    deviceType,
    directDownloadAPK
  }: {
    from: string;
    deviceType: string;
    directDownloadAPK: boolean;
  }) {
    let url = `${process.env.NEXT_PUBLIC_MARKETING_ENDPOINT}/${deviceType}_${from}`;
    if (directDownloadAPK) {
      url += "_apk";
    }
    const response = await fetch(url + "/");
    return response.json();
  }
}
