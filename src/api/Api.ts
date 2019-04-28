enum HttpRequestType{
    POST = "POST",
    GET = "GET"
}

// REMINDER: SUT = SECURITY UNIVERSAL TOKEN

const BACK_URL = process.env.BACK_URL ? `${process.env.BACK_URL}` : "http://les.viter.dk:3030";

class Api{

    public testServer(){
        new Promise((resolve, reject) => {
            fetch(`${BACK_URL}/sut`, {
                method: HttpRequestType.POST,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sut: 'sott',
                })
            }).then(response => {
                response ? resolve(response) : console.log("No response given")
            }).catch((err) => {
                console.log(err)
            })
        })
    }
}

const api = new Api();

export default api;


