import {ApiClient} from "./client/api-client";

const client = new ApiClient("auth");

export interface JwtPayload {
    token: string;
    refreshToken: string;
}

export default {};
