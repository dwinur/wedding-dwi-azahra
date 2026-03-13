import InstanceAxios from '@/configs/axios'
import createQuery from '@/lib/helpers/createQuery'
import createMutation from '@/lib/helpers/createMutation'

import GuestsDto from './guests.dto'

namespace GuestsService {
  const baseURL = '/api/guests'
  const service = InstanceAxios({ baseURL })

  export async function GetGuestDetail(id: string) {
    return service.get<null, GuestsDto.Guest>(`/${id}`)
  }

  GetGuestDetail.useQuery = createQuery(GetGuestDetail)

  export async function VisitGuest(payload: { name: string }) {
    return service.post<null, GuestsDto.Guest>(`/visit`, payload)
  }

  VisitGuest.useMutation = createMutation(VisitGuest)
}

export default GuestsService
