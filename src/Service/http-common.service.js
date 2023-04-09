import axios from "axios";

export async function http(apiRoute, payload, requestType) {
    try {
        const response = await axios({
            method: requestType,
            url: apiRoute,
            data: payload
        });

        return response;
    } catch (error) {
        console.error(error);
    }
}
