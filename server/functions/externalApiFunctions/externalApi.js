import fetch from "node-fetch"

export default async function externalApi() {

        try {
            const target = `https://echo-serv.tbxnet.com/v1/secret/files`; 

            const res = await fetch(target, {
                headers: {
                    'authorization': 'Bearer aSuperSecretKey',
                }
            });
    
            if (res.status === 200) {
    
                const data = await res.text();
                return data
    
            } else {
                console.log(`Error code ${res.status}`);
            }
        } catch (err) {
            console.log(err)
        }

    return externalApi
}
