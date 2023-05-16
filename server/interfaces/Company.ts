interface SharedUser {
    user_id: string,
    access_level: number
}

interface SharedData {
    is_shared: boolean,
    users?: Array<SharedUser>
}

export default interface Company {
    public_id?: string,
    name: string,
    description?: string,
    logotype?: string,
    hero?: string,
    shared_data: {
        is_shared?: SharedData
    }
}