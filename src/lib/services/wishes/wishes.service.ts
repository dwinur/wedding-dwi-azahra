import InstanceAxios from '@/configs/axios'
import createMutation from '@/lib/helpers/createMutation'
import createQuery from '@/lib/helpers/createQuery'

import WishesDto from './wishes.dto'

namespace WishesService {
  const baseURL = '/api/wishes'
  const service = InstanceAxios({ baseURL })

  export async function GetWishes() {
    return service.get<null, WishesDto.Wish[]>('')
  }

  GetWishes.useQuery = createQuery(GetWishes, { refetchInterval: 1000 * 60 })

  export async function CreateWish(payload: WishesDto.CreateWish) {
    return service.post<null, boolean>('/', payload)
  }

  CreateWish.useMutation = createMutation(CreateWish)

  export async function DeleteWish(id: string) {
    return service.delete<null, boolean>(`/${id}`)
  }

  DeleteWish.useMutation = createMutation(DeleteWish)
}

export default WishesService
