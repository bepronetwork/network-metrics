import axios, {AxiosResponse} from 'axios';
const client = axios.create({baseURL: `https://api.coingecko.com/api/v3/`});

client.interceptors.response.use(
  undefined,
  (error) => (console.error(`Failed Gecko API`, error), Promise.reject(error)));

export default function useGecko() {
  async function getCoinInfo(geckoCoinId = `bepro-network`) {
    return client.get<{market_data: {circulating_supply: number, total_supply: number}}>(`coins/${geckoCoinId}`)
                 .then(({data: {market_data: {circulating_supply, total_supply}}}) => ({circulating_supply, total_supply}))
                 .catch(_ => ({total_supply: 0, circulating_supply: 0}))
  }

  return {getCoinInfo};
}
