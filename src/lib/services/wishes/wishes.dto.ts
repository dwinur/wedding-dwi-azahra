namespace WishesDto {
  export interface Wish {
    id: string
    guestId: string
    groupId: string
    name: string
    description: string
    status: number
    createdAt: Date
  }

  export interface CreateWish {
    guest_id: string | null
    group_id: string | null
    name: string
    description: string
    status: number
  }
}

export default WishesDto
