    import axios from "axios";

    const commonApi = async (reqUrl, reqMethod = "GET", reqHeader = { 'Content-Type': 'application/json' }, reqBody = null) => {
        const config = {
            url: reqUrl,
            method: reqMethod,
            headers: reqHeader,
            data: reqBody,
        };

        try {
            const response = await axios(config);
            return response; 
        } catch (error) {
            console.error(`Error in ${reqMethod} request to ${reqUrl}:`, error);
            throw error.response || error;
        }
    };

    export default commonApi;
