export interface User {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}

// datas로 하지 않는 이유는 그게 더 관리가 어렵기 때문!! fetching하는 함수들은 각각의 api로 빼놓는다.
export const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if(!response.ok){
        throw new Error("getUsers fetching failed")
    }
    const users = await response.json()
    return users
}

export const getUser = async (id : string) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if(!response.ok){
        throw new Error("getUser fetching failed")
    }
    const user = await response.json()
    return user
}