import InstanceAxios from '@/configs/axios'
import createQuery from '@/lib/helpers/createQuery'

import GuestsDto from './guests.dto'

namespace GuestsService {
  const baseURL = '/api/guests'
  const service = InstanceAxios({ baseURL })

  export async function GetGuestDetail(id: string) {
    return service.get<null, GuestsDto.Guest>(`/${id}`)
  }

  GetGuestDetail.useQuery = createQuery(GetGuestDetail)
}

export default GuestsService
