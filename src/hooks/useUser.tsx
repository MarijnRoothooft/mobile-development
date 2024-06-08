import {useGetCurrentUser} from '@/api/auth'
import {User} from '@/models/firebaseTypes'

const useUser = (): User | null => {
    const {data: user} = useGetCurrentUser()
    return user ?? null
}

export default useUser
