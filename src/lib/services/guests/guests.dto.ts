namespace GuestsDto {
  export interface Guest {
    id: string
    groupId: string
    name: string
    seen: number
  }

  export interface CreateGuest {
    group_id: string
    name: string
  }
}

export default GuestsDto
