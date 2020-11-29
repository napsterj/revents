import { SIGN_IN_USER, SIGN_OUT_USER } from "./authConstants";

export function signIn(payload) {
    return  {
        type : SIGN_IN_USER,
        payload
    }
}

export function signOut() {
    return  {
        type: SIGN_OUT_USER
    }
}