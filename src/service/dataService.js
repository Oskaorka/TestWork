import httpService from "./httpSerive";
const dataEndpointTests = "tests";
const dataEndpointSites = "sites";

const dataService = {
  getTests: async () => {
    const { data } = await httpService.get(dataEndpointTests);
    return data;
  },
  getSites: async () => {
    const { data } = await httpService.get(dataEndpointSites);
    return data;
  },
};

export default dataService;
